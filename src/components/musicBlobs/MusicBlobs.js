import React, {useState} from 'react'
import {motion} from 'framer-motion'
import '../musicBlobs/MusicBlobs.css'

const MusicBlobs = () => {

    const [colour, setColour] = useState('default')

    const changeBlob = () => {
        setColour('black')
    }
    const defaultBlob = () => {
        setColour('default')
    }

    const blobVariants = {
        default:{
            backgroundColor:'#f1efec',            
        },
        black: {
            backgroundColor:'#121212',   
        }
    }



  return (

    <>
    <div className='blob-container'>
        <motion.div 
            onMouseEnter={changeBlob}
            onMouseLeave={defaultBlob}
            on
            
            className='blob'
            variants={blobVariants}
            animate={colour}
        />
        <motion.div 
            className='blob'
        />
        <motion.div 
            className='blob'
        />
        <motion.div 
            className='blob'
        />

</div>
        


    
    
    
    </>

  )
}

export default MusicBlobs
