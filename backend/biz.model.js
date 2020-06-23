// Business Model Scheme 

// Set up connection to mongo with mongoose
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let biz = new Schema({
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
        type: Number
    }
});

module.exports = mongoose.model('biz',biz);

