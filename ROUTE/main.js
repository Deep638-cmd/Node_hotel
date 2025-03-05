const express=require('express');
const app=express();
const r=require('./route1');


app.use('/ayan',r);
app.listen(3900, () => {
    console.log(`Example app listening on port 3600`)
  })