const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 3000;

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () =>{
    console.log('Serving on port 3000')
})