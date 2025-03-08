const express=require('express');
const mongoose=require('mongoose');
//let db1=mongoose;
const personschema=new mongoose.Schema({
       name:{ type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    dish:{
        type: String,
        enum : ["momo","rice","daal","ghee"],
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
const person=mongoose.model('person',personschema);

//Export
// This is for testing purpose
module.exports=person;