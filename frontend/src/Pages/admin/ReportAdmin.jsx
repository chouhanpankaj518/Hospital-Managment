
import React  from 'react';
import './ReportAdmin.css';
import axios from 'axios';

export default function ReportAdmin() {
  function reportSubmit(e) {
    e.preventDefault();
   
    let reportData={
        patientsNo:e.target.patientNo.value,
        date:e.target.date.value,
        PatientName:e.target.patientName.value,
        age:e.target.age.value,
        gender:e.target.gender.value,
        contactNo:e.target.contactNo.value,
        bloodGrp:e.target.bloodGrp.value,
        disease:e.target.disease.value,
        doctorName:e.target.doctorName.value,
        specialist:e.target.specialist.value
      }
       e.target.reset(reportData)

    console.log(reportData)
     async function reportdata(){
        let res = await axios.post("http://localhost:5600/report/postreport",{"report":reportData})
        console.log(res.data); 
     }
     reportdata()
  }

  return (
    <div className="report-admin">
      <h1  style={{color:"white"}}>Hospital Name</h1>
      <form onSubmit={reportSubmit}>
        <div className="form-group">
          <label htmlFor="patientNo">Patient No.</label>
          <input type="text" id="patientNo" name="patientNo" required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Dated</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name</label>
          <input type="text" id="patientName" name="patientName" required />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" required />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label>
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="female" required /> Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contactNo">Contact No</label>
          <input type="tel" id="contactNo" name="contactNo" required />
        </div>
        <div className="form-group">
          <label htmlFor="bloodGrp">Blood Group</label>
          <input type="text" id="bloodGrp" name="bloodGrp" required />
        </div>


        <div className="form-group">
          <label htmlFor="disease">Disease</label>
          <input type="text" id="disease" name="disease" required />
        </div>
        <div className="form-group">
          <label htmlFor="doctorName">Doctor Name</label>
          <input type="text" id="doctorName" name="doctorName" required />
        </div>
        <div className="form-group">
          <label htmlFor="specialist">Specialist</label>
          <input type="text" id="specialist" name="specialist" required />
        </div>
        <button type="submit" className='buttonsub'>Submit</button>
      </form>
    </div>
  );
}