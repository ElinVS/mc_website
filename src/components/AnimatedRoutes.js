import React from 'react'
import {Route, Routes, useLocation} from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'

import HomePage from '../containers/homepage/HomePage';
import HomePage2 from '../containers/homepage/HomePage2'

import BioContainer from '../containers/bio/BioContainer';
import ContactContainer from '../containers/contact/ContactContainer';
import ReleasesContainer from '../containers/releases/ReleasesContainer';
import InstallationsContainer from '../containers/work/InstallationsContainer'

import WorkContainer from '../containers/work/WorkContainer';
import FilmContainer from '../containers/work/FilmContainer';
import LiveContainer from '../containers/work/LiveContainer';
import SnowdenContainer from '../containers/work/snowden/SnowdenContainer';

const AnimatedRoutes = ({setCursorVariant}) => {

    const location = useLocation();


  return (
    

    <AnimatePresence>

        <Routes location={location} key={location.pathname}>
        
            <Route exact path='/' element={
            <HomePage2 setCursorVariant={setCursorVariant}/>
            }>
            </Route>
        
            {/* <Route  path='/Home' element={
            <HomePage setCursorVariant={setCursorVariant}/>
            }>
            </Route> */}
        
            <Route path='/Bio' element={
            <BioContainer setCursorVariant={setCursorVariant}/>
            }>
            </Route>
            
            <Route path='/Contact' element={
            <ContactContainer setCursorVariant={setCursorVariant}/>
            }>
            </Route>
        
            <Route path='/Releases'element={
            <ReleasesContainer/>
            }>
            </Route>
            
            <Route path='/Installations' element={
            <InstallationsContainer/>
            }>
            </Route>
        
            <Route path='/Work' element={
            <WorkContainer/>
            }>
            </Route>
        
            <Route path='/Film'element={
            <FilmContainer/>
            }>
            </Route>
        
            <Route path='/Live' element={
            <LiveContainer/>
            }>
            </Route>
        
            <Route path='Snowden' element={
            <SnowdenContainer/>
            }>
            </Route> 
    
        </Routes>

    </AnimatePresence>
      
    
  )
}

export default AnimatedRoutes