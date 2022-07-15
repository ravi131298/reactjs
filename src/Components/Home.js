import React from 'react'

import Common from './Common'
import "./Home.css"
import web from "../Components/img/boy.jpg"
function Home() {
  return (
<>
<Common title="Welcome to Home page" visit="/services" btnname="Get started" image={web} />
</>
    
  )
}

export default Home
