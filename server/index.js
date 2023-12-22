const express = require('express');
const cors = require('cors')
const bodyParser=require("body-parser")


const app =express({
    cors:true
});
app.use(cors);
app.use(bodyParser);



app.listen(4000,()=>console.log("Server started at port 4000"))