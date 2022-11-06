import React from 'react'
import {motion} from 'framer-motion'
import '../shortBio/ShortBio.css'

const ShortBio = () => {

    const container = {
        initial: {
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

    <section className='short-bio-section'>
        <motion.div 
            className='short-bio-container-outer'
            initial='hidden'
            whileInView='visible'
            variants={container}
            >
            <motion.div 
                className='short-bio-container-inner'
                variants={item}
                >
            </motion.div>
        </motion.div>

        <motion.div
            className='short-bio-text-container'
            initial='hidden'
            whileInView='visible'
            variants={container}
            >
                <motion.p
                    className='short-bio-text'
                    variants={item}
                >Collings's work contrasts the crushed guitars and textures of My Bloody Valentine or Sonic Youth with structures more akin to contemporary classical composers like Steve Reich or David Lang. In his powerful live performances, he uses the amplifier as an instrument and the guitar as a control device for innovative digital processes.  </motion.p>
        </motion.div>
        </section>
    </>
  )
}

export default ShortBio
