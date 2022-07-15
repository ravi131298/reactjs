import React from 'react'
import Card from './Card'
import web from "./img/web.jpg"
import app from "./img/app.jpg"
import soft from "./img/software.jpg"
import digi from "./img/DM.jpg"
import android from "./img/Ad.jpg"
import "./Services.css"
function Services() {
  return (
    <>
    <div className='main-div'>
    <h1>Our Service</h1>
       <div className='services-container' >

          <Card name="Web development" imgsrc={web}/>
          <Card name ="App development" imgsrc={app}/>
          <Card name="Software development"imgsrc={soft}/>
          <Card name="Digital Marketing"imgsrc={digi}/>
          <Card name="Android development"imgsrc={android}/>
          <Card name ="Marketing"imgsrc={digi}/>
       </div>
    </div>
    </>
  )
}

export default Services
