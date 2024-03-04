import React from "react";

function Card({ element }) {
  return (
    <>
      <div className="cards">
        <div className="card-img w-24 h-24 ">
          <img src={element.img} alt="placeholder" />
        </div>
        <div className="card-content">
          <h3>{element.title}</h3>
          <p>{element.body}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
