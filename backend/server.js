// Setting up the Basic Express Server Backend
// Start server with `nodemon server` 
// Listens on port 4000

// Begin const declaration
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;app.use(cors());
// End const declaration

// Begin Logging
app.use(bodyParser.json());app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
// End Logging