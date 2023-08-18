// import { useState } from 'react'
// import './App.css'
import ContactMe from './components/ContactMe.jsx'
import Home from './components/Home.jsx'
import MyPortfolio from './components/MyPortfolio.jsx'
import MySkills from './components/MySkills.jsx'
import About from './components/about.jsx'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'


function App() {
  return (
    <div className='MBody bg-grayishBlack'>
      <Home/>
      <About />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
    </div>
  )
}

export default App
// library.add (fab, fas, far)