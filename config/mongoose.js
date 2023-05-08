const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Food');

const db = mongoose.connection;

db.once('open', (err) => {
    if (err) {
        console.log("Database is not connected");
    }
    console.log("Db is connected");
});

module.exports = db;