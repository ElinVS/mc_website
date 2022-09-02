import React from 'react'
import {motion} from 'framer-motion'
import '../header/Header.css'

const header = () => {
  

    const container = {
        initial: {
            x: 0,
            opacity:0

          },
          show: {
            y: 0,
            opacity:1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        };
      
      const item = {
        initial: {
            y: -80,
            opacity:0  
          },
          show: {
            y: 0,
            opacity:1,

            transition: {
              duration: 1.2,
              type: "tween",
              ease: "easeInOut",
            },
          },
        };


  return (
    <>

        <motion.div
            className='h1-container'
            variants={container}
            initial='initial'
            animate='show'
            >
                
            <motion.h1 
                className='h1-text'
                variants={item}>MATTHEW COLLINGS</motion.h1>
        </motion.div>
    
    </>
  )
}

export default header
