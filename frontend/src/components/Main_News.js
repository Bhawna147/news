import React from "react";
// import { Container , Row, Col } from "react-bootstrap";
function truncate(str, chars) {
  return str.length > chars ? str.substring(0, chars) + "..." : str;
}
const Main_News = (props) => {
  console.log(props.item.paid);
  return (
    <>
      <div className={`${props.classN} ${props.color}`}>
        <div
          className="mainnews-image"
          style={{
            backgroundImage: `url("${props.item.img ? props.item.img : 1}")`,
          }}
        ></div>

        <div className="mainnews-news">
          <p>{truncate(props.item.head, props.characters)}</p>
        </div>
        {props.item.paid && (
          <div className="premium">
            <img src="./rank.png" className="lock"></img>
          </div>
        )}
      </div>
    </>
  );
};

export default Main_News;
