import React from 'react'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import '../work/Work.css'

const WorkContainer = () => {
  return (

    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>

    <motion.div 
    className='test'
    // initial={{ scaleX: 0 }}
    // animate={{ scaleX: 1 }}
    // exit={{ scaleX: 0 }}
    // transition={{ duration: 0.5 }}
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration: 1,
      type: "tween",
      ease: "easeIn",
    }}
       
    
    >

      <Link className="work-links" to="/film"> Film </Link>             
      <Link className="work-links" to="/live"> Live  </Link>
      <Link className="work-links" to="/snowden"> Snowden  </Link>

      

      <br/>

      SHOULD WORK  BE A DROPDOWN MENU INSTEAD?
      
    </motion.div>

     

    </>

  )
}

export default WorkContainer
