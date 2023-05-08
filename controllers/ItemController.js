const Item = require('../model/Item.model');


module.exports.addItem = (req, res) => {
    return res.render('add_item');
}

module.exports.insert_item = async (req, res) => {
    let imgPath = ''
    if (req.file) {
        imgPath = Item.avatarPath + '/' + req.file.filename;
    }
    req.body.item_img = imgPath;
    let data = await Item.create(req.body);
    if (data) {
        return res.redirect('/');
    }
    return res.redirect('back');
}