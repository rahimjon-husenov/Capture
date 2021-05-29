import React from 'react';
import styled from 'styled-components';
import Img from '../clock.png'
import Img1 from '../team.png'
import Img2 from '../tree.png'
import {motion} from 'framer-motion'
import {title} from '../animate'
import Waves from '../components/Wave'



const AboutUs = () => {
  return (<div>
      <div
      className="Aboutus">
        <Waves />
    <Hide>
    < motion.h1
    
      variants={title}
      animate= "show"
      initial="hidden"

    >We work to make<br></br>
    your <span>dreams</span> come
    true.</motion.h1>
    
    </Hide>
    
    <Hide>
    <motion.h2

    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:2}}
      }
    
    >
    Contact us for any photography or videography ideas 
    that you have. We have professionals with 
    amazing skills to help you achieve it.
    </motion.h2>
    </Hide>
   
    <Hide>
    <motion.h3



initial = {
  {opacity:0, y:70}
}
animate ={
  {opacity:1,
  y:0,
  transition:{
    duration:1,
    delay:3}}
  }

  className="retry"
   
    >Contact Us</motion.h3>
    </Hide>
   
  </div> 
  <div className="camera">
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

    >High <span>Quality</span> Services</motion.h1> 
    <div className="camera1">
    <div className="clockk">
    <motion.img
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:1}}
      }

    className="img" src={Img} />
    <motion.p
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:1}}
      }
    
    >We working fast and adjective</motion.p>
    </div>
    <div className="team">
    <motion.img 
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:1}}
      }

    className="img" src={Img1} />
    <motion.p
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:1}}
      }
    
    >Us work is teammate</motion.p>
    </div>
    
    <div className="cheap">
    <motion.img 
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:1}}
      }
    
    className="img" src={Img2} />
    <motion.p
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:1}}
      }
    
    >Us work is cheap</motion.p>
    </div>
    </div>
    
    </div>
    <div className="divend">
    <motion.h1

variants={title}
animate= "show"
initial="hidden"
    
    className="any">Any Questions?</motion.h1>
    <motion.p

    variants={title}
    animate= "show"
    initial="hidden"
    
    className="faq">FAQ</motion.p>
    <motion.p 
    
    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:2}}
      }

    className="b1">How do I start?</motion.p>
    <br></br>
    <hr></hr>
    <motion.p
    

    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:2}}
      }
    className="b2">What Products do you offer?</motion.p>
    <br></br>
    <hr></hr>

    <motion.p
    

    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:2}}
      }
    className="b2">Diferrent Payment Methods</motion.p>
    <br></br>
    <hr></hr>

    <motion.p
    

    initial = {
      {opacity:0, y:70}
    }
    animate ={
      {opacity:1,y:0,
      transition:{
        duration:1,
        delay:2}}
      }
    className="b3">Daily Schedule</motion.p>
    <br></br>
    <hr></hr>
    </div>
    

    </div>
  
  )
}


const Hide = styled.div`
overflow: hidden;
`

export default AboutUs;
