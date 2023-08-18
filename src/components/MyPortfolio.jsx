import React from 'react'
import Works from './Works.jsx'
import projects from "../project.json"
// document.getElementById('hero-img').src = imgUrl
function MyPortfolio() {
  return (
    <div className='myPortfolio'>
        <header className='portfolio text-4xl'>MY PORTFOLIO</header>

        <div className='myWorks'>
        <Works  projects={projects}/>
        </div>
    </div>
  )
}

export default MyPortfolio