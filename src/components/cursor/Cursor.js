import React from 'react'
import '../cursor/Cursor.css'
import {motion} from 'framer-motion'

const Cursor = ({mousePosition, cursorVariant}) => {


// variants of animations on state update (framer-motion property)

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
        },
        textNavBar: {
            height:32,
            width:32,
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            backgroundColor:'#fff', 
            mixBlendMode:'difference'
        },
        textContact:{
            height:150,
            width:150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor:'#fff', 
            mixBlendMode:'difference'

        }


    }

  return (
   <>

   <motion.div
    className='cursor'
    variants={variants}
    animate={cursorVariant}
    />
   
   </>
  )
}

export default Cursor

