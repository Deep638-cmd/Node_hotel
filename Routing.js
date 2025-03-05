const express = require('express')
const app = express()
const port = 4000
const database=require("./Mongodb/dataabse")
const person=require("./Mongodb/schema");
app.get('/r/:deep', async(req, res) => {
 
  try{
    let andu=req.params.deep;
if(andu=="chef"|| andu=="manager" || andu=="waiter"){
const response= await person.find({work:andu},{});
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
