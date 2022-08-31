import React from 'react'
import {Helmet} from 'react-helmet'

import Footer from '../../components/footer/Footer'
import '../homepage/HomePage2.css'
import Header from '../../components/header/Header'
import ShortBio from '../../components/shortBio/ShortBio'

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

    <section className='textured-img-section'>
      <div className='textured-img-container'></div>
    </section>

    <ShortBio/>

    <section className='parallax-img-section'> 
    </section>

    <section className='socials-section'>
      <div  onMouseEnter={textEnter} onMouseLeave={textLeave} className='socials-grid-wrapper'>
        <div className='div-spotify'> 
            <p className='socials-text'>SPOTIFY</p>
        </div>
        <div className='div-bandcamp'>
          <p className='socials-text'>BANDCAMP</p>
        </div>
        <div className='div-twitter'>
          <p className='socials-text'>TWITTER</p>
        </div>
        <div className='div-instagram'>
          <p className='socials-text'>INSTAGRAM</p>
        </div>
      </div>
    </section>

    <Footer/>
  
  </>
  )
}

export default HomePage2

