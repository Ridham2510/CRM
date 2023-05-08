const Admin = require('../model/Admin.model');

module.exports.admin = (req, res) => {
    if (req.isAuthenticated()) {
        return res.redirect('/adminDashboard');
    }
    return res.render('admin_login');
}

module.exports.dashboard = (req, res) => {
    if (req.isAuthenticated) {

        return res.render('dashboard')
    }
    return res.redirect('/admin')
}

module.exports.addAdmin = (req, res) => {
    return res.render('add_admin');
}

module.exports.insertAdmin = async (req, res) => {
    let data = await Admin.create(req.body);
    if (data) {
        return res.redirect('/');
    }
    return res.redirect('back');
}

module.exports.checkLogin = (req, res) => {
    return res.redirect('adminDashboard');
}