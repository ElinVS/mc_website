import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import hello_darkness from '../../assets/releases/hello_darkness.jpeg'
import silence from '../../assets/releases/silence.jpeg'
import splintered from '../../assets/releases/splintered.jpeg'
import Accordion from 'react-bootstrap/Accordion'
import ReactPlayer from 'react-player'
import '../releases/Releases.css'

const ReleasesContainer = () => {

  return (
    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>
    <div className='releases-full'>
    <div className="section-1">
      <div className="img-info-flex">
      <h1 className='section-1-header'>Hello Darkness</h1>
      <img width = '400px' src = {hello_darkness} alt = "Hello Darkness Cover" />
      <ReactPlayer className = "react-player"
      url = 'https://soundcloud.com/denovali/dag-rosenqvist-matthew-collings-streets?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
      width = '100px'
      height = '100px'
      config={{
     soundcloud: {
      options: { 
        sharing: false }
          }}}
      />
      <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header className='accordian-header-1'>Info</Accordion.Header>
          <Accordion.Body className='accordian-body-1'>
          After his highly acclaimed „A Requiem For Edward Snowden“ LP, Matthew Collings returns with a collaboration with Swedish sound artist Dag Rosenqvist. „Hello Darkness“ is dark and it is bleak and it’s fragmented. It feels like those days when you want to just annihilate everything, and then stare at a river. It demands your attention. It sounds like it’s breaking from the inside. It’s serious. And not.
          <br/>

          Rosenqvist & Collings started their work on „Hello Darkness“ already back in 2012, right after they had released the Wonderland EP (on Hibernate Recordings). There really were no guidelines or rules for what they were going to create, they just wanted to make music together, and surprisingly it came naturally, and felt pretty good… 
          <br/>
          Written and Produced by Matthew Collings and Dag Rosenqvist
          <br/>

          Artwork by Nullvoid
          </Accordion.Body>
        </Accordion.Item>
      </Accordion> 
      </div>
    </div>

    <div className="section-2">
      <div className="img-info-flex">
      <h1 className='section-2-header'>Silence Is A Rhythm Too</h1>
        <img className = "album-cover" width = '400px' src = {silence} alt = "Silence Is A Rhythm Too Cover" />
        <ReactPlayer className = "react-player"
          url = 'https://soundcloud.com/denovali/matthew-collings-toms?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
          width = '400px'
          height = '75px'
          config={{
             soundcloud: {
                options: { 
                sharing: false }
              }}}
          />
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header className='accordian-header-2'>Info</Accordion.Header>
          <Accordion.Body className = 'accordian-body-2'>
          Silence seems to be harder and harder to achieve in this technologically saturated age. Collings admits that it reveals the habits of his own hearing, from being obsessed with its opposite: noise. “Silence Is A Rhythm Too” is about trying to find grace, space and expanse as much as tension and menace, and reconciling the two.

            Still being intrigued by the idea of materials on the edge of collapse, he catches them up in their dying breath: The record is full of these processes, including prepared amplifiers and electronics pushed to the extreme to coax new sounds, close-micing and high volume. Despite the fact that most of his work is mediated by technology, he’s far more excited by the sound of acoustic. Featuring brass ensembles and a string quartet the instruments and sounds are full of cracks, breath, embedding rough materials informed by luscious intentions. “Silence Is A Rhythm Too” keeps an eye on the small textural details as it is about harmony and physicality in the moment where silence and noise meet.

          </Accordion.Body>
        </Accordion.Item>
      </Accordion> 
      </div>
    </div>
    <div className="section-1">
      <div className="img-info-flex">
      <h1 className='section-1-header'>Splintered Instruments</h1>
        <img width = '400px' src = {splintered} alt = "Splintered Instruments Cover" />
        <ReactPlayer  className = 'react-player'
          url = 'https://soundcloud.com/denovali/matthew-collings-vasilia?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
          width = '100px'
          height = '100px'
          config={{
             soundcloud: {
                options: { 
                sharing: false,
                controls: false }
              }}}
          />
        <Accordion defaultActiveKey="1">
        <Accordion.Item eventKey="0">
          <Accordion.Header className='accordian-header-1'>Info</Accordion.Header>
          <Accordion.Body className = 'accordian-body-1'>
          I wanted to create a more direct sound to involve a much grander and more dangerous range of emotions. The composition process of “Splintered Instruments” came out of personally reckoning with two contrary forces, something vicious and unrelenting challenging with a soft and kind energy – getting to their core and the dynamic interrelation to one another. Filtered through melody and vaguely resembling songs, driven by nested rhythm patterns, one can imagine that the first sound Collings picked up on as a leading impulse “was like Sonic Youth’s ‘The Diamond Sea’ meeting ‘Music for 18 Musicians’. I wanted to take songs and kind of dissolve them and then bring them back again, with everything just being on the edge of these various types of structures.”
          <br/>
          He worked closely with Ben Frost on the creation of “Splintered Instruments”, who took influence in the physicality and size of sound and helped to achieve him to reach into the deepest parts of human nature, pulling it out in a hybrid-pop-experimental-noise form. According to Collings, the record is “a revolt against machines” understanding the sense of precision as something pretty unnatural. He avoids working with computers only using them for convenience, not as a principle. 90% of the record is organic sourced from or played on acoustic instruments or objects, being drawn to sound of every kind which is more human, more imperfect in its subtle variations. Splintered Instruments '…is not about noise or the decibel levels – it’s about the sheer uncompromised approach to raw sound design' (Headphone Commute).

          </Accordion.Body>
        </Accordion.Item>
      </Accordion> 
      </div>
    </div>
    </div>
    </>
  )
}

export default ReleasesContainer
