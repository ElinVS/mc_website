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
              <p  className='contact-page-email'
               onMouseEnter={textEnter} 
               onMouseLeave={textLeave}
              ><a href='mailto:mlscollings@gmail.com'>mlscollings@gmail.com</a></p>
          </motion.div>

          <motion.div 
            className='contact-container-booking'
            variants={container}
            initial='initial'
            animate='show'
            >
              <p 
              onMouseEnter={textEnter} onMouseLeave={textLeave} 
              className='contact-page-email'>
                <a href='mailto:denovalirecords@gmail.com'>denovalirecords@gmail.com</a> </p>
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
