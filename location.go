package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Shelter represents the shelter data structure
type Shelter struct {
	ID       string  `json:"id" bson:"_id"`
	Name     string  `json:"name" bson:"name"`
	Location Location `json:"location" bson:"location"`
}

// Location represents a geographical location with latitude and longitude
type Location struct {
	Lat float64 `json:"lat" bson:"lat"`
	Lng float64 `json:"lng" bson:"lng"`
}

// RequestData represents the data structure for incoming requests
type RequestData struct {
	Lat float64 `json:"lat"`
	Lng float64 `json:"lng"`
}

// MongoDB connection URI and database/collection names
const (
	mongoURI        = "mongodb://localhost:27017"
	databaseName    = "sheltersdb"
	collectionName  = "shelters"
	serverPort      = ":8080"
)

// haversineDistance calculates the great-circle distance between two points
func haversineDistance(lat1, lon1, lat2, lon2 float64) float64 {
	const earthRadius = 6371 // Earth's radius in kilometers

	dLat := (lat2 - lat1) * (math.Pi / 180.0)
	dLon := (lon2 - lon1) * (math.Pi / 180.0)

	a := math.Sin(dLat/2)*math.Sin(dLat/2) +
		math.Cos(lat1*(math.Pi/180.0))*math.Cos(lat2*(math.Pi/180.0))*
			math.Sin(dLon/2)*math.Sin(dLon/2)

	c := 2 * math.Atan2(math.Sqrt(a), math.Sqrt(1-a))

	return earthRadius * c
}

// findNearestShelter finds the nearest shelter to the given latitude and longitude
func findNearestShelter(client *mongo.Client, lat, lng float64) (Shelter, error) {
	collection := client.Database(databaseName).Collection(collectionName)

	cursor, err := collection.Find(context.TODO(), bson.D{})
	if err != nil {
		return Shelter{}, err
	}
	defer cursor.Close(context.TODO())

	var nearestShelter Shelter
	minDistance := math.MaxFloat64

	for cursor.Next(context.TODO()) {
		var shelter Shelter
		if err := cursor.Decode(&shelter); err != nil {
			log.Fatal(err)
		}

		distance := haversineDistance(lat, lng, shelter.Location.Lat, shelter.Location.Lng)
		if distance < minDistance {
			minDistance = distance
			nearestShelter = shelter
		}
	}

	if err := cursor.Err(); err != nil {
		return Shelter{}, err
	}

	return nearestShelter, nil
}

// handleLocation receives latitude and longitude and returns the nearest shelter ID
func handleLocation(w http.ResponseWriter, r *http.Request) {
	var requestData RequestData

	err := json.NewDecoder(r.Body).Decode(&requestData)
	if err != nil {
		http.Error(w, "Invalid request payload", http.StatusBadRequest)
		return
	}

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(mongoURI))
	if err != nil {
		http.Error(w, "Failed to connect to database", http.StatusInternalServerError)
		return
	}
	defer client.Disconnect(context.TODO())

	nearestShelter, err := findNearestShelter(client, requestData.Lat, requestData.Lng)
	if err != nil {
		http.Error(w, "Failed to find nearest shelter", http.StatusInternalServerError)
		return
	}

	response := map[string]string{"shelter_id": nearestShelter.ID}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/get-nearest-shelter", handleLocation).Methods("POST")

	fmt.Printf("Server running on port %s\n", serverPort)
	log.Fatal(http.ListenAndServe(serverPort, router))
}

}
