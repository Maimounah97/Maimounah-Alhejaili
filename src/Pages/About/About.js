import React from 'react';
import './About.css';
import headerGif from './headerGif2.gif';
import * as ReactBootStrp from "react-bootstrap";
import AOS from 'aos';
import "aos/dist/aos.css";
function About(){
  AOS.init({ duration:2000 });
    return(
        <div className="About" >
            <ReactBootStrp.Container>
        <ReactBootStrp.Row >
          <ReactBootStrp.Col ><img className="headerGif" src={headerGif}></img></ReactBootStrp.Col>
          <ReactBootStrp.Col className="baio container">
            <h3 data-aos="fade-up">Hello There !!👋</h3>
            <br></br>
            <div data-aos="fade-up">
            <h5 >I am Maimounah Alhejaili</h5>
            <h6 >(web & Augmented Reality) Developer 👩🏻‍💻😎</h6>
            </div>
          </ReactBootStrp.Col>

        </ReactBootStrp.Row>
      </ReactBootStrp.Container>
        </div>
    );

}
export default About;