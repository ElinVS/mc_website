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
            ><a href='https://open.spotify.com/artist/4xPxOC7r1FDBvjSjmnaRLp?si=guqkRmV9SiSc3lrqEHZTXQ' target='_blank' rel="noreferrer">SPOTIFY</a>
        </motion.p>
        </div>
        <div className='div-bandcamp'>
          <motion.p 
          className='socials-text'
          variants={item}
          ><a href='https://matthewcollings.bandcamp.com/' target='_blank' rel="noreferrer">BANDCAMP</a>  </motion.p>
        </div>
        <div className='div-twitter'>
          <motion.p 
          className='socials-text'
          variants={item}
          ><a href='https://twitter.com/mlscollings' target='_blank' rel="noreferrer">TWITTER</a></motion.p>
        </div>
        <div className='div-instagram'>
          <motion.p 
          className='socials-text'
          variants={item}
          ><a href='https://www.instagram.com/matthew_collings/' target='_blank' rel="noreferrer">INSTAGRAM</a></motion.p>
        </div>
      </motion.div>
    </section>



    </>
  )
}

export default SocialsInfo
