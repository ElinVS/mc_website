import React from 'react'
import {motion} from 'framer-motion'
import '../socialsInfo/SocialsInfo.css'

const SocialsInfo = ({setCursorVariant}) => {

    const textEnter = () => {
        setCursorVariant('textContact');
    } 
    
      const textLeave = () => {
        setCursorVariant('default')
    }

    const container = {
        hidden: {
            x: 0,
            opacity:0
          },
        visible: {
            y: 0,
            opacity:1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        };


    const item = {
        hidden: {
            y: 80,
            opacity:0  
          },
        visible: {
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

    <section className='socials-section'>

      <motion.div  
        onMouseEnter={textEnter} 
        onMouseLeave={textLeave} 
        className='socials-grid-wrapper'
        initial='hidden'
        whileInView='visible'
        variants={container}
        >
        <div className='div-spotify'> 
        <motion.p 
            className='socials-text'
            variants={item}
            > SPOTIFY
        </motion.p>
        </div>
        <div className='div-bandcamp'>
          <motion.p 
          className='socials-text'
          variants={item}
          >BANDCAMP</motion.p>
        </div>
        <div className='div-twitter'>
          <motion.p 
          className='socials-text'
          variants={item}
          >TWITTER</motion.p>
        </div>
        <div className='div-instagram'>
          <motion.p 
          className='socials-text'
          variants={item}
          >INSTAGRAM</motion.p>
        </div>
      </motion.div>
    </section>



    </>
  )
}

export default SocialsInfo
