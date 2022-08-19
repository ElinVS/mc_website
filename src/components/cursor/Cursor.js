import React from 'react'
import '../cursor/Cursor.css'
import {motion} from 'framer-motion'

const Cursor = ({mousePosition, cursorVariant, setCursorVariant}) => {


// variants of animations on state update

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
            // backgroundColor: "#ddd",
            
            mixBlendMode: "difference"
        },
        textHeader: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            
    
            mixBlendMode: "spotlight"


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

