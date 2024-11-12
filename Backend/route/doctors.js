import { Router } from "express";
import Doctor from "../models/Doctors.model.js";
const doctorsroute=Router()




//Doctor.jsx send api
doctorsroute.get("/getdata",async(req,res)=>{
  let data = await Doctor.find()
  res.json(data)
})



doctorsroute.post("/postdata",(req,res)=>{
try{
       let {Details} = req.body;
       let senddata = new Doctor(Details)
       senddata.save()
       res.json({done:"data"})
       console.log(Details)   
}
catch(e){
       console.log("doctor from not pust in database")
}
})
        



//send to patients.jsx api
doctorsroute.get("/get",async(req,res)=>{
      try{
       let getdata = await Doctor.find()
       res.json(getdata)
      }
      catch(e){
       console.log("data to not send paients.jsx")
      }
  })


export default doctorsroute;