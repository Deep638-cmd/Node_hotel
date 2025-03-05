const express=require('express');
const router=express.Router();


router.post('/',async(req, res) => {
    try{
        const data=req.body;
        //console.log(data)
    const newperson=new person(data);// Assign all data in newperson variable
   const response=await newperson.save();
   
   
   
        console.log("Data Saved successsfully");
 res.status(200).json(response);
   }
   catch(err){
    console.log(err);
    res.status(500).json({error:"Internetserver error"});
   }
    
   })

   router.get("/",async(req,res)=>{
    try{
        let newpersons=person;
        const data=await newpersons.find();
        console.log("Data fected suceessfully");
       
        res.status(200).json(data);
     
    }
    catch(err){
        console.log(err);
    res.status(500).json({error:"Internetserver error"});
    }
})
module.exports=router;