import React from 'react'
import { Helmet } from 'react-helmet'

import '../snowden/Snowden.css'
import Header from '../../../components/header/Header'
import snowden from '../../../assets/snowden/MatthewCollings_by_NatUrazmetova.jpg'


// this page was buily as an experiment to start with so code 
// mis messy and needs re worked

const SnowdenContainer = () => {
  return (
    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>

    <Header />

    <section className='snowden-page'>
      <div className='snowden-grid-wrapper'>

      <div className='red'> 
      </div>
      <div className='blue'>
      </div>   
      <div className='pink'>
      <p className='text-test'>'Requiem for Edward Snowden' is a large scale live audiovisual performance piece. The piece focuses on a number of themes which are extremely relevant to our lives in the 21st century, based around the actions and decisions of whistleblower Edward Snowden; loss of faith and security, the hacking of digital media, invasion of privacy and personal sacrifice.

'By turns politically muscular and poignantly nuanced, Collings's excellent piece is a heartening reminder of the quality of new music being created and performed in Scotland today' - The Herald Scotland</p>
      </div>   
      <div className='green'>
        <p>The documents released by Snowden reveal that we live in a world in which we are totally reliant not just on methods of communication, but on daily routines in which our privacy is completely compromised. The piece explores the consequences of this situation through a combination of electronic sound, acoustic instrumentation and live visuals. The gestures and performance from two live electronics performers, a clarinetist and string section are analysed and interact with real-time visual work by Jules Rawlinson (https://www.pixelmechanics.com/), exploring the piece's central themes at sonic and visual levels.

As much as the situation makes me incredible angry, in also makes me think of scenes in spy films where a mole has been recovered by the side they've been spying for and end up isolated and alone on the other side of the world; the price of idealism and ambition.</p>
      </div>   
      <div className='orange'>
      
       
        
      </div>
      <div className='yellow'>
        <ul>
          <li>Music - Matthew Collings</li>
          <li>Visual Processing - Jules Rawlinson</li>
          <li>Clarinet - Pete Furniss/Stewart Houston</li>
          <li> Violin - Emma Lloyd/Julia Lungu</li>
          <li>Cello - Clea Friend/Justyna Jablonska</li>
          <li> Sound Projection - Sean Williams</li>
          <li> Additional Ensemble - Lunatree (NL)</li>
        </ul>

      </div>
      <div className='purple'>
       
      </div>
      <div className='sky-blue'>
       
      </div>
      <div className='lime'>
      <iframe title="vimeo-player" src="https://player.vimeo.com/video/119969660?h=8bc70f95cb" width="640" height="360" frameborder="0" allowfullscreen></iframe>

      </div>
      <div className='beige'>
      
        <ul>
        The piece has been performed at

          <li>Edinburgh Reid Concert Hall</li>
          <li>Glasgow Centre for Contemporary Art (CCA)</li>
          <li>Made in Scotland Showcase at the Edinburgh Fringe Festival (Stockbridge Church)</li>
          <li>Aberdeen Sound Festival</li>
          <li>Utrecht (NL) Gaudeamus Muziekweek</li>
        
        </ul>

      </div>
      <div className='black'>
      

      </div>
      <div className='white'>
      <p>Developed with support from Creative Scotland, New Media Scotland and Magnetic North </p>
      </div>
      
      
    
      </div>


    </section>

    </>
  )
}

export default SnowdenContainer


