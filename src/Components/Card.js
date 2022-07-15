import React from 'react'

function Card(props) {
  return (
    <div className='details'>
               <img src={props.imgsrc} alt=""/>
               <div className='dt'>
               <h3>{props.name}</h3>
               <p>Lorem ipsum dolor sit amet,nostrud exercitation ullamco labori est laborum</p>
                <button type="button">Go someWhere</button></div>
    </div>
  )
}

export default Card
