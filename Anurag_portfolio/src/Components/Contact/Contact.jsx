import React, { useState } from 'react'
import"./Contact.css"
import emailjs from "@emailjs/browser";
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';

  





// contact page 
const Contact = () => {


  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done , setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs
          .sendForm(
            "service_dsefv2v",
            "template_wrtn3uv",
            form.current,
            "eY6jznBnZrPe_63oZ"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true);
              form.current.reset();
              // form.reset(form)
              
              
            },
            (error) => {
              console.log(error.text);
            }
          );
      };


  return (
    <div className="contact-form" id="Contact">
    {/* left side copy and paste from work section */}
    <div className="w-left">
      <div className="awesome">
        {/* darkMode */}
        <span style={{color: darkMode ? 'white' : ''}} >Get in Touch</span>
        <span>Contact me</span>
        <div
          className="blur s-blur1"
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
    </div>
    {/* right side form */}
    <div className="c-right">
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" className="user"  placeholder="Name"/>
        <input type="email" name="user_email" className="user" placeholder="Email"/>
        <textarea name="message" className="user" placeholder="Message"/>
        <input type="submit" value="Send" className="button"/>
        <span style={{color:"orange",fontSize:"23px"}}>{done && "Thanks For Contacting Me!" }</span>
        <div
          className="blur c-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
      </form>
    </div>
  </div>
  )
}

export default Contact
