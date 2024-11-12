import mongoose from 'mongoose'

let reportSchema = new mongoose.Schema({
    patientsNo:{
        type:Number,
        require:true,
        trim:true,
    },
    date:{
        type:"string",
        require:true,
        trim:true
    },
    PatientName:{
        type:"string",
        require:true,
        trim:true
    },
    age:{
        type:Number,
        require:true,
        trim:true
    },
    gender:{
        type:"string",
        require:true,
        trim:true
    },
    contactNo:{
        type:Number,
        require:true,
        trim:true
    },
    bloodGrp:{
        type:"string",
        require:true,
        trim:true
    },
    disease:{
        type:"string",
        require:true,
        trim:true
    },
    doctorName:{
        type:"string",
        require:true,
        trim:true
    },
    specialist:{
        type:"string",
        require:true,
        trim:true
    }

},{
    timestamps:true
})

let Report = mongoose.model("Report",reportSchema)

export default Report;