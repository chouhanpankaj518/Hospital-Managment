import {Router} from "express"
import Report from "../models/Report.model.js"

let reportroutes = Router()

reportroutes.get("/getreport",async(req,res)=>{
 
    let showreport = await Report.find()
    res.json(showreport)

})

reportroutes.post("/postreport",(req,res)=>{

let {report}= req.body;
 let sedreport = new Report(report)
 sedreport.save()
 
})

export default reportroutes;
