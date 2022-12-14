import React from 'react'
import {Helmet} from 'react-helmet'


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

    <Header text= 'MATTHEW COLLINGS'/>

    <section className='textured-img-section'>
      <div className='textured-img-container'></div>
    </section>

    <ShortBio/>

    <section className='parallax-img-section'> 
    </section>

    <SocialsInfo setCursorVariant={setCursorVariant}/>

    
  
  </>
  )
}

export default HomePage2

