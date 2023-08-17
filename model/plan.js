const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
    name: String,
    email: String,
    destination: String,
    travelers: Number,
    budget: Number
});

const PlanModel = mongoose.model('Plan', planSchema);

module.exports = { PlanModel };
