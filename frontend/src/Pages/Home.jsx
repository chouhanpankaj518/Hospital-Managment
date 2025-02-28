import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios'

const styles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
   font-family: Arial, sans-serif;
  }

  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
    text-align: center;
    margin-bottom: 30px;
   box-shadow: 2px 2px 5px black;
    color: #fff;
  }

  .hospital-image {
   margin-left:20rem;
   border:"2px solid white";
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .section {
    flex: 1 1 300px;
    margin: 0 15px 30px;
  }

  h1 {
   color:white;
   margin-left:7rem;
    margin-bottom: 20px;
  }

  .popup{
  color:"white";
  }

  h2 {
    color: white;
    margin-bottom: 15px;
     color: #fff;
  }

  p {
    margin-bottom: 15px;
     color: #fff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
     color: #fff;
  }

  .cta-button {
    display: inline-block;
    background-color: #0077be;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  .cta-button:hover {
    background-color: #005580;
  }
  .Appointmentsubmit{
   background-color:blue;
   color:white;
   margin-left:30px;
   margin-top:5px;
  }  

  // @media screen and (max-width: 768px) {
  //   .content {
  //     flex-direction: column;
  //   }
    
  // .hospital-image {
  //  margin-left:0rem;
  //  width:"300px;
  // }

  //   .section {
  //     margin: 0 0 30px;
  //   }
  //     h1{
  //     margin-left:3rem;
  //     }
  // }
  
  
    @media screen and (max-width: 600px) {
    h1 {
      font-size: 24px;
      margin-left: 0;
      text-align: center;
    }

    .hospital-image {
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      display: block;
    }

    .section {
      flex: 1 1 100%;
      margin: 0 0 20px;
    }

    .cta-button {
      width: 100%;
      text-align: center;
      padding: 12px;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    form label,
    form input,
    .Appointmentsubmit {
      width: 100%;
      margin-bottom: 10px;
    }

    .Appointmentsubmit {
      margin-left: 0;
    }
  }
`;

import logo2 from "../Images/logo2.png"
export default function Home() {

  async function Appointment(e){
    e.preventDefault()

    let Appoint={
      name:e.target.patientname.value,
      contact:e.target.contact.value,
      doctorname:e.target.doctorname.value,
      date:e.target.date.value,
      time:e.target.time.value,
      Reason:e.target.Reason.value
    }
   e.target.reset()
    console.log(Appoint)
     async function postdata(){
       let senddata = await axios.post("http://localhost:5600/Appointment/post",{"Appoint":Appoint})
       console.log(senddata.data)
     }
     postdata()
      
  }
  
  return (
    <div>
      <style>{styles}</style>
      <div className="container">
        <header className="header">
          <h1>Welcome to City General Hospital</h1>
        </header>
        <img
          src={logo2}
          alt="City General Hospital"
          className="hospital-image"
        />
        <div className="content">
          <div className="section">
            <h2>About Us</h2>
            <p>
              City General Hospital has been serving our community for over 50 years. 
              Our mission is to provide high-quality, compassionate healthcare to all patients. 
              With state-of-the-art facilities and a team of dedicated professionals, 
              we strive to be the leading healthcare provider in the region.
            </p>
            <p>
              Our commitment to excellence has earned us numerous accolades, 
              including the prestigious Healthcare Quality Award for three consecutive years.
            </p>
          </div>
          <div className="section">
            <h2>Our Services</h2>
            <ul>
              <li>24/7 Emergency Care</li>
              <li>General and Specialized Surgery</li>
              <li>Cardiology and Heart Center</li>
              <li>Pediatrics and Neonatal Care</li>
              <li>Orthopedics and Sports Medicine</li>
              <li>Oncology and Cancer Treatment</li>
              <li>Neurology and Brain Health</li>
              <li>Women's Health and Maternity</li>
            </ul>
          </div>
          <div className="section">
            <h2>Why Choose Us</h2>
            <p>
              At City General Hospital, we combine cutting-edge medical technology 
              with a patient-centered approach to deliver exceptional care. Our team 
              of experienced doctors, nurses, and support staff work tirelessly to 
              ensure the best possible outcomes for our patients.
            </p>
            <ul>
              <li>State-of-the-art facilities and equipment</li>
              <li>Experienced and compassionate medical professionals</li>
              <li>Comprehensive health programs and preventive care</li>
              <li>Commitment to patient comfort and satisfaction</li>
              <li>Continuous investment in medical research and innovation</li>
            </ul>
          </div>
          <div className="section">
            <h2>Contact Us</h2>
            <p>We're here to help you with any questions or concerns you may have.</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@citygeneralhospital.com</p>
            <p>Address: 123 Health Street, Medical City, MC 12345</p>
            <p>
              {/* <a href="/" className="cta-button"> */}
              <Popup trigger={<button className="cta-button"> Schedule an Appointment</button>} position="top center"  > 
   
            <div>
              <form onSubmit={(e)=>Appointment(e)}>
                <label htmlFor='name'>patient name</label>
                <input type='text' name='patientname'/>

                <label htmlFor='contact'>Contact</label>
                <input type='Number' name='contact'/>

                <label htmlFor='doctor name'>Doctor name</label>
                <input type='text' name='doctorname'/>

                <label htmlFor='date'>date</label>
                <input type='date' name='date'/>

                <label htmlFor='time'>time</label>
                <input type='text' name='time'/>

                <label htmlFor='Reason for Visit'>Reason for Visit</label>
                <input type='text' name='Reason'/>

                <button className='Appointmentsubmit'>submit</button>
              </form>
            </div>
          </Popup>
              {/* </a> */}
            </p>

         
           


            
          </div>
        </div>
      </div>
    </div>
  );
}