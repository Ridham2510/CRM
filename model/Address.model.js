const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true, },
    number: { type: String, required: true },
    street: { type: String, required: true },
    area: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
});

const Address = mongoose.model('Address', AddressSchema);
module.exports = Address;