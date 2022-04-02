import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "./Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";
import "./video.css";
import ReactPlayer from 'react-player';

const Video = () => {
  const { state } = useLocation();
  console.log(state);


  return (
    <>
      <div className="video-container">
        <Nav />

<div 
      className="video-display">
      
        <div
          className="player-wrapper"
        >

            <ReactPlayer 
            className = 'react-player'
            url = "https://www.youtube.com/watch?v=uvOx8y7Ne5k" 
            width= '100%'
            height= '100%'
            controls = {true}
            />
      

        </div>
        </div>



        <div className="video-content">
          {/* <p>{state.full_story}</p> */}

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas numquam nulla porro fugiat vitae incidunt rem sint nam, facilis at facere, tenetur voluptatum hic repudiandae ab quasi ipsum doloremque recusandae exercitationem autem aut unde assumenda praesentium. Quo tenetur quam dolorum alias voluptatem similique adipisci totam voluptate libero natus hic officia reiciendis neque architecto dolor quibusdam, ratione doloremque esse ex sapiente sequi ut quasi. Veritatis dicta saepe asperiores cupiditate consectetur minima repellat fugiat eveniet, incidunt quibusdam officia sequi at quidem voluptates tenetur temporibus totam facilis quisquam in dignissimos placeat cum vel quasi vero? Quasi quidem, voluptatum a mollitia magnam omnis aperiam vero sunt perferendis, natus id, accusantium sint. Totam maxime eius officiis porro eligendi, pariatur aspernatur necessitatibus aliquid consectetur omnis tempora quaerat blanditiis laboriosam perferendis, eaque nam enim provident atque. Dignissimos assumenda ullam distinctio enim expedita et voluptatum laboriosam provident optio hic quo rem fugiat ipsa praesentium deleniti facilis, omnis doloremque, nihil, pariatur delectus reprehenderit iste! Doloribus cumque officiis illum nesciunt commodi non aperiam alias labore, vero repellat exercitationem placeat eligendi nihil. Omnis odit in voluptatem, sit soluta cumque expedita eaque laborum accusamus quos temporibus consequatur dicta maxime harum? Unde illum nobis ratione quidem facilis dolorem enim minus, quasi exercitationem eos?
         
          </p>
        </div>
      </div>
    </>
  );
};

export default Video;
