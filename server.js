const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const comments = require('./routes/api/comments');

const app = express();

//Bodyparser middleware 
app.use(bodyParser.json()); 

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo 
mongoose
    .connect(db)
    .then(() => console.log('database connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/comments', comments);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on ${port}`));