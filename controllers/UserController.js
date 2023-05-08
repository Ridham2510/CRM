const Item = require('../model/Item.model');
const Client = require('../model/Client.model');

module.exports.dashboard = async (req, res) => {
    let data = await Item.find();
    if (data) {
        return res.render('User_dashboard', {
            item: data,
        })
    }
    return res.redirect('back')
}

module.exports.signUp = (req, res) => {
    if(req.isAuthenticated()){
        return res.redirect('/dashboard')
    }
    return res.render('client_signUp');
}

module.exports.createAc = async (req, res) => {
    let data = await Client.create(req.body);
    if (data) {
        return res.redirect('/userLog');
    }
    else {
        return res.redirect('back');
    }
}

module.exports.userLog = (req,res)=>{
    return res.render('client_login')
}

module.exports.userLogin = (req,res)=>{
    return res.redirect('/dashboard')
}
