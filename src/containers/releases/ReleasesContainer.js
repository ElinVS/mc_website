import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import hello_darkness from '../../assets/releases/hello_darkness.jpeg'
import silence from '../../assets/releases/silence.jpeg'
import Accordion from 'react-bootstrap/Accordion'
import ReactPlayer from 'react-player'
import '../releases/Releases.css'

const ReleasesContainer = () => {

  return (
    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>

    <div className="section-1">
      <div className="img-info-flex">
      <img width = '400px' src = {hello_darkness} alt = "Hello Darkness Cover" />
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
      <ReactPlayer 
      url = 'https://soundcloud.com/denovali/dag-rosenqvist-matthew-collings-streets?utm_source=mcollingsmusic.com&utm_campaign=wtshare&utm_medium=widget&utm_content=https%253A%252F%252Fsoundcloud.com%252Fdenovali%252Fdag-rosenqvist-matthew-collings-streets'
      width = '30%'
      height = '50px'
      config={{
     soundcloud: {
      playerVars: { showinfo: 1 }
    }
      />
      </div>
    </div>
    <div className="section-2">
      <div className="img-info-flex">
      <img width = '400px' src = {silence} alt = "Silence Is A Rhythm Too Cover" />
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
    </>
  )
}

export default ReleasesContainer
