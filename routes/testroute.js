const express = require('express'); 
const TC=require('../controllers/TestController');

const router=express.Router();

router.get('/',(req,res)=>{
     res.send(`<h3>Welcome to my testing routing....!</h3>`);
})

router.get('/show',(req,res)=>{
   res.status(200).json({nm:'sourav',age:25,skills:['java','python','nodejs']});
})

router.get('/viewall',TC.fetchall);

router.post("/insert",TC.addinfo); 

router.get('/view/:id',TC.srch);

module.exports=router;