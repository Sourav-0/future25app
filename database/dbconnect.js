const mongoose=require('mongoose');

async function main(){
    //connect using mongodb atlas 
    await mongoose.connect('mongodb+srv://skundu1989:redhat123@cluster0.ks3buqz.mongodb.net/future2k25db?retryWrites=true&w=majority&appName=Cluster0/batchdb');
}

main().then(
    ()=>{console.log('Mongodb Atlas connected successfully')}
).catch(
    (err)=>{console.log('Error connecting to database:',err)}
) 

module.exports=mongoose;