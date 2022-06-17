import React, { useState } from "react";
import Popup from 'reactjs-popup';
import Switch from "react-switch";
// import 'reactjs-popup/dist/index.css';
import "./TrollCard.scss"
import property from "../../../assets/images/Property.png"
import backButton from "../../../assets/images/Left.png"
import badges from "../../../assets/images/Badges.png"
import dots from "../../../assets/images/dots.png"
import marketplace from "../../../assets/images/marketplace.png"

export default function TrollCard({ troll }) {

  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }


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
        >
          {close => (
            <div className="cardContainer">

              <div className="cardContent">
              
                <div className="image">
                <button className="close" onClick={close}>
                    <img src={backButton} />
                    <span>Go Back</span>
                  </button>
                  
                    <Switch
                      className="switch"
                      onChange={handleChange}
                      checked={checked}
                      handleDiameter={28}
                      offColor="#b9b9b9"
                      onColor="#b9b9b9"
                      offHandleColor="#000000"
                      onHandleColor="#000000"
                      height={40}
                      width={70}
                      checkedHandleIcon={
                        <span
                          style={
                            {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              fontSize: 15,
                              color: "#ffffff",
                              padding: 2
                            }
                          }>3D</span>
                      }
                      uncheckedHandleIcon={
                        <span
                          style={
                            {
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "100%",
                              fontSize: 15,
                              color: "#ffffff",
                              padding: 2
                            }
                          }>2D</span>
                      }
                      uncheckedIcon={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "#ffffff",
                            paddingRight: 2
                          }}
                        >
                          3D
                        </div>
                      }
                      checkedIcon={
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            fontSize: 15,
                            color: "#ffffff",
                            paddingRight: 2,
                            zIndex: 3
                          }}
                        >
                          2D
                        </div>
                      }
                    />
                  
                  <div className="badges">
                    <img src={badges} />
                  </div>
                  <img className="card-image" src={troll.image} alt={troll.image} />
                </div>
                <div className="card-description">
                  <div className="description">
                    <div className="title">
                      <h1>Troll God #{troll.id}</h1>
                      <Popup
                        trigger={open => (
                          <button className="button">
                            <img src={dots} />
                          </button>
                        )}
                        position='bottom center'
                        on={['hover', 'focus']}
                      >
                        <span>
                          <img src={marketplace} />
                        </span>
                      </Popup>
                    </div>

                    <p>Charles the Clown is a citizen of the
                      Polymorph Universe. Charles has a unique
                      genetic code that can be scrambled at anytime.
                    </p>
                    <div className="slideProperties">
                      <span>Properties</span>
                      <span>Metadata</span>
                      <span>History</span>
                    </div>
                    <div className="buttons">
                      <button>{troll.v}</button>
                      <button>Rank: #1</button>
                      <button>{troll.score}</button>
                    </div>
                    <div className="pictures">
                      <img src={property} />
                      <img src={property} />
                      <img src={property} />
                      <img src={property} />
                      <img src={property} />
                      <img src={property} />
                      <img src={property} />
                      <img src={property} />
                    </div>
                  </div>

                  <div className="hr"></div>
                  <div className="scrableButton">
                    <button>Scrable</button>
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
