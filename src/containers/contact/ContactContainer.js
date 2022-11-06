import React from 'react'
import { Helmet } from 'react-helmet'
import '../contact/Contact.css'
import ContactInfo from '../../components/contactInfo/ContactInfo'


const ContactContainer = ({setCursorVariant}) => {


  return (
    <>
    
    <Helmet>
      <title>Matthew Collings - Contact</title>
    </Helmet>

    <section className='contact-container-page'>
      <ContactInfo setCursorVariant={setCursorVariant}/>
    </section>

    </>
  )
}

export default ContactContainer
