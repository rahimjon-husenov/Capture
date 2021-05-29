import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'

const ContactUs = () => {
  return (
      <div className="getin">
<motion.h1 

initial = {
  {opacity:0, y:70}
}
animate ={
  {opacity:1,y:0,
  transition:{
    duration:1,
    delay:1}}
  }

className="contact">Get in touch.</motion.h1>

        
        <motion.h4
        
        initial = {
          {opacity:0, y:70}
        }
        animate ={
          {opacity:1,y:0,
          transition:{
            duration:1,
            delay:1}}
          }
        
        >Socials</motion.h4>
      
        <motion.h4
        
        initial = {
          {opacity:0, y:70}
        }
        animate ={
          {opacity:1,y:0,
          transition:{
            duration:1,
            delay:1}}
          }
        
        >Send us a message</motion.h4>
     
        <motion.h4
        
        initial = {
          {opacity:0, y:70}
        }
        animate ={
          {opacity:1,y:0,
          transition:{
            duration:1,
            delay:1}}
          }
        
        >Drop an email.</motion.h4>
      </div>
  )
}
            
       


const Hide = styled.div`
  overflow: hidden;
`


const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background: #353535;
  @media (max-width: 1500px) {
    display: none;
  }
`;


export default ContactUs; 
