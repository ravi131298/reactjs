import React from 'react'
import Common from './Common'
import web from "../Components/img/2.jpg"
function About() {
  return (
    <Common title="Welcome to About Page" visit="/contact" btnname="Contact Now" image={web}/>
  )
}

export default About
