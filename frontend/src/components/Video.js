import React from "react";
import Nav from "./Nav";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import { useNavigate } from "react-router-dom";
import "./video.css";

const Video = (props) => {
  return (
    <>
      <div className="video-container">
        <Nav />

        <div
          className="video-display"
          style={{
            backgroundImage: `url("https://c.ndtvimg.com/2021-12/mt9avqvg_chennai-airport-_625x300_01_December_21.jpg")`,
          }}
        ></div>

        <div className="video-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet earum
            ipsam nisi nemo molestias hic ut eaque deleniti pariatur. Similique
            necessitatibus dolores eveniet, adipisci qui id voluptate rem hic
            ratione Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Sed nulla assumenda architecto! Quidem fugit vel, voluptatum, at
            dolor unde rem amet consectetur alias beatae nam similique enim
            nihil iure, sunt aut non modi consequuntur blanditiis eaque quasi
            ullam! Quod, nam veritatis odio odit, non, soluta nostrum
            consequuntur perspiciatis incidunt animi laboriosam a temporibus
            accusamus eius molestiae excepturi numquam accusantium reiciendis
            eaque aspernatur! Consectetur expedita quas commodi, placeat
            deserunt quam distinctio, id quia amet saepe, laudantium facilis.
            Ipsam repudiandae, dignissimos debitis, quidem architecto omnis
            dicta aperiam eveniet velit nostrum dolor laborum quia cum? Tenetur
            quidem voluptates alias pariatur magnam autem! Vero, minima commodi
            officia deleniti tempora dignissimos a esse optio natus facilis
            consequuntur quas aliquam aut atque maxime quaerat est magni
            inventore error magnam impedit. Pariatur accusantium nobis, earum
            reprehenderit voluptatum odit deleniti harum quaerat labore expedita
            magni soluta debitis officiis, repellat aut optio maxime animi
            incidunt laboriosam minus natus excepturi molestiae ex voluptates!
            Suscipit, recusandae, quaerat ea non voluptates repudiandae soluta
            vel quod autem voluptas ab maiores est sunt praesentium laborum
            ullam, vero eos eligendi qui esse cupiditate. Optio, accusamus vel
            sequi commodi fugiat distinctio nemo libero nulla dolor consequatur
            quisquam numquam deleniti, tempora nisi facere natus inventore
            consequuntur aspernatur totam ratione illo, recusandae cumque
            laborum deserunt. Non odio quia eligendi sint ea rem officia eaque,
            incidunt consequatur. Harum non optio voluptas velit amet tempore,
            odit totam repellat, unde dolore sint provident distinctio
            voluptatem quam cupiditate voluptatum officia! Minus non deleniti
            culpa necessitatibus dignissimos rerum maxime ipsam natus voluptas
            at corrupti alias quo provident delectus animi harum enim veritatis,
            odio blanditiis autem adipisci ea aspernatur laboriosam amet! Et
            deserunt, voluptas velit doloremque fugit veniam repellat
            dignissimos laudantium quam optio, debitis non! Repellendus,
            aperiam? Earum repellendus laudantium quasi dolorum consequatur
            officiis autem iusto ipsam ullam quisquam sapiente fugit, aperiam
            dolorem incidunt?
          </p>
        </div>
      </div>
    </>
  );
};

export default Video;
