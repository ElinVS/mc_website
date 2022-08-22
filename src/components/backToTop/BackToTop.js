import React, {useState, useEffect} from 'react'
import '../backToTop/BackToTop.css'

const BackToTop = () => {

    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect = (()=> {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ){
                setShowBackToTop(true)
            }
            else {
                setShowBackToTop(false)
            }
        })


    }, [])

    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }

  return (

    <>
        <div>
            <button onClick={scrollToTop}> hello </button>
        </div>
    </>
  )
}

export default BackToTop
