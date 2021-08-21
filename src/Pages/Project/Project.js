import React from 'react';
import projects from './projectsList';
import * as ReactBootStrp from "react-bootstrap";
import './Project.css';
import 'boxicons';



function Project() {
    return (
        <div className="Project container">
            <div className="row">
            
               {projects.map(project => (
                  

                   <div className="col-sm-4">
                 <ReactBootStrp.Card className="Pcard shadow-lg p-3 mb-5rounded m-3" bg="dark" variant="dark"style={{   }}>
                 <ReactBootStrp.Card.Img className= "imgCard" variant="top" src={project.img}   />
                 
                 <ReactBootStrp.Card.Body >
                     <ReactBootStrp.Card.Title>{project.name}</ReactBootStrp.Card.Title>
                     <hr />
                     <ReactBootStrp.Card.Text className="PcardText">
                     {project.dis}
                      </ReactBootStrp.Card.Text>
                      <hr /> 
                      <div className="row">
                        {project.github ? <a className="col" href={project.github}><box-icon type='logo' name='github' size='md' ></box-icon></a>:null}
                        {project.youtube ? <a className="col" href={project.youtube}><box-icon type='logo' name='youtube' size='md' ></box-icon></a>:null}
                     
                     </div>
                 </ReactBootStrp.Card.Body>
                 
             </ReactBootStrp.Card> 
             </div> 
               ))}
            
            
            
            </div>
        </div>
    );
}

export default Project;