import React from "react";
import sound from "../../assets/images/Sound.png";
import video from "../../assets/images/Video.png";
import currency from "../../assets/images/Currency icon.png";
import { ReactComponent as ButtonIcon } from "../../assets/images/Bottom-right components.svg";

export default function FlufCard({ fluf }) {
  return (
    <div className="singleFlufCard">
      <img className="card-image" src={fluf.image} alt={fluf.image} />
      <img className="sound-icon" src={sound} alt={sound} />
      <img className="video-icon" src={video} alt={video} />

      <div className="text">
        <h2>{fluf.number}</h2>
        <h2>
          <img src={currency} alt={currency} />
          {fluf.count}
        </h2>
      </div>
      <div className="text">
        <p>{fluf.world}</p>
        <h3>
          <p>Offer</p>
          <img src={currency} alt={currency} />
          {fluf.offer}
        </h3>
      </div>
      <div className="text-owner">
        <p>{fluf.owner}</p>
        <ButtonIcon />
      </div>
    </div>
  );
}
