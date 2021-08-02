
//Require the modules
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
//const { request, response } = require('express');
dotenv.config();

const dbServer = require('./dbservice');

//We will be able to send data to our back end
app.use(cors());
app.use(express.json()); //send it in json format
app.use(express.urlencoded({ extended : false}));

//Create our routes and the basic of mysql queries
//create 
app.post('/insert', (request, response) => {

});
//read
app.get('/getAll', (request, response) => {
    //console.log('test');
    response.json({
        success: true
    });
});
//update

//delete


//Make sure our local server is working
app.listen(process.env.PORT, () => console.log('app is running'));
//console.log(process.env.PORT);