import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div style={{ border: "2px solid red", width: "300px", height: "300px" }}>
        <h1>MY CAR</h1>
        <p>
          <img src={props.src} width={"100px"} height={"100px"} />
        </p>
        <h2>CAR NAME : {props.name}</h2>
        <h2>PRICE : {props.price}</h2>
      </div>
    </div>
  );
}

export default Card