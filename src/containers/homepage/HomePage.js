import React from 'react'
import texture from '../../assets/homepage_images/texture.jpeg'
import matt_jag_spotlight from '../../assets/homepage_images/matt_jag_spotlight.jpg'
import '../homepage/HomePage.css'




const HomePage = () => {

 
  return (
    <>

  

    <section className='homepage-page-section-one'>

      <div className='img-container'>
        {/* <img src={texture} alt='abstract-image-of-paper-waves' className='texture-img'/> */}
      
      <div className='letter-sections'>

        <section className='letter-section-firstname'>
          <div className='letter-m'>M</div>
          <div className='letter-a'>A</div>
          <div className='letter-t'>T</div>
          <div className='letter-tt'>T</div>
          <div className='letter-h'>H</div>
          <div className='letter-e'>E</div>
          <div className='letter-w'>W</div>
      </section>

      <section className='letter-section-lastname'>
          <div className='letter-c'>C</div>
          <div className='letter-o'>O</div>
          <div className='letter-l'>L</div>
          <div className='letter-ll'>L</div>
          <div className='letter-i'>I</div>
          <div className='letter-n'>N</div>
          <div className='letter-g'>G</div>
          <div className='letter-s'>S</div>
      </section>

      </div>
      
      
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
