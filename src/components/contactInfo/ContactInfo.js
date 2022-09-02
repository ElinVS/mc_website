import React from 'react'
import {motion} from 'framer-motion'

import '../contactInfo/ContactInfo.css'

const ContactInfo = ({setCursorVariant}) => {

    const textEnter = () => {
        setCursorVariant('textNavBar');
    } 
    
      const textLeave = () => {
        setCursorVariant('default')
    }

    const container = {
        initial: { 
            opacity:0
        },
        show: {
           
            opacity:1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        };
      
      const item = {
        initial: {   
            opacity:0, 
        },
        show: {
            opacity:1,
            transition: {
              duration: 3,
              type: "spring",
              ease: "easeInOut",
            },
          },
        };


  return (
    <>

    <motion.section 
      className='contact-page'
      // initial={{width:0}}
      // animate={{width:"100%"}}
      // exit={{x: window.innerWidth}}
      // transition={{
      //   duration: 1,
      //   type: "tween",
      //   ease: "easeIn",
       
      // }}
    
    >
      <div className='contact-page-wrapper'>
        <motion.div className='contact-container-general'
        variants={container}
        initial='initial'
        animate='show'
        >

          <motion.p  
            className='contact-page-text'
            variants={item}
            >GENERAL ENQUIRES</motion.p>
              <p  onMouseEnter={textEnter} onMouseLeave={textLeave} className='contact-page-email'>mlscollings@gmail.com</p>
          </motion.div>

          <motion.div 
            className='contact-container-booking'
            variants={container}
            initial='initial'
            animate='show'
            >
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} className='contact-page-email'>denovalirecords@gmail.com </p>
          <motion.p 
            className='contact-page-text'
            variants={item}
            >BOOKINGS CONTACT </motion.p>
          </motion.div>
        </div>

    </motion.section>
    
    </>
  )
}

export default ContactInfo
