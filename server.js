// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes

const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 3000;

// TODO-Spin up the server
const server = app.listen(port,listening);

function listening() {
  console.log(`running on localhost port:${port}`);  
};

// GET route
app.get('/all', sendData);

function sendData (req, res) {
  res.send(projectData);
};

// const data = [];

// app.post('/all', addData)
// function addData(req, res){
//     data.push(req.body)
//     console.log(data)
// }

//POST route
app.post('/addData', addData);

function addData (req,res){
    console.log(req.body)
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        feeling: req.body.feeling
    }
    res.send(projectData = newEntry);
};
