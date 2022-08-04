
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import './App.css';

import HomePage from './containers/HomePage';
import NavBar from './components/NavBar';

import BioContainer from './containers/BioContainer';
import ContactContainer from './containers/ContactContainer';
import ReleasesContainer from './containers/ReleasesContainer';
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

  
  {/* <Route path='/Contact'>
  <ContactContainer/>
  </Route>

  <Route path='/Releases'>
  <ReleasesContainer/>
  </Route>

  
  <Route path='/Installations'>
  <InstallationsContainer/>
  </Route>

  <Route path='/Work'>
  <WorkContainer/>
  </Route>

  <Route path='/Film'>
  <FilmContainer/>
  </Route>

  <Route path='/Live'>
  <LiveContainer/>
  </Route>

  <Route path='Snowden'>
  <SnowdenContainer/>
  </Route> */}
  



   </Routes>

   </Router>
  

  </>
  );
}

export default App;

