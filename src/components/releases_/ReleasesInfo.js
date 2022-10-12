import React from 'react'
import '../releases_/style.css'
import { RealesesData } from './ReleasesData'
import ReactPlayer from 'react-player'
import Header from '../header/Header'

const ReleasesInfo = ({text}) => {
  return (
    
    <>

      <Header text = 'Releases'/>

        <section className='realeses-wrapper'>
          <div 
            className='releases-container-outer'
            >
                <header className='realeses-header'>
                  {RealesesData.splintered.title}
                </header>

            <ReactPlayer  className = 'react-player'
            url = {RealesesData.splintered.player}
            width = '300px'
            height = '300px'
            config={{
              soundcloud: {
                  options: { 
                  sharing: false,
                  controls: false }
                }}} />
        </div>

        <div
            className='releases-text-container'
            >
              
                <p
                    className='releases-info'
                >{RealesesData.splintered.info}</p>
        </div>
        </section>

        {/*  */}
        <br/>
        <br/>
        <br/>
        <br/>

        

          <section className='realeses-wrapper'>
            <div 
              className='releases-container-outer'
              >
                  {/* <header className='realeses-header'>
                    {RealesesData.hello_darkness.title}
                  </header> */}

              <ReactPlayer  className = 'react-player'
              url = {RealesesData.hello_darkness.player}
              width = '300px'
              height = '300px'
              config={{
                soundcloud: {
                    options: { 
                    sharing: false,
                    controls: false }
                  }}} />
          </div>

          <div
              className='releases-text-container'
              >
                <h1>{RealesesData.hello_darkness.title}</h1>
                
                  <p
                      className='releases-info'
                  >{RealesesData.hello_darkness.info}</p>
          </div>
          </section>



       

    


    
    </>


  )
}

export default ReleasesInfo
