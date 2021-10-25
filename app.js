const express = require('express');
const port = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const users = require('./routes/users');
const passport = require('passport');
const path = require('path');

const app = express();
require('dotenv').config();
app.use(express.static(path.join(__dirname,"dist/mega-front")));
// SEEDERS

const {seedAdmin} = require('./seeders/admin');
// console.log(seedAdmin());

app.use(cors());
app.use(express.json());



//CONNECT TO DATABASE

mongoose.connect(process.env.DB_CONNECTION,(err)=>{
    if(err){
        console.log('Error - ' + err)
    }
    else{
        console.log('Connected to DB!')
    }
})



app.use('/users', users)


app.get('/*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/mega-front/index.html'));
    });

app.listen(port, (req, res)=>{
    console.log(`server is listening on port ${port}`)
})
