import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({

    PatientNo:{
        type:Number,
        require:true
    },
    name:{
        type:"string",
        require:true,
        trim:true
    },
    age:{
        type:Number,
      require:true,
      min:0
    },
    gender:{
        type:"string",
        require:true
    },
    city:{
        type:"string",
        require:true,
        trim:true
    },
    disease:{
        type:"string",
        require:true,
        trim:true
    },
    doctorname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor'
    },

    feeDue:{
      type:Number,
      require:true,
      min:0
    },
    feePaid:{
        type:Number,
        require:true
    }
},{
    timestamps:true
});


const patients= mongoose.model("Patient",patientSchema);
export default patients;