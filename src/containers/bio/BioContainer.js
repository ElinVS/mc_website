import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'

import '../bio/Bio.css'

import bioimages from '../../bioimages'


const BioContainer = ({setCursorVariant}) => {

  const [currentImage, setCurrentImage] = useState(0);


  // useEffect (() => {
  //   const imageId = setInterval (() => {
  //     setCurrentImage(bioimages[Math.floor(Math.random() * bioimages.length)])
  //   }, 5000)
  //   return () => clearInterval(imageId);
  // }, [])


  // useEffect (() => {

  //   const imageId = setInterval (() => {
  //     if (currentImage === bioimages.length ){
  //       setCurrentImage(0);
  //     }
  //     else {
  //       setCurrentImage(currentImage + 1);
  //     }
  //   }, 5000)

  //   return () => clearInterval(imageId);

  // }, [])

  useEffect (() => {
    const imageId = setInterval (() => {
      setCurrentImage((i) => {
        return i === 2 ? 0 : i +1;
      })
    }, 5000)
    return () => clearInterval(imageId)
  }, []);





  return (
    <>

    <Helmet>
      <title>Matthew Collings - Bio</title>
    </Helmet>

    <section className='bio-page-section'>

      <div className='bio-image-container'>
        <img src={bioimages[currentImage]} className='bio-image'/>
      </div>

      <aside  >
        <p className='bio-text'>Lorem ipsum dolor sit amet. Est voluptatem reiciendis et iusto officiis ut rerum veniam. Ea labore sunt ex architecto fuga qui provident maiores a perferendis doloribus. Sed totam magnam ut nemo maiores hic voluptates odit. Est consequatur dolor hic optio veritatis et officia odit eum corporis enim eos vero vero quo soluta placeat. </p>
        <p className='bio-text'>Eum tempora dolorum et repellat blanditiis aut architecto repellendus est nihil nihil. At delectus natus ut quasi omnis et praesentium consequatur id alias quod et inventore sequi a porro mollitia. </p>
        <p className='bio-text'>Id eaque saepe ex neque exercitationem qui quasi autem sit quasi voluptates sed quos perspiciatis At doloribus nihil ut asperiores Quis. Est dolorum incidunt qui deserunt optio non modi quos qui culpa totam? Et distinctio deserunt aut galisum mollitia eum laboriosam accusantium et ipsum blanditiis et tempora repellat ut animi sint qui quasi atque. Ex porro quia et dolor perspiciatis id doloremque animi eos sunt doloremque qui error unde id nemo aliquid? </p>
      </aside>

    </section>
    
    </> 
  )
}

export default BioContainer
