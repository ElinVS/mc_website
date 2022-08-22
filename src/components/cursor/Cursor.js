import React from 'react'
import '../cursor/Cursor.css'
import {motion} from 'framer-motion'

const Cursor = ({mousePosition, cursorVariant, setCursorVariant}) => {


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
            mixBlendMode: "hard-light",
        },

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

