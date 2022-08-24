import React, {useState}from 'react'
import { Helmet } from 'react-helmet'
import '../contact/Contact.css'



const ContactContainer = () => {



  return (
    <>

    <Helmet>
      <title>Matthew Collings - Contact</title>
    </Helmet>
    
    
    <section className='contactpage-section-one'>

 


      <div className='grid-wrapper'>


        <div className='contact-div'> 
          <p id='contact-text-one'>SPOTIFY</p>
        </div>

      <div className='contact-div-one'>
        <p id='contact-text-one'>GENERAL ENQUIRES</p>
      </div>

      <div className='contact-div-two'>
        <p id='contact-text-one'>INSTAGRAM</p>
      </div>
      <div className='contact-div-three'>
        <p id='contact-text-one'>BANDCAMP</p>
      </div>
      <div className='contact-div-four'>
        <p id='contact-text-one'> BOOKING CONTACT</p>
      </div>
      <div className='contact-div-five'>
        <p id='contact-text-one'>TWITTER</p>
      </div>

      </div>

    </section>

    </>
  )
}

export default ContactContainer
