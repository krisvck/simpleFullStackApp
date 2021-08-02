
//Require the modules
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
//const { request, response } = require('express');
dotenv.config();

const dbService = require('./dbService');

//We will be able to send data to our back end
app.use(cors());
app.use(express.json()); //send it in json format
app.use(express.urlencoded({ extended : false}));

//Create our routes and the basic of mysql queries
//create 
app.post('/insert', (request, response) => {
    console.log(request.body);

});
//read
app.get('/getAll', (request, response) => {
    //console.log('test');
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
    /*
    response.json({
        success: true
    });
    */
});
//update
app.patch('/update', (request, response) => {
    const { id, name } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.updateNameById(id, name);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});
//delete
app.delete('/delete/:id', (request, response) => {
    const { id } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);
    
    result
    .then(data => response.json({success : data}))
    .catch(err => console.log(err));
});

app.get('/search/:name', (request, response) => {
    const { name } = request.params;
    const db = dbService.getDbServiceInstance();

    const result = db.searchByName(name);
    
    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
});

//Make sure our local server is working
app.listen(process.env.PORT, () => console.log('app is running'));
//console.log(process.env.PORT);