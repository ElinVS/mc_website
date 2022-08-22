import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'

import '../bio/Bio.css'

import bioimages from '../../bioimages'


const BioContainer = () => {

  const [currentImage, setCurrentImage] = useState(0);


  // useEffect (() => {
  //   const imageId = setInterval (() => {
  //     setCurrentImage(bioimages[Math.floor(Math.random() * bioimages.length)])
  //   }, 5000)
  //   return () => clearInterval(imageId);
  // }, [])


  // useEffect (() => {

  //   const imageId = setInterval (() => {
  //     if (currentImage === bioimages.length ){
  //       setCurrentImage(0);
  //     }
  //     else {
  //       setCurrentImage(currentImage + 1);
  //     }
  //   }, 5000)

  //   return () => clearInterval(imageId);

  // }, [])

  useEffect (() => {
    const imageId = setInterval (() => {
      setCurrentImage((i) => {
        return i === 2 ? 0 : i +1;
      })
    }, 5000)
    return () => clearInterval(imageId)
  }, []);




  return (
    <>

    <Helmet>
      <title>Matthew Collings - Bio</title>
    </Helmet>

    <div className='bio-image-container'>

      <img src={bioimages[currentImage]} className='bio-image'/>
      
    </div>
    
    </> 
  )
}

export default BioContainer
