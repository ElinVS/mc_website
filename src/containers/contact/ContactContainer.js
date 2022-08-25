import React, {useState}from 'react'
import { Helmet } from 'react-helmet'
import '../contact/Contact.css'



const ContactContainer = ({setCursorVariant}) => {

  const textEnter = () => {
    setCursorVariant('textContact');
} 

  const textLeave = () => {
    setCursorVariant('default')
}



  return (
    <>

    <Helmet>
      <title>Matthew Collings - Contact</title>
    </Helmet>

    <section className='contact-page'>
    
    
    <section className='contactpage-section-one'>

 


      <div  onMouseEnter={textEnter} onMouseLeave={textLeave} className='grid-wrapper'>

      <div className='contact-div-general'>
        <p id='contact-text-one'>GENERAL ENQUIRES</p>
      </div>

      <div className='contact-div-booking'>
        <p id='contact-text-one'> BOOKING CONTACT</p>
      </div>


      <div className='contact-div-spotify'> 
          <p id='contact-text-one'>SPOTIFY</p>
        </div>

      <div className='contact-div-bandcamp'>
        <p id='contact-text-one'>BANDCAMP</p>
      </div>

      <div className='contact-div-twitter'>
        <p id='contact-text-one'>TWITTER</p>
      </div>

      <div className='contact-div-instagram'>
        <p id='contact-text-one'>INSTAGRAM</p>
      </div>

      </div>

    </section>

    </section>

    </>
  )
}

export default ContactContainer
