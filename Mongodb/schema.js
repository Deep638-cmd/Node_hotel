const mongoose=require('mongoose');
let db1=mongoose;
const personschema=new db1.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    work:{
        type: String,
        enum : ["chef","Waiter","Manager"],
        required: true
    },
    mobile:{
type: Number,
required: true
    },
    email:{
type : String,
required: true,
unique: true
    }

})
//create person Model
const person=db1.model('person',personschema);

//Export
module.exports=person;