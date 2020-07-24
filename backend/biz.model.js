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
    biz_zip: {
        type: Number
    },
    biz_type: {
        type: String
    }
});

module.exports = mongoose.model('Biz',Biz);

