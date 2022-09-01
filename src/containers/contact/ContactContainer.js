import React from 'react'

import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'


import '../contact/Contact.css'

import Footer from '../../components/footer/Footer'
import ContactInfo from '../../components/contactInfo/ContactInfo'
import MusicBlobs from '../../components/musicBlobs/MusicBlobs'



const ContactContainer = ({setCursorVariant}) => {




  return (
    <>

    <Helmet>
      <title>Matthew Collings - Contact</title>
    </Helmet>

    <ContactInfo setCursorVariant={setCursorVariant}/>
    {/* <MusicBlobs/> */}
    <Footer/>

    </>
  )
}

export default ContactContainer
