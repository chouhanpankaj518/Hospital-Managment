import { Router } from "express";
import patients from "../models/Patients.model.js";

const patientsroute = Router();

patientsroute.get("/getpatients", async (req, res) => {
  try {
    // Populate the 'doctorname' field to get the doctor's name
    let showdata = await patients.find().populate('doctorname', 'name');n
    res.json(showdata);
  }
   catch (e) {
    console.log("Error fetching patients data:", e);
    res.status(500).json({ error: "Error fetching patients data" });
  }
});

patientsroute.post("/postpatients", (req, res) => {
  try {
    let { details } = req.body;
    let newmodel = new patients(details);
    newmodel.save();
    console.log(details);
    res.json({ done: "data" });
  }
   catch (e) {
    console.log("Error saving patient data:", e);
    res.status(500).json({ error: "Error saving patient data" });
  }
});

export default patientsroute;
