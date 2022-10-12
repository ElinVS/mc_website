import React from 'react'

import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'


import '../contact/Contact.css'


import ContactInfo from '../../components/contactInfo/ContactInfo'
import MusicBlobs from '../../components/musicBlobs/MusicBlobs'



const ContactContainer = ({setCursorVariant}) => {




  return (
    <>

    <Helmet>
      <title>Matthew Collings - Contact</title>
    </Helmet>
    <section className='contact-container-page'>
    <ContactInfo setCursorVariant={setCursorVariant}/>
    {/* <MusicBlobs/> */}
    </section>
  

    </>
  )
}

export default ContactContainer
