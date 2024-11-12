// import axios from 'axios'
import React, { useEffect, useState } from 'react'

import "./Report.css"
import logo from "../Images/home-hospital-logo.webp"
export default function Report() {
    let [display , setdisplay] = useState([])

    useEffect(()=>{
        async function Display(){
            let data = await fetch("http://localhost:5600/report/getreport")
            data = await data.json()
            console.log(data)
            setdisplay(data)
        }
        Display()
    },[])

   

  return (
    <div className="report">
     
     {
      display.map((e,i)=>(
        <div className='report2' key={i}>
           <div className="logocard">  
         <img src={logo}/>
         <h1 style={{color:'white'}}> Hospital Name</h1>
        </div>    <br/><br/>



        <div  className="contentcard"> 
          <div>
            <p><b>Patient Name:</b>{e.PatientName}</p>
            <p><b>Patient No:</b>{e.patientsNo}</p>
            <p><b>Blood Grop:</b>{e.bloodGrp}</p>
          </div>
          <div>
            <p><b>Date:</b>{e.date}</p>
            <p><b>Age:</b>{e.age}</p>
            <p><b>Contact No:</b>{e.contactNo}</p>
          </div>
        </div>

       <div className="contentsecond">
       <p><b>Gender:</b>{e.gender}</p>
       <p><b>Disease:</b>{e.disease}</p>
        <p><b>Doctor Name:</b>{e.doctorName}</p>
        <p><b>Specialist:</b>{e.specialist}</p>
       </div>

       <div className="footer">
       
       <h4>Dr. Prethaviraj Sing Chouhan</h4>
       <div>
       <p>Rec No. <b>70243-97621</b></p>
        <p>Email: <b>chouhanpankaj518@gmail.com</b></p>
        <p>Add: <b>Address: 123 Health Street, Medical City, MC 12345</b></p>
      
       </div>
       </div>
        </div>
      ))
     }
    </div>


  )
}