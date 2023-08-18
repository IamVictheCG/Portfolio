import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
function About() {
  const MyCV = "https://cv-victorcg.netlify.app"
  return (
    <div className="aboutMe" id="aboutMe">
      <header
        id="about"
        className="headings text-4xl font-bold my-7 text-center"
      >
        ABOUT <span className="text-Orange">ME</span>
      </header>
      <h1 className="text-xl font-bold mb-7">PERSONAL INFOS</h1>
      <div className="group1">
        <ul className="infos">
          <li>
            First name: <span className="value text-azure">Victor</span>
          </li>
          <li>
            Last name: <span className="value text-azure">Okechukwu</span>
          </li>
          <li>
            Age: <span className="value text-azure">22 years</span>
          </li>
          <li>
            Nationality: <span className="value text-azure">Nigeria</span>
          </li>
          <li>
            Freelance: <span className="value text-azure">Available</span>
          </li>
          <li>
            Address: <span className="value text-azure">Abuja, Nigeria</span>
          </li>
          <li>
            Phone: <span className="value text-azure">08036276872</span>
          </li>
          <li>
            Email: <span className="value text-azure">vicoke360@gmail.com</span>
          </li>
          <li>
            Languages: <span className="value text-azure">English, Igbo</span>
          </li>
          {/* <li>: <span className='value text-azure'></span></li> */}
          {/* <li>: <span className='value text-azure'></span></li> */}
        </ul>
        <a target="_blank" href={MyCV} download={"Victor Okechukwu"}>
          <div id="download" className="buttons relative">
            <button type="button">My CV</button>
            <FontAwesomeIcon icon={faArrowRight} className="iconic absolute" />
          </div>
        </a>

        <div className="others">
          <div id="exp" className="digits m-auto">
            <p className="val ml-3 text-Orange">
              2<sup>+</sup>
            </p>
            <div className="des">
              <hr className="bg-hrColor" />
              <p className="text-azure"> YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <div id="exp" className="digits m-auto">
            <p className="val ml-3 text-Orange">
              12<sup>+</sup>
            </p>
            <div className="des">
              <hr className="bg-hrColor" />
              <p className="text-azure"> PROJECTS COMPLETED</p>
            </div>
          </div>
          <div id="exp" className="digits m-auto">
            <p className="val ml-3 text-Orange">
              20<sup>+</sup>
            </p>
            <div className="des">
              <hr className="bg-hrColor" />
              <p className="text-azure"> HAPPY CUSTOMERS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
