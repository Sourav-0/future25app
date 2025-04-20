const employee=require('../models/empmodel'); // Importing the employee model 

class Empcontroller 
{
   //fetch all records 
  static fetchall=async (req,res)=>{
      try 
      {
          const result=await employee.find({});
          res.status(200).json({message:"All employee data",data:result});
      }
      catch(err) 
      {
          console.log(err);
          res.status(500).json({message:"Internal server error"});
      }
  } 

   //fetch records with id 
   static fetchid=async(req,res)=>{
      try 
      {
         const empid=req.params.id;  
         const info=await employee.findById(empid);
         if(!info) 
         {
             res.status(404).json({message:"Employee not found"});
         }
         else 
         {
             res.status(200).json({message:"Employee data found",data:info});
         } 

      }
      catch(err) 
      {
          console.log(err);
          res.status(500).json({message:"Internal server error"});
      }
   } 

   //search with input data
   static empsrch=async (req,res)=>{
      try 
      {
          const {emploc,empdp}=req.body;  
          const result=await employee.find({emploc:emploc,empdp:empdp}); 
          if(result.length==0) 
          {
              res.status(404).json({message:"No employee found"});
          }
          else 
          {
              res.status(200).json({message:"Employee data found",data:result});
          }
      }
      catch(err) 
      {
          console.log(err);
          res.status(500).json({message:"Internal server error"});
      }
   }

   //insert with input data
   static insertemp=async (req,res)=>{
       try 
       {
          const {empnm,emploc,empem,empdp,empgen}=req.body; 
          const em=new employee();
          em.empnm=empnm;
          em.emploc=emploc;
          em.empem=empem;
          em.empdp=empdp; 
          em.empgen=empgen; 
          const result=await em.save();
          if(result)
          {
            res.status(200).json({msg:"employee inserted success"});
          }
          else 
          {
            res.status(500).json({msg:"employee insertion failed"});
          }
       }
       catch(err)
       {
        console.log(err);
        res.status(500).json({message:"Internal server error"});
       }
   } 

   //update with id
   static updateemp=async (req,res)=>{
      try 
      {
        const {eid}=req.params; 
        const {empnm,emploc,empem,empdp,empgen}=req.body;
        const info=await employee.findById(eid);
        if(info)
        {
           info.empnm=empnm||info.empnm;
           info.emploc=emploc||info.emploc;
           info.empem=empem||info.empem;
           info.empdp=empdp||info.empdp;
           info.empgen=empgen||info.empgen;
           const result=await info.save(); 
           if(result)
           {
            res.status(200).json({msg:"employee updated success"});
           }
        }
        else 
        {
            res.status(200).json({msg:"Invalid Id for update"});
        }

      }
      catch(err)
      {
        console.log(err);
        res.status(500).json({message:"Internal server error"});
      }
   }

   //multi update with data
   static multiupd=async (req,res)=>{
      try 
       {
         const {loc}=req.params; 
         const {empdp}=req.body; 
         const r=await employee.updateMany({emploc:loc},{empdp:empdp}); 
         //console.log(r);
         if(r.modifiedCount>0)
         {
            res.status(200).json({msg:"employee updated success"});
         }
         else
         {
            res.status(200).json({msg:"No employee found"});
         } 

       }
       catch(err)
       {
        console.log(err); 
       }
   }  

   //delete with id 

   static delemp=async (req,res)=>{
       try 
       {
         const{eid}=req.params;
         const r=await employee.deleteMany({_id:eid});
         if(r.deletedCount>0) 
         {
            res.status(200).json({msg:"employee deleted success"});
         }
         else 
         {
            res.status(200).json({msg:"No employee found"});
         }

       }
       catch(err)
       {
        console.log(err); 
       }
   }

    

}
module.exports=Empcontroller;  

