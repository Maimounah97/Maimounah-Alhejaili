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
        
        <div>
        <ReactBootStrp.Row >
        
          <ReactBootStrp.Col className="skills container">
          <hr />
        
            {/* <div data-aos="fade-up"> */}
            <h4>Technical Skills</h4>
            {/* react , js , html , css , bootstrab , python , java , nodejs , react router , unity , sql , express.js , git , npm */}
            <img src='https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-CSS-1572B6?logo=css3&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-jQuery-0769AD?logo=jquery&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-ReactJs-61DAFB?logo=react&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-PHP-777BB4?logo=php&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Unity-000000?logo=unity&logoColor=white&style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-C%20Sharp-239120?logo=c-sharp&logoColor=white&style=plastic' style={{padding: 10}}></img>
            
            
            
            {/* </div> */}
            <div className="personalSkills">
            <h4>Personal Skills</h4>
            <img src='https://img.shields.io/badge/-Problem%20Solving-critical?style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Analysis-00ACC1?style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Teamwork-informational?style=plastic' style={{padding: 10}}></img>
            <img src='https://img.shields.io/badge/-Communication-00B388?style=plastic' style={{padding: 10}}></img>
            </div>
          </ReactBootStrp.Col>

        </ReactBootStrp.Row>
        </div>
      </ReactBootStrp.Container>
        </div>
    );

}
export default About;