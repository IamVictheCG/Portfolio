import React from 'react'
import personal_image from "../images/myPhoto2_no_bg.png";

function Home() {
  return (
    <div className="home bg-none border-0 border-random3 relative pt-2 pl-2">
      <img src={personal_image} alt="personal_image" className="personal bg-black"/>
      <div className='nameAnd h-fit border-0 text-cyan-400 right-0'>
        <div className='headingsss'>
          <h1>- Hi, I'm Victor Okechukwu</h1>
          <h1>Web Developer</h1>
        </div>
        <p>I'm a dedicated web developer passionate about creating digital solutions that go beyond boundaries. With a strong grasp of programming, design, and a commitment to innovation, I bring ideas to life online. From user interfaces to backend functions, my goal is to seamlessly connect technology and users, enhancing online experiences. Join me on my journey through the dynamic world of web development.</p>
      </div>
    </div>
  )
}

export default Home;