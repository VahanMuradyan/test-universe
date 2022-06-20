import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./TrollCard.scss"
import closeIcon from "../../../assets/images/CloseIcon.png"
import Union from "../../../assets/images/Union.png"
import puzzle1 from "../../../assets/images/puzzle1.png"
import puzzle2 from "../../../assets/images/puzzle2.png"
import puzzle3 from "../../../assets/images/puzzle3.png"
import { Link } from "react-router-dom";

export default function TrollCard({ troll }) {

  const data = [
    { id: 1, title: "Base character", name: "Troll God", description: "28% have this trait", image: puzzle1 },
    { id: 2, title: "Headwear", name: "Golden Spartan", description: "58% have this trait", image: puzzle2 },
    { id: 3, title: "Eyewear", name: "No Eyewear", description: "58% have this trait", image: puzzle3 },
    { id: 4, title: "Base character", name: "Troll God", description: "28% have this trait", image: puzzle1 },
    { id: 5, title: "Headwear", name: "Golden Spartan", description: "58% have this trait", image: puzzle2 },
    { id: 6, title: "Eyewear", name: "No Eyewear", description: "58% have this trait", image: puzzle3 },
    { id: 7, title: "Base character", name: "Troll God", description: "28% have this trait", image: puzzle1 },
    { id: 8, title: "Headwear", name: "Golden Spartan", description: "58% have this trait", image: puzzle2 },
    { id: 9, title: "Eyewear", name: "No Eyewear", description: "58% have this trait", image: puzzle3 }

  ]


  return (
    <div className="singleTrollCard">
      <div className="troll-info">
        <h1>{troll.number}</h1>
        <p>{troll.score}</p>
      </div>
      <div className="troll-image">



        <Popup
          trigger={<img className="card-image" src={troll.image} alt={troll.image} />}
          cardContainer
          className="cards"
        >
          {close => (
            <div className="cardContainer">
              <button className="close" onClick={close}>
                <img src={closeIcon} />
              </button>
              <div className="cardContent">


                <div className="image">
                  <img className="card-image" src={troll.image} alt={troll.image} />
                  <img className="troll-icon" src={troll.icon} alt={troll.icon} />

                </div>
                <div className="card-description">
                  <div className="description">
                    <div className="title">
                      <h1>Rarity Rank # {troll.id}</h1>
                      <h2>ID: #{troll.id}</h2>
                    </div>
                    <div className="view">
                      <Link to={`/trollGod/${troll.id}`}>
                        <span>View on Universe</span>
                        <img src={Union} alt={Union} />
                      </Link>
                    </div>
                    <div className="pictures">
                      {
                        data.map((datum, index) => {
                          return (
                            <>
                              <div className={`item${datum.id} item`} key={index}>
                                <div className="itemDescription">
                                  <p>{datum.title}</p>
                                  <p>{datum.name}</p>
                                  <p>{datum.description}</p>
                                </div>
                                <Popup
                                  trigger={open => (
                                    <img src={datum.image} alt={puzzle2} />
                                  )}
                                  position='bottom center'
                                  on={['hover', 'focus']}
                                  className="match"
                                >
                                  <span>
                                    Matching trait
                                  </span>
                                </Popup>

                              </div>
                            </>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Popup>

        <img className="troll-icon" src={troll.icon} alt={troll.icon} />
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
