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
                >Lorem ipsum dolor sit amet. Est voluptatem reiciendis et iusto officiis ut rerum veniam. Ea labore sunt ex architecto fuga qui provident maiores a perferendis doloribus.</motion.p>
        </motion.div>
        </section>
    </>
  )
}

export default ShortBio
