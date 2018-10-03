const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');
const commonitems = require('./routes/api/commonitems');

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//Local machine DB config
const env = app.get('env');
let db;

if(env === 'development'){
    //remote mongo db:
    db = require('./config/keys').mongoURI;
    //local mongo db (no internet work):
    //db = "mongodb://localhost:27017/homesense";
} else if(env === 'production'){
    db = `mongodb://${process.env.mlab_user}:${process.env.mlab_pw}@ds051863.mlab.com:51863/homesense`;
}

//Connect to mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);
app.use('/api/commonitems', commonitems);

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port} in environment ${env}`));

