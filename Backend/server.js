import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import "dotenv/config"
import mongoose from 'mongoose'

import doctorsroute from './route/doctors.js'
import patientsroute from './route/patients.js'
import reportroutes from './route/report.js'
import Appointrouter from './route/appointment.js'

let app=express()
app.use(cors())
app.use(bodyParser.json())
let port=process.env.port

mongoose.connect(process.env.MONGODB_URI)

app.use("/doctor",doctorsroute)
app.use("/patient",patientsroute)
app.use("/report",reportroutes)
app.use("/Appointment",Appointrouter)


app.get("/api/data",(req,res)=>{
    res.json({"Data":"done"})
})

app.listen(port,()=>{
    console.log("server is runnig",port)
})

