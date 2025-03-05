const mongoose=require('mongoose');
const url="mongodb://localhost:27017/hotels";
mongoose.connect(url,{
//     useNewUrlParseer:true,
// useUnifieldTopology: true
})

const db=mongoose.connection;
db.on("connected",()=>{
console.log("Connected with Database");
})
db.on("disconnected",()=>{
    console.log("DisConnected with Database");
    })
    db.on("error",(err)=>{
        console.log("Error with Database"+err);
        })
        
        // Exports the Dataabse base connection in server
       // module.exports=person;
        module.exports=db;