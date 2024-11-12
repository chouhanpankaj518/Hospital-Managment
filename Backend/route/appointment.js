import {Router} from 'express'
import Appointment from '../models/Appointment.model.js'

const Appointrouter=Router()

Appointrouter.post("/post",(req,res)=>{
   let {Appoint}=req.body;
   let sendata = new Appointment(Appoint)
   sendata.save()
   console.log(sendata)
   res.json({"Data":done})
})


Appointrouter.get("/get",async(req,res)=>{
   let data = await Appointment.find()
   res.json(data)

})

export default Appointrouter;