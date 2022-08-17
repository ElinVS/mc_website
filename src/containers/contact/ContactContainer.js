import React from 'react'
import { Helmet } from 'react-helmet'

import '../contact/Contact.css'

const ContactContainer = () => {
  return (
    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>
    
    <section className='contactpage-section-one'>

      <div className='contact-div-one'>

        <span className='text-span-one'>
        <p id='contact-text-one'>GENERAL ENQUIRES CONTACT ME HERE</p>
        </span>
      </div>

      <div className='contact-div-two'>
      <p id='contact-text-one'>GENERAL ENQUIRES CONTACT ME HERE</p>

      </div>

    </section>

    </>
  )
}

export default ContactContainer
