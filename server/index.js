const express = require('express');
const bodyParser = require ('body-parser');
const ec = require('./EmployeeController');

const app = express();

app.use( bodyParser.json());

app.get(`/api/employees`, ec.getEmployees) 

app.post(`/api/employees`, ec.addEmployees)

app.put(`/api/employees:id`, ec.editEmployees)

app.delete(`/api/employees/:index`, ec.fire)


const port = 4000;
app.listen(port, ()=> {console.log(`Port ${port} is listening to your problems.`)})

