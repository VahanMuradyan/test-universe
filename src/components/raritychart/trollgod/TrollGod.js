import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import dots from "../../../assets/images/dots.png"
import "./TrollGod.scss"
import { useLocation } from 'react-router-dom';
import puzzle1 from "../../../assets/images/puzzle1.png"
import puzzle2 from "../../../assets/images/puzzle2.png"
import puzzle4 from "../../../assets/images/puzzle4.png"
import badge1 from "../../../assets/images/badge1.png"
import badge2 from "../../../assets/images/badge2.png"
import badge3 from "../../../assets/images/badge3.png"
import badge4 from "../../../assets/images/badge4.png"
import Popup from 'reactjs-popup';
import Switch from "react-switch";
import { useState } from 'react';
import left from "../../../assets/images/Left.png"

const TrollGod = () => {

    let { id } = useParams()
    const { rarityChartData } = useSelector((state) => state.flufWorldData)

    const card = rarityChartData.filter((e) => e.id == id)

    const data = [
        { id: 1, title: "Base character", name: "Troll God", description: "28% have this trait", image: puzzle1 },
        { id: 2, title: "Headwear", name: "Golden Spartan", description: "58% have this trait", image: puzzle2 },
        { id: 3, title: "Eyewear", name: "No Eyewear", description: "58% have this trait", image: puzzle4 },
        { id: 4, title: "Base character", name: "Troll God", description: "28% have this trait", image: puzzle1 },
        { id: 5, title: "Headwear", name: "Golden Spartan", description: "58% have this trait", image: puzzle2 },
        { id: 6, title: "Eyewear", name: "No Eyewear", description: "58% have this trait", image: puzzle4 },
        { id: 7, title: "Base character", name: "Troll God", description: "28% have this trait", image: puzzle1 },
        { id: 8, title: "Headwear", name: "Golden Spartan", description: "58% have this trait", image: puzzle2 }
    ];

    const [checked, setCheched] = useState(false)

    const handleChange = () => {
        if (checked) {
            setCheched(false)
        } else {
            setCheched(true)
        }
    }

    const navigate = useNavigate()



    return card ? (
        <div className='trollGodSection'>

            <div className='trollGodContainer'>
                    <button className='left' onClick={()=> navigate ("/rarity-chart")}>
                        <img src={left} alt={left} />
                        <span>Go back</span>
                    </button>
                <div className='trollImage'>
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
                                        fontSize: 14,
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
                                        fontSize: 14,
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
                                    fontSize: 14,
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
                                    fontSize: 14,
                                    color: "#ffffff",
                                    paddingRight: 2,
                                    zIndex: 3
                                }}
                            >
                                2D
                            </div>
                        }
                    />
                    <div className='image'>
                        <img src={card[0].image} alt={card[0].image} />

                        <div className='badges'>
                            <img src={badge1} alt={badge1} className="badge1" />
                            <img src={badge2} alt={badge2} className="badge2" />
                            <img src={badge3} alt={badge3} className="badge3" />
                            <img src={badge4} alt={badge4} className="badge4" />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <div className='textField'>
                        <div className="title">
                            <h1>Troll God #{card[0].id}</h1>
                            <button><img src={dots} alt={dots} /></button>
                        </div>
                        <p className='p'>Charles the Clown is a citizen of the
                            Polymorph Universe. Charles has a unique
                            genetic code that can be scrambled at anytime.
                        </p>
                        <div className="slideProperties">
                            <span>Properties</span>
                            <span>Metadata</span>
                            <span>History</span>
                        </div>
                        <div className="buttons">
                            <button>{card[0].v}</button>
                            <button>Rank: #1</button>
                            <button>{card[0].score}</button>
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
                    <div className='linear'></div>
                    <div className='buttonField'>
                        <button>
                            Scramble
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ) : ""
}

export default TrollGod