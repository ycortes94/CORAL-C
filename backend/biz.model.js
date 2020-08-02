// Business Model Scheme 

// Set up connection to mongo with mongoose
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let Biz = new Schema({
    biz_name: {
        type: String
    },
    biz_description: {
        type: String
    },
    biz_address: {
        type: String
        // I would like this to be a multi-value field
        // For now just a string
    },
    biz_type: {
        type: String
    },
    position: {
        
            lat: {
                type: Number
            },
            lon: {
                type: Number
            }
        
    }
});

module.exports = mongoose.model('Biz',Biz);

