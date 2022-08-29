import React, {useState,useEffect} from 'react'

import '../homepage/HomePage2.css'

import texture from '../../assets/images/texturehorizontal.jpeg'

import matt_jag from '../../assets/thirdmind/matt_jag_spotlight.jpg'

const HomePage2 = () => {

  const [show, setShow] = useState(true)

  useEffect  (()=> {

      window.addEventListener("scroll", () => {
          if (window.scrollY < 850 ){
              setShow(true)
          }
          else {
              setShow(false)
          }
      })

  }, []);


  return (

   <>
   

   
    <section className='title-section'>
        <div className='artists-name-container'>  
        {show && (<h1 id='artists-name'> MATTHEW COLLINGS</h1> )} 
        </div>
        <div className='texture-img-container'>
        </div>
    </section>

    <section className='short-bio-section'>
      <div className='texture-img-container2'>
        <p className='short-bio-text'>Lorem ipsum dolor sit amet. Est voluptatem reiciendis et iusto officiis ut rerum veniam. Ea labore sunt ex architecto fuga qui provident maiores a perferendis doloribus. </p>
      </div>
    </section>

   </>
  )
}

export default HomePage2
