import React, {useState} from 'react'
import {motion} from 'framer-motion'
import '../musicBlobs/MusicBlobs.css'

const MusicBlobs = () => {

    const [colour, setColour] = useState('default')

    const changeBlob = () => {
        setColour('blue')
    }

    const blobVariants = {
        default:{
            backgroundColor:'#121212',
            
        },
        blue: {
            backgroundColor:'#BACDCF',
            
        }
    }



  return (

    <>
    <div className='blob-container'>
        <motion.div 
            
            onClick={changeBlob}
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
