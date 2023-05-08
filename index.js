const express = require('express');
const PORT = 8080;
const app = express();
const path = require('path');
const db = require('./config/mongoose');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const userPassport = require('./config/userPassport');
const passportLocal = require('./config/passport');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: true }));
app.use('/uploads/item', express.static(path.join(__dirname, 'uploads/item')));


app.use(cookieParser());
app.use(session({
    name: 'Login',
    secret: 'Ridham',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 10 * 10 * 36000 },
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser)


app.use('/', require('./routes/index'));

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log("Server is running on PORT :", PORT);
});