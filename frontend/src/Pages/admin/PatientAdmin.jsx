import React, { useEffect, useState } from 'react';
import axios from 'axios'
const styles = `
  .patient-admin-container {
    font-family: Arial, sans-serif;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .patient-admin-form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #0066cc;
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    margin-top: 10px;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  input[type="text"],
  input[type="number"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="radio"] {
    margin-right: 5px;
  }

  .radio-group {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .radio-label {
    margin-right: 15px;
    font-weight: normal;
  }

  button {
    background-color: "blue";
    color: black;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #184f75;
    color:white;
  }

  @media (max-width: 600px) {
    .patient-admin-container {
      width: 90%;
      padding: 15px;
    }

    input[type="text"],
    input[type="number"] {
      font-size: 14px;
    }
  }
`;

export default function PatientAdmin() {
  const [data, setData] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      PatientNo:e.target.PatientNo.value,
      name: e.target.name.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
      city: e.target.city.value,
      disease: e.target.disease.value,
      doctorname: e.target.doctorname.value,
      // doctorname: e.target.doctorname.options[e.target.doctorname.selectedIndex].text,
      feeDue: e.target.feeDue.value,
      feePaid: e.target.feePaid.value
    };
    setData([...data, formData]);
    e.target.reset();

    async function sendData() {
      let res = await axios.post("http://localhost:5600/patient/postpatients", { "details": formData })
      console.log(res.data)
    }
    sendData();
  };



 let [singledata , setsingledata]=useState([])
 useEffect(()=>{
  async function getdata(){
   let data = await fetch("http://localhost:5600/doctor/get")
   data = await data.json()
    setsingledata(data)
    // console.log(data)
  }
  getdata()
 },[])

  return (
    <div className="patient-admin-container">
   
      <style>{styles}</style>
      <form className="patient-admin-form" onSubmit={handleSubmit}>
        <h2>Patient Administration</h2>

        <label htmlFor="Patient No.">Patient No.</label>
        <input
          type="number"
          id="PatientNo"
          name="PatientNo"

        />

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"

        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
        />

        <label>Gender</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="male"
            /> Male
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="gender"
              value="female"
            /> Female
          </label>
        </div>

        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
        />

        <label htmlFor="disease">Disease</label>
        <input
          type="text"
          id="disease"
          name="disease"
        />
        <label htmlFor='doctorname'>doctorname</label>
        <select name="doctorname" id="doctorname" style={{ padding: "0.5rem" }}>
  {singledata.map((e) => (
    <option key={e._id} value={e._id} style={{ background: "teal", color: "white" }}>
      {e.name}
    </option>
  ))}
</select>

        <label htmlFor="feeDue">Fee Due</label>
        <input
          type="text"
          id="feeDue"
          name="feeDue"
        />

        <label htmlFor="feePaid">Fee Paid</label>
        <input
          type="text"
          id="feePaid"
          name="feePaid"
        />
        <button type="submit">Submit</button>
        {/* <input type='submit' /> */}
      </form>
    </div>
  );
}