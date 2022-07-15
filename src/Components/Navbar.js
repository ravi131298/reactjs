import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line,RiCloseLine,RiAlignRight } from "react-icons/ri";
import "./Navbar.css"
function Navbar() {
 const [toggleM,settoggle]=useState(false)
  return (
   <>
   <div className='container-fluid nav-bg'>
    <div className='row'>
      <div className='col-10 mx-auto'>

     
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand text-darks" to="/">Navbar</Link>
   
    <div>
      <ul className="navbar-nav m-auto smb-2 mb-lg-0"s>
        <li className="nav-item  ">
          <Link  className="nav-link active text-dark" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/contact">contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/services">services</Link>
        </li>
 
       
  </ul>
  
    </div>
    
    <div className='media'>
        {toggleM 
        ?<RiCloseLine size={27} onClick={()=>settoggle(false)}/>
        :<RiMenu3Line size={27} onClick={()=>settoggle(true)}/>}
        {toggleM && (
  
 <div className='lll'>
    <div className='eee'>
    <li >
      <Link  className=" text-dark" aria-current="page" to="/">Home</Link>
    </li>
    <li >
      <Link className=" text-dark" to="/about">About</Link>
    </li>
    <li >
      <Link className=" text-dark" to="/contact">contact</Link>
    </li>
    <li >
      <Link className="text-dark" to="/services">services</Link>
    </li>
    </div>
   </div>




     

        )}
  </div>
  </div>
</nav>
</div>
    </div>
   </div>
   </>
  )
}

export default Navbar
