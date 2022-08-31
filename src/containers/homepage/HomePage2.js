import React from 'react'
import {Helmet} from 'react-helmet'

import Footer from '../../components/footer/Footer'
import '../homepage/HomePage2.css'
import Header from '../../components/header/Header'

const HomePage2 = ({setCursorVariant}) => {

    const textEnter = () => {
      setCursorVariant('textContact');
  } 
  
    const textLeave = () => {
      setCursorVariant('default')
  }


  return (
  <>

    <Helmet>
      <title>Matthew Collings-Home</title>
    </Helmet>

    <Header/>

    {/* <header className='title-container'>
      <h1 id='h1-title'>MATTHEW COLLINGS</h1>
    </header> */}

    <section className='textured-img-section'>
      <div className='textured-img-container'></div>
    </section>

    <section className='short-bio-section'>
      <div className='short-bio-container-outer'>
        <div className='short-bio-container-inner'>
        </div>
      </div>
      <div className='short-bio-text-container'>
        <p id='short-bio-text'>Lorem ipsum dolor sit amet. Est voluptatem reiciendis et iusto officiis ut rerum veniam. Ea labore sunt ex architecto fuga qui provident maiores a perferendis doloribus.</p>
      </div>
    </section>

    <section className='parallax-img-section'> 
    </section>

    <section className='contact-section'>
      <div  onMouseEnter={textEnter} onMouseLeave={textLeave} className='contact-grid-wrapper'>
        <div className='div-spotify'> 
            <p className='contact-text'>SPOTIFY</p>
        </div>
        <div className='div-bandcamp'>
          <p className='contact-text'>BANDCAMP</p>
        </div>
        <div className='div-twitter'>
          <p className='contact-text'>TWITTER</p>
        </div>
        <div className='div-instagram'>
          <p className='contact-text'>INSTAGRAM</p>
        </div>
      </div>
    </section>

    <Footer/>




  
  </>
  )
}

export default HomePage2

