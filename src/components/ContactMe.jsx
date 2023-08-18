import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faGithub} from "@fortawesome/free-brands-svg-icons"
import {faDownload, faPaperPlane} from "@fortawesome/free-solid-svg-icons"

function ContactMe() {
    const [nameInputVal, setnameInputVal] = useState()
    const [emailInputVal, setemailInputVal] = useState()
    const [subjectInputVal, setsubjectInputVal] = useState()
    const [messageInputVal, setmessageInputVal] = useState()
    
    const handleInput = (event) => {
        setnameInputVal(event.target.value);
        console.log("setnameInputVal");
        setemailInputVal(event.target.value);
        console.log("setemailInputVal");
        setsubjectInputVal(event.target.value);
        console.log("setsubjectInputVal");
        setmessageInputVal(event.target.value);
        console.log("setmessageInputVal");
    }
    
    const form = useRef();
    // console.log(form);
    // console.log(form.current);

    const sendEmail = (e) => {
      e.preventDefault();
      const serviceID = 'service_pvw6ngj_cg';
      const templateID = 'template_ecku02m_cg';
      const publicKey = 'RGBFqNLb2RYVoEAB8';
  
      emailjs.sendForm(serviceID, templateID, form.current, publicKey)
        .then((result) => {
            console.log(result.text);
            alert("Message Sent");
        }, (error) => {
            console.log(error.text);
        });
    };
  return (

    <div>
        <header className="headings text-azure text-4xl font-bold my-7 text-center">CONTACT <span className="text-Orange">ME</span></header>
        <div className='form'>
            <div className='hii'>
                <h1>Don't Fret!</h1>
                <p>Feel free to get in touch. I'm always available to discussing new projects, creative ideas or opportunities to better You, Me and the World at large.</p>
                <strong>Let's work together.</strong>
            </div>
            <form className='forms' ref={form} onSubmit={sendEmail}>
                <div className='formNames'>
                    {/* <label htmlFor="name">Name</label> */}
                    <input required className='inp bg-grayishBlack2 text-azure font-semibold' placeholder='YOUR NAME' value={nameInputVal} type="text" name="user_name" id="" />
                    {/* <label htmlFor="email">Email</label> */}
                    <input required className='inp bg-grayishBlack2 text-azure font-semibold' placeholder='YOUR EMAIL' value={emailInputVal} type="email" name="user_email" id="" />
                </div>
                {/* <label htmlFor="subject">Subject</label> */}
                <input required className='inp bg-grayishBlack2 text-azure font-semibold' placeholder='SUBJECT'value={subjectInputVal} type="text" name="subject" id="" />
                {/* <label htmlFor="message">Message</label> */}
                <textarea required className='inp bg-grayishBlack2 text-azure font-semibold' placeholder='MESSAGE' value={messageInputVal} name="message" id="message" cols="30" rows="15"></textarea>
                <div id="sendMessage" className='buttons relative'>
                    <input type='submit' value={"Send Message"} onChange={handleInput}/>
                    <FontAwesomeIcon icon={faPaperPlane} className="iconic absolute"/>
                </div>
            </form>
        </div>

        <div className='socials'>
            <a target="_blank" href="https://instagram.com/the__cg143">
              <FontAwesomeIcon
                className="text-4xl py-3"
                icon={faInstagram}
                id="instagram"
              />
            </a>
            <a target="_blank" href="https://twitter.com/IamVICtheCG">
              <FontAwesomeIcon
                className="text-4xl py-3"
                icon={faTwitter}
                id="twitter"
              />
            </a>
            <a target="_blank" href="https://github.com/IamVictheCG">
              <FontAwesomeIcon
                className="text-4xl py-3"
                icon={faGithub}
                id="github"
                />
            /</a>
        </div>
    </div>
  )
}

export default ContactMe