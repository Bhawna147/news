import React from 'react'
import "./footer.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Facebook, Instagram  , Youtube } from 'react-bootstrap-icons';


const Footer = () => {
    return (

        <div className="footer-container">

            <Col>
  
          {/* <Row>
              <div className='footer-text'>
                  <p>News</p>
                  <p>Columns</p>
                  <p>Dealstreet</p>
                  <p>Interviews</p>
              </div>

          </Row> */}


          <Row> 
              <div className='footer-contact-container'>

              <div className='footer-contact-box'>
                  <p>Follow &nbsp; &nbsp;
                      | &nbsp; &nbsp;
                  <Facebook/>  &nbsp; &nbsp;&nbsp; 
                  <Instagram/>&nbsp; &nbsp;&nbsp; 
                  <Youtube/>  &nbsp; 
                   </p>   
              </div>

   

              <div className='footer-contact-box'>


              <p>Send Us A Message &nbsp; &nbsp; 
                   |  &nbsp; &nbsp; 
                abc@gmail.com  </p>

              </div>

              <div className='footer-contact-box'>
                

              <p>
                     Call Us  &nbsp; &nbsp; 
                     |  &nbsp; &nbsp; 
        
                     1234567890 </p>


     
              </div>
              </div>
          </Row>

          <hr />
          <Row>
              <div className='footer-text'>
                  <p>TermsofUse</p>
                  <p>PrivacyPolicy</p>
                  <p>Licence</p>
                  <p>Newsletter</p>
              </div>
          </Row>


          </Col>
      
        <div className="footer-copyright">Ⓒ &nbsp; &nbsp;Academy Hub</div>
      </div>


    )
}

export default Footer
