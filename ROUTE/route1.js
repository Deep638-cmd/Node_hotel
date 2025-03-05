const express=require('express');
//const app=express();
const mongoose= require('mongoose');
const router=express.Router();
const menu=require('./menu');
router.use(express.json());
router.post('/',async(req, res) => {
    try{
        const data=req.body;
        //console.log(data)
    const newmenu=new menu(data);// Assign all data in newperson variable
   const response=await newmenu.save();
   
   
   
        console.log("Data Saved successsfully");
 res.status(200).json(response);
   }
   catch(err){
    console.log(err);
    res.status(500).json({error:"Internetserver error"});
   }
    
   })
router.get('/',async(req,res)=>{
try{
    let newmenu=menu;
    const data=await newmenu.find();
    console.log("Data fected suceessfully");
   
    res.status(200).json(data);
 


}
catch(err){
    console.log(err);
res.status(500).json({error:"Internetserver error"});
}
})
module.exports=router;