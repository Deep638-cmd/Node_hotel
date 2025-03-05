const express=require('express');
//const path =require('path');
const app=express();
const db=require('./dataabse');
const person=require('./schema');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.get('/',(req,res)=>{
//     res.send("Deep ");

// })

// app.delete("/ayan",async(req,res)=>{
//     try{
//         const data=await person.deleteOne();
//         console.log("Data fected suceessfully");
       
//         res.status(200).json(data);
     
//     }
//     catch(err){
//         console.log(err);
//     res.status(500).json({error:"Internetserver error"});
//     }
// })
app.put("/ayan",async(req,res)=>{
    try{
        const data=await person.updateOne({"name": "Ayan Chatterjee"},{"$set":{"c":"23"}});
        console.log("Data fected suceessfully");
       
        res.status(200).json(data);
     
    }
    catch(err){
        console.log(err);
    res.status(500).json({error:"Internetserver error"});
    }
})

app.get('/r/:deep', async(req, res) => {       // Using Params or Dynamically Routing
 
    try{
      let deep=req.params.deep;
  if(deep=="chef"|| deep=="manager" || deep=="waiter"){
  const response= await person.find({work:deep},{});
  console.log("Fetched sucessfully");
  res.status(200).json(response);
  }
  else{
  res.status(404).json({error : "Invalid"})
  }  
  } 
  catch(err){
  console.log(err);
  res.status(500).json({error : "Cant find"});
  }
  })
const route=require('./ROUTE/route');
app.use('/ayan',route);



app.listen(5000)


