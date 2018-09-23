const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create schema
const CommonItemsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = commonItems = mongoose.model('commonItems', CommonItemsSchema);