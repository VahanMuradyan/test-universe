import React from "react";

export default function TrollCard({ troll }) {
  return (
    <div className="singleTrollCard">
      <div className="troll-info">
        <h1>{troll.number}</h1>
        <p>{troll.score}</p>
      </div>
      <div className="troll-image">
        <img className="troll-icon" src={troll.icon} alt={troll.icon}/>
        <img className="card-image" src={troll.image} alt={troll.image} />
      </div>
      <div className="name">
        <h2>{troll.name}</h2>
      </div>
      <div className="v-number">
        <p>{troll.v}</p>
        <p>ID: 4352</p>
      </div>
    </div>
  );
}
