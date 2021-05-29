import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {motion} from 'framer-motion'



const OurWork = () => {
  
  return (
   <div>
      <h4 className="moon">The Moon</h4>
      <hr></hr>
      <motion.div 
      
      initial = {
        {opacity:0}
      }
      animate ={
        {opacity:1,
        transition:{
          duration:1,
          delay:1}}
        }
      className="moon1"></motion.div>
        
        <h4 className="family">The Family</h4>
        <hr></hr>
        <motion.div 
        
        initial = {
          {opacity:0}
        }
        animate ={
          {opacity:1,
          transition:{
            duration:1,
            delay:1}}
          }
        className="family1"></motion.div>

        <h4 className="car">The Car</h4>
        <hr></hr>
        <motion.div
        
        initial = {
          {opacity:0}
        }
        animate ={
          {opacity:1,
          transition:{
            duration:1,
            delay:1}}
          }
        
        
        className="car1"></motion.div>
      
   </div>
       
      
      
        
      

       
        
  );
};




export default OurWork;
