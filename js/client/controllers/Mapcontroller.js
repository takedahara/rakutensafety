exports.index = (req, res) => {
    res.render('Map', { title: 'Map' });
  }; 

  exports.CurrentLocation = (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }