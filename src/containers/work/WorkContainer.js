import React from 'react'
import {Link} from "react-router-dom"

const WorkContainer = () => {
  return (

    <div>

      WORK CONTAINER with links to: 

      <Link className="work-links" to="/film"> Film </Link> 
                    
      <Link className="work-links" to="/live"> Live  </Link>

      <Link className="work-links" to="/snowden"> Snowden  </Link>

      <br/>

      SHOULD WORK  BE A DROPDOWN MENU INSTEAD?
      
    </div>

  )
}

export default WorkContainer
