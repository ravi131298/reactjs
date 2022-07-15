import React, { useState } from 'react'

function Contact(props) {
  const [data,setdata] = useState({
    FullName :"",
    Number:"",
    Email:"",
msg:""
  })

  const inputEvent =(event)=>{
    const {name,value} = event.target;
    setdata((prev)=>{
     return{ 
     ... prev,
     [name]:value,}
    })
  }

  const forSubmit = (e) =>{
e.preventDefault();
alert(`Name is ${data.FullName}|| Phone number is ${data.Number} || email is ${data.Email} || msg is ${data.msg} `)
  }
  return (
    <>
    <div className='my-5'>
     
      <h1 className='text-center'> Contact</h1>
     </div>
     <div className='container contact_div'>
      <div className='row'>
        <div className='col-md-6 col-10 mx-auto'>
          <form onSubmit={forSubmit}>

        <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full_Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" name="FullName" value={data.FullName} onChange={inputEvent} placeholder="Enter your name"/>
              </div>
              <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="number" class="form-control" id="exampleFormControlInput1"  name="Number" value={data.Number} onChange={inputEvent} placeholder="Enter your number"/>
              </div>
              <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"  name="Email" value={data.Email} onChange={inputEvent} placeholder="name@example.com"/>
              </div>
            
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"  name="msg" value={data.msg} onChange={inputEvent} rows="3"></textarea>
              </div>
              <div class="col-12">
    <button class="btn btn-outline-secondary" type="submit">Submit </button>
  </div>
          </form>
        </div>
      </div>
     </div>
     </>
  )
}

export default Contact
