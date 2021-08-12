import * as ReactBootStrp from "react-bootstrap";
import { Route } from 'react-router-dom';
//import './App.css';
import Navbar from './Navbar/Navbar.js';
import headerGif from './Pages/About/headerGif2.gif';
import Projects from './Pages/Project/Project.js';
import projects from './Pages/Project/projectsList.js';
import Articles from './Pages/Articles/Articles.js';
import About from './Pages/About/About.js';
import Contact from './Pages/Contact/Contact.js';
function App() {
  return (
    <div >
      <Navbar />
      <Route path="/About" >
         <About />
        </Route>
      <Route path="/Projects" >
           <Projects /> 
        </Route>
        <Route path="/Articles" >
         <Articles />
        </Route>
        <Route path="/Contact" >
         <Contact />
        </Route>
      {/* <ReactBootStrp.Container>
        <ReactBootStrp.Row >
          <ReactBootStrp.Col ><img className="headerGif" src={headerGif}></img></ReactBootStrp.Col>
          <ReactBootStrp.Col className="baio container">
            <h3>Hello There !!👋</h3>
            <br></br>
            <h5>I am Maimounah Alhejaili</h5>
            <h6>(web & Augmented Reality) Developer 👩🏻‍💻😎</h6>
          </ReactBootStrp.Col>

        </ReactBootStrp.Row>
      </ReactBootStrp.Container> */}
 
    </div>
  );
}

export default App;
