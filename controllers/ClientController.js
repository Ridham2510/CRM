const Client = require('../model/Client.model');

module.exports.insertClient = async (req, res) => {
    let data = await Client.create(req.body);
    if (data) {
        return res.redirect('/')
    }
    return res.redirect('back');
}
