import React from 'react'
import Nav from "./Nav"
// import 
// import { Container , Row, Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './main.css'
import Mainnews from "./Main_News"

const Main = () => {
    return (
        <div>
            <Nav/>
            <div className="heading">
            <h1>Today's Top Stories</h1>
            </div>
{/* <Container> */}
    {/* <Row> */}
            <Row className="main">
        
                <Col
                  lg={5}
                  md={12}
                  sm={12}
                  xs={12}
                  className="main-left">
                   
                  <div className=" main-left-container" 
        
                    style={{ 
                         backgroundImage: `url("https://c.ndtvimg.com/2021-12/mt9avqvg_chennai-airport-_625x300_01_December_21.jpg")`,
                         }} >
                   
                    </div> 

                     <div>
                     {/* <Mainnews/> */}
            
                     </div>

                </Col>

                <Col 
                lg={7}
                md={12}
                sm={12}
                xs={12}
                className="main-right">
                  <Mainnews 
               classN = "main-news-container-horizontal" />
                 <Mainnews 
               classN = "main-news-container-horizontal" />
                 <Mainnews 
               classN = "main-news-container-horizontal" />
                 <Mainnews 
               classN = "main-news-container-horizontal" />
                 <Mainnews 
               classN = "main-news-container-horizontal" />
                 <Mainnews 
               classN = "main-news-container-horizontal" />

                </Col>

      

            </Row>


        </div>
    )
}

export default Main
