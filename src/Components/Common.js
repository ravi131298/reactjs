import React from 'react'
import { Link } from 'react-router-dom'
import image from "../Components/img/boy.jpg"
function Common(props) {
  return (
    <div>
      <div className='main-div'>
  <div className='container'>
    <h1>{props.title}<span>ThapaTechical</span></h1>
    <p>We are the team of talented developer making website</p>
    <Link to={props.visit}><button type="button">{props.btnname}</button></Link>
  </div>
   <div className='image'>
   <img src={props.image} className="animation" />
   </div>
</div>
    </div>
  )
}

export default Common
