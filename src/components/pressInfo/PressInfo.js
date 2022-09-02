import React, {useState, useEffect} from 'react'
import quoteArray from './pressData'
import '../pressInfo/PressInfo.css'

const PressInfo = () => {

    const [currentText, setCurrentText] = useState(0);

    useEffect (() => {
      const textId = setInterval (() => {
        setCurrentText((i) => {
          return i === 10 ? 0 : i +1;
        })
      }, 8000)
      return () => clearInterval(textId)
    }, []);



  return (
    <>

    <div className='press-text-container'>
        {quoteArray[currentText]}
    </div>
    
    </>
  )
}

export default PressInfo
