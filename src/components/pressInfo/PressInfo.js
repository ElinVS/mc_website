import React, {useState, useEffect} from 'react'
import quoteArray from './pressData'
import '../pressInfo/PressInfo.css'

const PressInfo = () => {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect (() => {
      const imageId = setInterval (() => {
        setCurrentImage((i) => {
          return i === 10 ? 0 : i +1;
        })
      }, 8000)
      return () => clearInterval(imageId)
    }, []);



  return (
    <>

    {/* <div className='press-text-container'> */}
        {quoteArray[currentImage]}
    {/* </div> */}
    
    </>
  )
}

export default PressInfo
