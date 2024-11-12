import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    experience: {
        type: String,
        required: true,
        min: 0
    },
    salary: {
        type: Number,
        required: true,
        min: 0
    },
    distance: {
        type: String
    },
    treatment: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
