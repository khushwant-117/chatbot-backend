/*import express from  'express';
import {config} from 'dotenv';
config();
const app = express();*/

// routes requests in backends

//get-get some dat afrom backend
//put- update ,modify change data , get data from frontend
//post-create new block post (get dta from front end)
//delete

//middleware
//app.use(express.json());
//dynamic routing 
/*app.post("/user/:id",(req,res,next)=>{
  console.log(req.params.id);
  return res.send("hello");
})
;*/

import app from "./app.js"
import { connectToDatabase } from "./db/connection.js"

//connections and listeners
const PORT = process.env.PORT || 5000;
connectToDatabase().then(()=>{
  app.listen(PORT,()=>console.log("server open and connected to database"))
})
.catch((error)=>
  console.log(error));
  