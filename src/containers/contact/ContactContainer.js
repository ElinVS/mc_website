import React from 'react'
import { Helmet } from 'react-helmet'
import '../contact/Contact.css'
import Footer from '../../components/footer/Footer'



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
      <div className='contact-page-wrapper'>
        <div className='contact-container-general'>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave} className='contact-page-text'>GENERAL ENQUIRES</p>
          <p className='contact-page-email'>mlscollings@gmail.com</p>
        </div>
        <div className='contact-container-booking'>
          <p className='contact-page-email'>denovalirecords@gmail.com </p>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave} className='contact-page-text'>BOOKINGS CONTACT </p>
        </div>
      </div>
    </section>

   <Footer/>

    </>
  )
}

export default ContactContainer
