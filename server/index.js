const express = require('express');
const bodyParser = require ('body-parser');
const rc = require('./Controller/Review_controller.js');

const app = express();

app.use( bodyParser.json());

app.post(`/api/review`, rc.getReview)


const port = 4000;
app.listen(port, ()=> {console.log(`Port ${port} is listening to your problems.`)})

