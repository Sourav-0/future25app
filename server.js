const express=require('express'); 
const testrouter=require('./routes/testroute');
const emprouter=require('./routes/emproute');  
const cors=require('cors');

const app=express(); 

const port=4000;

//cors enable 
app.use(cors());

app.get('/',(req,res)=>{
   res.send(`<h3>Welcome to my Express Coding</h3> <ol>  
                <li>hello world</li> <li>hello java</li>
            </ol>`);
}) 

//let express accept the incoming data from the frontend in json and form data format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//register router with express app
app.use('/future',testrouter); 

app.use('/ejob',emprouter);



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

