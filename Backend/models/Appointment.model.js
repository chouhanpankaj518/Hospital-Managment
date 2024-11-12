import mongoose from 'mongoose'

let Appointmentschema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    contact:{
        type:Number,
        require:true
    },
    doctorname:{
        type:String,
        require:true,
        trim:true
    },
    date:{
        type:String,
        require:true
    },
    time:{
        type:String,
        require:true
    },
    Reason:{
        type:String,
        require:true
    }

})

const Appointment = mongoose.model("Appointment",Appointmentschema)
export default Appointment;