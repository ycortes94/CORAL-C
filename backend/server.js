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
const bizRoutes = express.Router();
const PORT = 4000;
const mongoURI = "mongodb+srv://root:HkYDrZGfCfTMHM3@cluster0.b2do9.azure.mongodb.net/dev?retryWrites=true&w=majority";
// End const declaration

let Biz = require('./biz.model')

app.use(cors());
app.use(bodyParser.json());
app.use('/bizs', bizRoutes);

// Establish connection with DB 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    /*useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6*/
  };

mongoose.connect(mongoURI, options);
const connection =  mongoose.connection;

// Begin Logging
connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})
app.use(bodyParser.json());app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
// End Logging

// Setup Router
bizRoutes.route('/').get(function(req,res){
    Biz.find(function(err, bizs){
        if(err){
            console.log(err);
        }
        else {
            res.json(bizs);
        }
    });
});

