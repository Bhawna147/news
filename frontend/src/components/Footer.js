import React from 'react'
import "./footer.css"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className='footer-container'>
              <Row className="footer">
                  
                  <Col>
                  Logo
                  </Col>
                  <Col>
                  News <br/><br/>
                  <p>
                      Laws <br/><br/>
                      Corporate <br/><br/>
                      Lorem<br/><br/>
                      In-house               
                  </p>
                  </Col>


                  <Col>
                  Columns<br/><br/>

                  <p>
                      Laws <br/><br/>
                      Corporate <br/><br/>
                      Lorem<br/><br/>
                      In-house           
                  </p>

                  </Col>

                  <Col>
                  Dealstreet<br/><br/>

                  <p>
                      Laws <br/><br/>
                      Corporate <br/><br/>
                      Lorem<br/><br/>
                      In-house               
                  </p>


                  </Col>

                  <Col>
                  Interviews <br/><br/>

                  <p>
                      Laws <br/><br/>
                      Corporate <br/><br/>
                      Lorem<br/><br/>
                      In-house               
                  </p>

                  </Col>
                 
              </Row>

        </div>
    )
}

export default Footer
