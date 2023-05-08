const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema({
    client_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true, },
    cn_code: { type: String, required: true },
    phone: { type: String, required: true },
});

const Phone = mongoose.model('Phone', PhoneSchema);
module.exports = Phone;