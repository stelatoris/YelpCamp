const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 3000;

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/makecampground', async (req, res) => {
    const camp = new Campground({title: 'My Backyard', description: 'Cheap camping!'});
    await camp.save();
    res.send(camp);
})

app.listen(port, () =>{
    console.log('Serving on port 3000')
})