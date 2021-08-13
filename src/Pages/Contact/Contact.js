import React from 'react';
import * as ReactBootStrp from "react-bootstrap";
import './Contact.css';
import 'boxicons';
import emailjs from 'emailjs-com';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Maimounah-Portfolio', 'Maimounah-Portfolio-Proj', e.target, 'user_uXw4GKO57TkproiJYs6Oq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

function Contact(){
    return(
        <div className="container" >
            <ReactBootStrp.Form onSubmit={sendEmail}>
            <ReactBootStrp.Form.Group className="mb-3" controlId="contactForm.ControlInput1">
    <ReactBootStrp.Form.Label> Name</ReactBootStrp.Form.Label>
    <ReactBootStrp.Form.Control name="Name" type="Name" placeholder="Enter Your Name" />
  </ReactBootStrp.Form.Group>
  <ReactBootStrp.Form.Group className="mb-3" controlId="contactForm.ControlInput1">
    <ReactBootStrp.Form.Label>Email address</ReactBootStrp.Form.Label>
    <ReactBootStrp.Form.Control name="Email" type="email" placeholder="name@example.com" />
  </ReactBootStrp.Form.Group>
  <ReactBootStrp.Form.Group className="mb-3" controlId="contactForm.ControlInput1">
    <ReactBootStrp.Form.Label> Subject</ReactBootStrp.Form.Label>
    <ReactBootStrp.Form.Control name="Subject" type="Subject" placeholder="Subject" />
  </ReactBootStrp.Form.Group>
  <ReactBootStrp.Form.Group className="mb-3" controlId="contactForm.ControlTextarea1">
    <ReactBootStrp.Form.Label>Message</ReactBootStrp.Form.Label>
    <ReactBootStrp.Form.Control name="Message" as="textarea" rows={3} />
  </ReactBootStrp.Form.Group>
   
   <ReactBootStrp.Button style={{background:"rgb(128, 49, 64)"}}  type="submit" value="Send">
    Send Message
  </ReactBootStrp.Button>
</ReactBootStrp.Form>
<hr />
<div className="row mt-3">
    <a className="col " href='http://linkedin.com/in/maimounah-alhejaili-b962001a6'><box-icon type='logo' name='linkedin'></box-icon></a>
    <a className="col" href='https://twitter.com/MaimounahDev'><box-icon type='logo' name='twitter'></box-icon></a>
                     
                     </div>
        </div>
    )
}

export default Contact;
