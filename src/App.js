
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';

import HomePage from './containers/homepage/HomePage';
import NavBar from './components/navbar/NavBar';

import BioContainer from './containers/BioContainer';
import ContactContainer from './containers/contact/ContactContainer';
import ReleasesContainer from './containers/releases/ReleasesContainer';
import InstallationsContainer from './containers/InstallationsContainer'

import WorkContainer from './containers/work/WorkContainer';
import FilmContainer from './containers/work/FilmContainer';
import LiveContainer from './containers/work/LiveContainer';
import SnowdenContainer from './containers/work/SnowdenContainer';



function App() {
  return (
  <>

  <Router>

  <NavBar></NavBar>

    <Routes>
    
  <Route exact path='/' element={
    <HomePage/>
  }>
   </Route>

  <Route path='/Bio' element={
    <BioContainer/>
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

  </Router>
  

  </>
  );
}

export default App;

