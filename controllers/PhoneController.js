const Phone = require('../model/Phone.model');
const Client = require('../model/Client.model');
const Address = require('../model/Address.model');

module.exports.phone = (req, res) => {
    return res.render('phone')
}

module.exports.insertPhone = async (req, res) => {
    let data = await Phone.create(req.body);
    if (data) {
        return res.redirect('/order');
    }
    else {
        return res.json({ err: "not inserted" })
    }
}

module.exports.order = async (req, res) => {
    console.log(req.user.id);
    let client = await Client.findById(req.user.id);
    console.log(client);
    if (client) {
        let data = await Phone.findOne({client_id:client.id}).populate('client_id').exec()
        let record = await Address.findOne({client_id:client.id}).populate('client_id').exec();
        if (data && record) {
            return res.render('order', {
                data: data,
                record: record
            })
        }
    }

    return res.redirect('back')
}