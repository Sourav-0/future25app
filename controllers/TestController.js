
class TestController 
{

    static fetchall=(req,res)=>{
        res.status(200).json([{nm:'sourav',age:25,skills:['java','python','nodejs']},
            {nm:'sachin',age:45,skills:['java','reactjs','nodejs']},
            {nm:'rahul',age:35,skills:['asp.net','nodejs']}
          ]);
    } 

    static addinfo=(req,res)=>{
        console.log(req.body);
        res.status(200).json({msg:'data inserted successfully'});
    } 

    static srch=(req,res)=>{
        console.log(req.params.id);
        res.status(200).json({msg:'data fetched successfully'});
    }

}

module.exports = TestController;