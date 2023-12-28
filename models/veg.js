const mongoose = require('mongoose');

const VegSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
});

const Veg = mongoose.model('Veg', VegSchema);

module.exports = Veg;