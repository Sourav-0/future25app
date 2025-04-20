const mongoose=require('../database/dbconnect');

const empSchema=new mongoose.Schema({
    empnm:{type:String,required:true}, 
    emploc:{type:String,required:true,default:"kolkata"}, 
    empem:{type:String,required:true,unique:true}, 
    empdp:{type:String},
    empgen:{type:String,required:true},
},{timestamps:true}); 

const empmodel=mongoose.model('employee',empSchema);

module.exports=empmodel; // Exporting the model

