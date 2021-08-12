import React from 'react';
import './About.css';
import headerGif from './headerGif2.gif';
import * as ReactBootStrp from "react-bootstrap";

function About(){
    return(
        <div className="About">
            <ReactBootStrp.Container>
        <ReactBootStrp.Row >
          <ReactBootStrp.Col ><img className="headerGif" src={headerGif}></img></ReactBootStrp.Col>
          <ReactBootStrp.Col className="baio container">
            <h3>Hello There !!👋</h3>
            <br></br>
            <h5>I am Maimounah Alhejaili</h5>
            <h6>(web & Augmented Reality) Developer 👩🏻‍💻😎</h6>
          </ReactBootStrp.Col>

        </ReactBootStrp.Row>
      </ReactBootStrp.Container>
        </div>
    );

}
export default About;