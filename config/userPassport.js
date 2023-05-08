const passport = require('passport');
const Admin = require('../model/Admin.model');
const passportStrategy = require('passport-local').Strategy;
const Client = require('../model/Client.model');

passport.use('User', new passportStrategy({
    usernameField: 'email',
}, async (email, password, done) => {
    let user = await Client.findOne({ email: email });
    if (!user || !user.password == password) {
        return done(null, false);
    }
    else {
        return done(null, user);
    }
}));

passport.setUser = (req,res,next)=>{
    if (req.isAuthenticated()) {
        res.locals.admin = req.user;
    }
    next();
}

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    let user = await Client.findById(id) || await Admin.findById(id);
    if (user) {
        return done(null, user);

    }
    return done(null, false);
});

passport.authenticateUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    }
    else{
        return res.redirect('/userLog');
    }
}

module.exports = passport;