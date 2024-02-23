const path = require('path')

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

// variable declaration for this server
const port = 8080;

// currently not used but will be later
// connect to the database where the end is the name of the database
// mongoose.set('strictQuery', true); // to supress the strictQuery warnings
// mongoose.connect('mongodb://etime.ristein.eu/eTime');


// all files like css images are located in the public folder
app.use(express.static(path.join(__dirname, '/public/')));

// use the ejs engine to render html pages
app.set('view engine', 'ejs');

// enable the urlencoded to acess the body of requests
app.use(express.urlencoded({ extended: false }));

// override method to be able to delete, or put (not only GET,POST)
app.use(methodOverride('_method'));



// this is the main route and the page a user will first come to
app.get('/', async(req, res) => {
    res.render('main/index');
})

// this ist default route to about page
app.get('/about', async(req, res) => {
    res.render('main/about')
})

// this ist default route to about page
app.get('/imprint', async(req, res) => {
    res.render('main/imprint')
})

// this will start the webserver with the port to listen at
app.listen(port);