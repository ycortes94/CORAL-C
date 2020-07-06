// Setting up the Basic Express Server Backend
// Start server with `nodemon server` 
// Listens on port 4000
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

// Establish connection with DB 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };
mongoose.connect(mongoURI, options);
const connection =  mongoose.connection;

// Begin Logging
connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})


// Setup Router
bizRoutes.route('/').get(function(req, res){
    Biz.find(function(err, biz){
        if(err){
            console.log(err);
        }
        else {
            res.json(biz);
        }
    });
});

//Get Item
bizRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Biz.findById(id, function(err, biz) {
        res.json(biz);
    });
});

// Upadate Entry
bizRoutes.route('/update/:id').post(function(req, res) {
    Biz.findById(req.params.id, function(err, biz) {
        if (!biz)
            res.status(404).send("data is not found");
        else
            biz.biz_name = req.body.biz_name;
            biz.biz_description = req.body.biz_description;
            biz.biz_address = req.body.biz_address;
            biz.biz_type = req.body.biz_type;            
            biz.save().then(biz => {
                res.json('Biz updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

//Add Entry
bizRoutes.route('/add').post(function(req, res) {
    let biz = new Biz(req.body);
    biz.save()
        .then(biz => {
            res.status(200).json({'biz': 'biz added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to add biz');
        });
    console.log(biz);
});

app.use('/bizs', bizRoutes);


app.use(bodyParser.json());app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
