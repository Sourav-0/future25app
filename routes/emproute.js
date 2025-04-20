const express=require('express');
const EC=require('../controllers/Empcontroller'); 

const route=express.Router(); // Creating a router object 

route.get('/',(req,res)=>{
    res.send("<h3>welcome to my employee routing</h3>");
})

route.get('/viewall',EC.fetchall); // Fetching all employee data  

route.get('/view/:id',EC.fetchid); // Fetching one employee data 

route.post('/search',EC.empsrch); // Searching employee data 

route.post('/addemp',EC.insertemp);  // Inserting employee data

route.put('/empupd/:eid',EC.updateemp); // update employee with Id

route.put('/updbyloc/:loc',EC.multiupd); // update employee with input data

route.delete("/deluser/:eid",EC.delemp); // delete employee with Id


module.exports=route; 