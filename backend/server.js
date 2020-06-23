// Setting up the Basic Express Server Backend
// Start server with `nodemon server` 
// Listens on port 4000
// Start mongo with `mongod`
// create db by launching mongo then type `use biz`
// default port is 27017, if you change this change 
// mongoose.connect

// Begin const declaration
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
// End const declaration

app.use(cors());
app.use(bodyParser.json());

// Establish connection with DB 
mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true
});
const connection =  mongoose.connection;

// Begin Logging
connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})
app.use(bodyParser.json());app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
// End Logging