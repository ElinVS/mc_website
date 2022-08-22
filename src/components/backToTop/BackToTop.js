import React, {useState, useEffect} from 'react'
import '../backToTop/BackToTop.css'
import up_arrow_svg from '../../assets/images/up_arrow_svg.svg'

const BackToTop = () => {

  

    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect  (()=> {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ){
                setShowBackToTop(true)
            }
            else {
                setShowBackToTop(false)
            }
        })

    }, []);


    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        })
    }

  return (

    <>
        <div>

            {showBackToTop && (<img  src={up_arrow_svg} onClick={scrollToTop} className='up-arrow-image'/>)}

            
        </div>
    </>
  )
}

export default BackToTop
