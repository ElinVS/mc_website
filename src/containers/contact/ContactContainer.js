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

      <div className='contact-div-one'>
          <p  id='contact-text-one'>GET IN TOUCH</p>
      </div>

      <div className='contact-div-two'>
        <p id='contact-text-one'>FOR BOOKINGS CLICK HERE</p>
      </div>
      
      <div className='contact-div-two'>
        <p id='contact-text-one'>FOR BOOKINGS CLICK HERE</p>
      </div>


    </section>

    </>
  )
}

export default ContactContainer
