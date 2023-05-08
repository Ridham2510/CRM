const Address = require('../model/Address.model');

module.exports.buyItem = async (req, res) => {
    return res.render('address', {
        id: req.params.id
    })
}

module.exports.insertAddress = async (req, res) => {
    let data = await Address.create(req.body);
    if (data) {
        return res.redirect('/phone')
    }
    else {
        return res.json({ err: 'failed' })
    }
}