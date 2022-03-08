const express = require('express');
const mongoose = require('mongoose');

//addons
const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');


const comments = require('./routes/api/comments');
const users = require('./routes/api/user')

const app = express();

//Bodyparser middleware 
app.use(bodyParser.json()); 
app.use(cookieParser());
app.use(cors());
app.use(logger("dev"));

//DB config
const db = require('./config/keys').mongoURI;

//connect to mongo 
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true, })
    .then(() => console.log('database connected...'))
    .catch(err => console.log(err));

//Use Routes'
const User = require('./routes/api/user')
app.use('/api/user', User);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on ${port}`));