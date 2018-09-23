const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const CommonItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = commonItem = mongoose.model('commonItem', CommonItemSchema);