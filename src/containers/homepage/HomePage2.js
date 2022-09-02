import React from 'react'
import {Helmet} from 'react-helmet'

import Footer from '../../components/footer/Footer'
import '../homepage/HomePage2.css'
import Header from '../../components/header/Header'
import ShortBio from '../../components/shortBio/ShortBio'
import SocialsInfo from '../../components/socialsInfo/SocialsInfo'

const HomePage2 = ({setCursorVariant}) => {




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

    {/* <div className='space'>
    </div> */}

    <SocialsInfo setCursorVariant={setCursorVariant}/>

    <Footer/>
  
  </>
  )
}

export default HomePage2

