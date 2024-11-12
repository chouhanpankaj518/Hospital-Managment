import React, { useState } from 'react';
import axios from 'axios'
const styles = `
  .doctor-admin-container {
    font-family: Arial, sans-serif;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .doctor-admin-form {
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

  input[type="text"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  input[type="text"]:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.5);
  }

  .Button{
   background-color:#216FA7;
   color:white;
  }
  @media (max-width: 600px) {
    .doctor-admin-container {
      width: 90%;
      padding: 15px;
    }

    input[type="text"] {
      font-size: 14px;
    }
  }
`;


export default function DoctorAdminForm() {

    
// let [data,setData]=useState([])

function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      experience: e.target.experience.value,
      salary: e.target.salary.value,
      distance: e.target.distance.value,
      treatment: e.target.treatment.value
    };
    // setData([...data, formData]);
    console.log("Updated data:",formData);
    e.target.reset();
 
    async function sendData(){
        let res = await axios.post("http://localhost:5600/doctor/postdata",{"Details":formData})
        console.log(res.data)
    }
    sendData()
  }


  return (
    <div className="doctor-admin-container">
      <style>{styles}</style>
      <form className="doctor-admin-form" onSubmit={handleSubmit}> 
        <h2>Doctor Administration</h2>
        
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
        
        <label htmlFor="experience">Experience (years)</label>
        <input type="text" id="experience" name="experience" />
        
        <label htmlFor="salary">Salary</label>
        <input type="number" id="salary" name="salary" />
        
        <label htmlFor="distance">Distance from hostpital</label>
        <input type="text" id="distance" name="distance" />
        
        <label htmlFor="treatment">Type of Treatment</label>
        <input type="text" id="treatment" name="treatment" /><br/>
        <button className='Button'>submit</button>
      </form>
    </div>
  );
}