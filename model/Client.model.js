const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: String, required: true },
    password: { type: String, required: true },
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;