import React from 'react'
import texture from '../../assets/homepage_images/texture.jpeg'
import matt_jag_spotlight from '../../assets/homepage_images/matt_jag_spotlight.jpg'
import '../homepage/HomePage.css'




const HomePage = () => {
  return (
    <>

    <section className='homepage-page-section-one'>
      <div className='img-container'>
        <img src={texture} alt='abstract-image-of-paper-waves' className='texture-img'>
        </img>

        <section className='letter-section'>
      <div className='letter-m'>M</div>
      <div className='letter-m'>A</div>
      <div className='letter-m'>T</div>
      <div className='letter-m'>T</div>
      <div className='letter-m'>H</div>
      <div className='letter-m'>E</div>
      <div className='letter-m'>W</div>
    </section>

      </div>

   


    </section>

    <section className='homepage-page-section-two'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </section>

    <section className='homepage-page-section-three'>
      <div className='img-container'>
        <img src={matt_jag_spotlight} alt='artist-with-guitar' className='matt-jag-spotlight-img'></img>
      </div>
    </section>


   

    </>
  )
}

export default HomePage
