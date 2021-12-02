import React from 'react'
import { Container , Row, Col } from "react-bootstrap";

const Main_News = () => {
    return (
        <>
<Row className="main-news-container">

        <Col
        lg={6}
        md={6}
        sm={6}
        xs={6}
        className="mainnews"
        >

         <div
           className="mainnews-image"
           style={{ 
           backgroundImage: `url("https://c.ndtvimg.com/2021-12/mt9avqvg_chennai-airport-_625x300_01_December_21.jpg")`,
           }} ></div>

        </Col>


        <Col lg={6} md={6} sm={6} xs={6}>
        
        <div className="mainnews-news">
         <p> 
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde maiores ven 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ab autem optio atque magni ducimus modi exercitationem numquam soluta iure.
         </p>
                 
        </div>

         </Col>

        </Row>
        </>
    )
}

export default Main_News
