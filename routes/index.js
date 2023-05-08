const express = require('express');
const route = express.Router();
const adminCtrl = require('../controllers/AdminController');
const itemCtrl = require('../controllers/ItemController');
const userCtrl = require('../controllers/UserController');
const addCtrl = require('../controllers/AddressController');
const phoneCtrl = require('../controllers/PhoneController')
const Item = require('../model/Item.model')
const passport = require('passport');
const auth = passport.authUser;
const authenticateUser = passport.authenticateUser;

route.get('/admin', adminCtrl.admin);
route.post('/checkLogin', passport.authenticate('Admin', { failureRedirect: '/admin' }), adminCtrl.checkLogin);
route.get('/adminDashboard', auth, adminCtrl.dashboard);
route.get('/addAdmin',  adminCtrl.addAdmin)
// route.get('/showAdmin', adminCtrl.showAdmin)
route.post('/insertAdmin',  adminCtrl.insertAdmin);



route.get('/', userCtrl.signUp);
route.post('/createAc', userCtrl.createAc);
route.get('/userLog', userCtrl.userLog)
route.post('/userLogin', passport.authenticate('User', { failureRedirect: '/userLog' }), userCtrl.userLogin);
route.get('/dashboard', authenticateUser, userCtrl.dashboard);

route.get('/buyItem/:id', addCtrl.buyItem);
route.post('/insertAddress', addCtrl.insertAddress)
route.get('/phone', phoneCtrl.phone);
route.post('/insertPhone', phoneCtrl.insertPhone);
route.get('/order', phoneCtrl.order);


route.get('/add_item', itemCtrl.addItem)
// route.get('/show_product',adminCtrl.showProduct)
route.post('/insert_item', Item.uploadedAvatar, itemCtrl.insert_item);

module.exports = route;