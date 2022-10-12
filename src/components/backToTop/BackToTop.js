import React, {useState, useEffect} from 'react'
import '../backToTop/BackToTop.css'
import up_arrow_svg from '../../assets/images/up_arrow_svg.svg'

const BackToTop = () => {


    const [showBackToTop, setShowBackToTop] = useState(false)

    useEffect  (()=> {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 400 ){
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
        <div className='flex'>
            <div className='arrow-div'>

            {showBackToTop && (<img  src={up_arrow_svg} onClick={scrollToTop} className='up-arrow-image'/>)}

            </div>
        </div>
    </>
  )
}

export default BackToTop
