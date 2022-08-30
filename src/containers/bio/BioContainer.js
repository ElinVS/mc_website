import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'

import '../bio/Bio.css'

import bioimages from '../../bioimages'


const BioContainer = ({setCursorVariant}) => {

  // 


  return (
    <>

    <Helmet>
      <title>Matthew Collings - Bio</title>
    </Helmet>

    <section className='bio-page-section'>

    <header className='title-container-bio-c'>
        <h1 id='h1-title-bio-c'>COLLINGS </h1>
      </header>

      <header className='title-container-bio'>
        <h1 id='h1-title-bio'>MATTHEW </h1>
      </header>

      <div className='bio-container'>
        <div className='portrait-img-container'>
        </div>
        <div className='portrait-text-container'>
          <p>Collings's work contrasts the crushed guitars and textures of My Bloody Valentine or Sonic Youth with structures more akin to contemporary classical composers like Steve Reich or David Lang. In his powerful live performances, he uses the amplifier as an instrument and the guitar as a control device for innovative digital processes. Using numbers of 'prepared amplifiers', he coaxes unique sounds by placing bells, rice and wood directly onto the speaker cone and manipulating the physical vibrations with his fingers, producing a highly visual and physical performance. This music is textural, melodic and often sonically overwhelming.
          </p>
          <p>His 'audio-visual opera' with Jules Rawlinson, for strings, clarinet, electronics and real-time visuals, 'A Requiem for Edward Snowden' was premiered to a sell-out crowd in October 2014, and has been performed at Glasgow CCA, Edinburgh Fringe Festival (as part of Made in Scotland Showcase 2015), Aberdeen Sound Festival and Utrecht's Gaudeamus Muziekweek (NL).</p>
        </div>
      </div>

      <div className='press-text-container'>
        <p>'deeply unsettling' THE WIRE</p>
      </div>



    
    </section>
    
    </> 
  )
}

export default BioContainer




// const [currentImage, setCurrentImage] = useState(0);




  // useEffect (() => {
  //   const imageId = setInterval (() => {
  //     setCurrentImage((i) => {
  //       return i === 1 ? 0 : i +1;
  //     })
  //   }, 5000)
  //   return () => clearInterval(imageId)
  // }, []);

    {/* <div className='bio-image-container'>
        <img src={bioimages[currentImage]} className='bio-image'/>
      </div> */}












  // useEffect (() => {
  //   const imageId = setInterval (() => {
  //     setCurrentImage(bioimages[Math.floor(Math.random() * bioimages.length)])
  //   }, 5000)
  //   return () => clearInterval(imageId);
  // }, [])


  // useEffect (() => {

  //   const imageId = setInterval (() => {
  //     if (currentImage === bioimages.length ){
  //       setCurrentImage(0);
  //     }
  //     else {
  //       setCurrentImage(currentImage + 1);
  //     }
  //   }, 5000)

  //   return () => clearInterval(imageId);

  // }, [])