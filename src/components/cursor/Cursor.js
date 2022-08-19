import React from 'react'
import '../cursor/Cursor.css'
import {motion} from 'framer-motion'

const Cursor = ({mousePosition, cursorVariant, setCursorVariant}) => {

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
        },
        text: {
            height:150,
            width:150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            
            mixBlendMode: "difference"
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

