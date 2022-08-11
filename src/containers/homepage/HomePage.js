import React from 'react'
import texture from '../../assets/homepage_images/texture.jpeg'
import matt_jag_spotlight from '../../assets/homepage_images/matt_jag_spotlight.jpg'
import '../homepage/HomePage.css'




const HomePage = () => {
  return (
    <>

    <section className='homepage-page'>

      <div className='img-container'>
        <img src={texture} alt='abstract-image-of-paper-waves' className='texture-img'></img>
      </div>


    </section>

      <div className='img-container'>
        <img src={matt_jag_spotlight} alt='artist-with-guitar' className='matt-jag-spotlight-img'></img>
      </div>

   

    </>
  )
}

export default HomePage
