import React from 'react'
import {Link} from "react-router-dom"
import { Helmet } from 'react-helmet'

const WorkContainer = () => {
  return (

    <>

    <Helmet>
      <title>Matthew Collings</title>
    </Helmet>

    <div>


      <Link className="work-links" to="/film"> Film </Link>             
      <Link className="work-links" to="/live"> Live  </Link>
      <Link className="work-links" to="/snowden"> Snowden  </Link>

      <br/>

      SHOULD WORK  BE A DROPDOWN MENU INSTEAD?
      
    </div>

    </>

  )
}

export default WorkContainer
