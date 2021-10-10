import React from 'react';
import './Articles.css';
import articles from './articlesList';
import * as ReactBootStrp from "react-bootstrap";
import AOS from 'aos';
import "aos/dist/aos.css";

function Articles() {
    AOS.init({ duration:2000 });
    return (
        <div className="Articles container">
            <div className="row">
            
               {articles.map(article => (
                  
                   <div className="col-sm-5">
                 <ReactBootStrp.Card data-aos="fade-up" className="Acard shadow-lg p-3 mb-5rounded m-3" bg="dark" variant="dark">
                 
                 
                 <ReactBootStrp.Card.Body >
                     <ReactBootStrp.Card.Title className="AcardTitle">{article.name}</ReactBootStrp.Card.Title>
                     <hr />
                     <ReactBootStrp.Card.Text className="AcardText">
                     {article.dis}
                         {article.name==="أنواع الواقع المعزز"  ? <a href={article.link}  > اقرأ المزيد</a> : <a href={article.link}> read more</a>  }
                     
                      </ReactBootStrp.Card.Text>
                     
                 </ReactBootStrp.Card.Body>
                 
             </ReactBootStrp.Card> 
             </div> 
               ))}
            
            
            
            </div>
        </div>
    );
}

export default Articles;