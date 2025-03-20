import React from 'react'
import './paragraph.css'

const Paragraph = (props) =>{
 return (
   <p className='paragraph' style={{color:'red'}}>{props.text.toUpperCase()}</p>
  
 )

}

             
 

export default Paragraph