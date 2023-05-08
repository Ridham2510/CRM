const passport = require('passport');
const passportStrategy = require('passport-local').Strategy;
const Admin = require('../model/Admin.model');

passport.use('Admin', new passportStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    let admin = await Admin.findOne({ email: email });
    if (!admin || !admin.password == password) {
        return done(null, false);
    }
    else {
        return done(null, admin);
    }
}));


passport.serializeUser((admin, done) => {
    return done(null, admin.id);
});

passport.deserializeUser(async (id, done) => {
    let admin = await Admin.findById(id);
    if (admin) {
        return done(null, admin);
    }
    return done(null, false);
});

passport.authUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        next();
    }
    else{
        return res.redirect('/');
    }
}

module.exports = passport;