db = db.getSiblingDB('shelter');

db.createCollection('shelter_info');
db.createCollection('people_info');


db.shelter_info.insertMany([
    {
       id: 1,
       name: "避難所A",
       prefecture: "Tokyo",
       capacity: 100,
       food: 20,
       water: 30,
       medicine1: "30",
       medicine2: "20",
       medicine3: "10"
    },
    {
       id: 2,
       name: "避難所B",
       prefecture: "Osaka",
       capacity: 150,
       food: 50,
       water: 60,
       medicine1: "40",
       medicine2: "30",
       medicine3: "20"
    },
    {
       id: 3,
       name: "避難所C",
       prefecture: "Aichi",
       capacity: 200,
       food: 70,
       water: 80,
       medicine1: "50",
       medicine2: "40",
       medicine3: "30"
    },
    {
       id: 4,
       name: "避難所D",
       prefecture: "Tokyo",
       capacity: 120,
       food: 40,
       water: 50,
       medicine1: "35",
       medicine2: "25",
       medicine3: "15"
    },
    {
       id: 5,
       name: "避難所E",
       prefecture: "Osaka",
       capacity: 180,
       food: 60,
       water: 70,
       medicine1: "45",
       medicine2: "35",
       medicine3: "25"
    },
    {
       id: 6,
       name: "避難所F",
       prefecture: "Aichi",
       capacity: 220,
       food: 80,
       water: 90,
       medicine1: "55",
       medicine2: "45",
       medicine3: "35"
    }
]);

db.people_info.insertMany([
    {
      rakutenId: "r11223",
      name: "松本太郎",
      birthDate: new Date("1992-04-12"),
      gender: "男性",
      requiredMedicine: "Aspirin",
      medicinePerDay: 1,
      shelterId: 1
    },
    {
      rakutenId: "r44556",
      name: "井上花子",
      birthDate: new Date("1987-09-22"),
      gender: "女性",
      requiredMedicine: "Aspirin",
      medicinePerDay: 2,
      shelterId: 2
    },
    {
      rakutenId: "r77889",
      name: "高橋一郎",
      birthDate: new Date("1995-02-28"),
      gender: "男性",
      requiredMedicine: "Ibuprofen",
      medicinePerDay: 2,
      shelterId: 1
    },
    {
      rakutenId: "r99012",
      name: "佐々木花子",
      birthDate: new Date("1990-07-15"),
      gender: "女性",
      requiredMedicine: "Paracetamol",
      medicinePerDay: 1,
      shelterId: 3
    },
    {
      rakutenId: "r55667",
      name: "山本健太",
      birthDate: new Date("1988-03-20"),
      gender: "男性",
      requiredMedicine: "Paracetamol",
      medicinePerDay: 3,
      shelterId: 2
    },
    {
      rakutenId: "r33445",
      name: "石田陽子",
      birthDate: new Date("1993-11-30"),
      gender: "女性",
      requiredMedicine: "Aspirin",
      medicinePerDay: 2,
      shelterId: 3
    }
  ])
  