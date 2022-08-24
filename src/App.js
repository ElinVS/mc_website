
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';

import './App.css';

import HomePage from './containers/homepage/HomePage';
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';

import BioContainer from './containers/bio/BioContainer';
import ContactContainer from './containers/contact/ContactContainer';
import ReleasesContainer from './containers/ReleasesContainer';
import InstallationsContainer from './containers/InstallationsContainer'

import WorkContainer from './containers/work/WorkContainer';
import FilmContainer from './containers/work/FilmContainer';
import LiveContainer from './containers/work/LiveContainer';
import SnowdenContainer from './containers/work/SnowdenContainer';

import Cursor from './components/cursor/Cursor';



function App() {

  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });

  const [cursorVariant, setCursorVariant] = useState('default')

  
  useEffect (() => {

    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }

  }, []);


  return (
  <>

  <Router>

  
   

  <NavBar setCursorVariant={setCursorVariant}/>
  <Cursor mousePosition={mousePosition} cursorVariant={cursorVariant}/>

    <Routes>
    
  <Route exact path='/' element={
    <HomePage setCursorVariant={setCursorVariant}/>
  }>
   </Route>

  <Route path='/Bio' element={
    <BioContainer setCursorVariant={setCursorVariant}/>
  }>
  </Route>
  
  <Route path='/Contact' element={
    <ContactContainer/>
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

    <Footer/>

  

  </Router>



 

  </>
  );
}

export default App;

