import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const [user, setUser] = useState({
    name:"",
    email:"",
    message:"",

  });
  let name,value;
  const getUserData = (event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value});


  }
  const postData = async(e)=>{
    e.preventDefault();

    const  {name,email,message} = user;
    if(name && email && message){

   

    const res = await fetch('https://portfolio-977f4-default-rtdb.firebaseio.com/jk.json',
    {
      method:'POST',
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        name,
        email,
        message,
      }),


    }
    );
    if(res){
      setUser({
        name:"",
        email:"",
        message:"",
    
      });
      alert('Data Stored Succ');

    }
  }else{
    alert('plz fill the all data')
  }

  };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };


  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
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
          <input type="text" name="name" className="user"  placeholder="Name" autoComplete="off" value={user.user_name} onChange={getUserData} required/>
          <input type="email" name="email" className="user" placeholder="Email" autoComplete="off"onChange={getUserData} value={user.user_email} required/>
          <textarea name="message" className="user" placeholder="Message" onChange={getUserData} value={user.message} autoComplete="off" required/>
          <input type="submit" value="Send" className="button" onClick={postData}/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
