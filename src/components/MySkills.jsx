import { React, useState } from "react";
// import { useState } from 'react'
import { CircularProgressbar } from "../assets/packages";
import { buildStyles } from "react-circular-progressbar";

function MySkills() {
  // const [Html, setHtml] = useState(90)
  const Html = 100;
  const CSS = 84;
  const JAVASCRIPT = 70;
  const REACT = 60;

  return (
    <div className="mySkills my-4">
      <header className="text-xl">MY SKILLS</header>

      <div className="skills">
        <div id="html" className="skill">
          <CircularProgressbar
            styles={buildStyles({
              trailColor: "#d7f8f8",
              pathColor: "darkOrange",
              textColor: "white",
            })}
            value={Html}
            text={`${Html}%`}
          />
          <p>HTML</p>
        </div>
        <div id="html" className="skill">
          <CircularProgressbar
            styles={buildStyles({
              trailColor: "#d7f8f8",
              pathColor: "darkOrange",
              textColor: "white",
            })}
            value={CSS}
            text={`${CSS}%`}
          />
          <p>CSS</p>
        </div>
        <div className="skill">
          <CircularProgressbar
            styles={buildStyles({
              trailColor: "#d7f8f8",
              pathColor: "darkOrange",
              textColor: "white",
            })}
            value={JAVASCRIPT}
            text={`${JAVASCRIPT}%`}
          />
          <p>JAVASCRIPT</p>
        </div>
        <div className="skill">
          <CircularProgressbar
            styles={buildStyles({
              trailColor: "#d7f8f8",
              pathColor: "darkOrange",
              textColor: "white",
            })}
            value={REACT}
            text={`${REACT}%`}
          />
          <p>REACT</p>
        </div>
        {/* <div className='skill'>
          <CircularProgressbar background= {true} value = {Html} text={`${Html}%`} />
          <p>HTML</p>
        </div> */}
      </div>
    </div>
  );
}

export default MySkills;
