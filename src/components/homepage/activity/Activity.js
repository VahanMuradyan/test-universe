import React from "react";
import "./Activity.scss";
import image from "../../../assets/images/Rectangle 40223.png";
import activity1 from "../../../assets/images/Transaction badge (1).png";
import activity2 from "../../../assets/images/Transaction badge (2).png";
import activity3 from "../../../assets/images/Transaction badge.png";
import currencyIcon from "../../../assets/images/Currency icon.png";
import { ReactComponent as ClickIcon } from "../../../assets/images/click.svg";
import NavBar from "../../navBar/NavBar";
import Header from "../../header/Header";

export default function Activity() {
  const data = [
    {
      icon: image,
      name: "Hapebeast",
      number: "#2568",
      action: activity1,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
      price: 8.22,
    },
    {
      icon: image,
      name: "Glenn",
      number: "#256",
      action: activity2,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
      price: 7.242,
    },
    {
      icon: image,
      name: "Adventurer",
      number: "#258",
      action: activity2,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
    },
    {
      icon: image,
      name: "frankenFunk",
      number: "#568",
      action: activity1,
      from: "0x...04ab",
      time: "13 hours ago",
      price: 5.44,
    },
    {
      icon: image,
      name: "Adventuer",
      number: "#28",
      action: activity3,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
      price: 8.242,
    },
    {
      icon: image,
      name: "Hapebeast",
      number: "#58",
      action: activity2,
      from: "0x...04ab",
      time: "13 hours ago",
    },
    {
      icon: image,
      name: "Hapebeast",
      number: "#259",
      action: activity1,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
      price: 8.242,
    },
    {
      icon: image,
      name: "Glenn",
      number: "#77",
      action: activity1,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
      price: 4.242,
    },
    {
      icon: image,
      name: "Glenn",
      number: "#44",
      action: activity2,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
    },
    {
      icon: image,
      name: "Adventurer",
      number: "#17",
      action: activity3,
      from: "0x...04ab",
      to: "0x...05f6",
      time: "13 hours ago",
      price: 8.242,
    },
  ];
  return (
    <>
      <Header />

      <div className="activity-wrapper">
        <NavBar />
        <div className="activity-container">
          <div className="activity">
            <table className="table">
              <thead>
                <tr className="thead">
                  <td>Item</td>
                  <td>Action</td>
                  <td>from</td>
                  <td>to</td>
                  <td>Time</td>
                  <td>Price</td>
                </tr>
              </thead>
              <tbody>
                {data.map((el, i) => {
                  return (
                    <tr key={i}>
                      <td className="icon-td">
                        <img src={el.icon} alt={el.icon} />
                        {el.number}
                      </td>
                      <td>
                        <img src={el.action} alt={el.action} />
                      </td>
                      <td>{el.from}</td>
                      {el.to ? <td>{el.to}</td> : <td>-</td>}
                      <td className="time-td">
                        {el.time}
                        <ClickIcon />
                      </td>
                      {el.price ? (
                        <td className="price-td">
                          <img src={currencyIcon} alt={currencyIcon} />
                          {el.price}
                        </td>
                      ) : (
                        <td className="price-td">-</td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {data.map((el, i) => {
              return (
                <div key={i} className="activity-content">
                  <div className="user">
                    <img className="icon" src={el.icon} alt={el.icon} />
                    <div className="user-info">
                      <div>
                        <h1>{el.name}</h1>
                        <h1> {el.number}</h1>
                        <img src={el.action} alt={el.action} />
                      </div>
                      <div>
                        <span>
                          <p>from </p> {el.from}
                        </span>
                        <span>
                          {el.to ? (
                            <>
                              <p>to </p> {el.to}
                            </>
                          ) : null}
                          <ClickIcon />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="price">
                    {el.price ? (
                      <p>
                        <img src={currencyIcon} alt={currencyIcon} /> {el.price}
                      </p>
                    ) : null}
                    <p>{el.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
