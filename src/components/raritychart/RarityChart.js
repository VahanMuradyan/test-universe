import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomePage from "./homepage/HomePage";
import "./RarityChart.scss";
import bg from "../../assets/images/minting_page_bg.6f03dd9f.jpg";
export default function RarityChart() {
  const { rarityChartData } = useSelector((state) => state.flufWorldData);
  const [data, setData] = useState(
    rarityChartData.filter((el) => el.v === "v1")
  );

  const [buttons, setButtons] = useState([
    {
      id: 1,
      name: "Polymorphs V1",
      shortName: "V1",
      key: "v1",
      isActive: true,
    },
    {
      id: 2,
      name: "Polymorphs V2",
      shortName: "V2",
      key: "v2",
      isActive: false,
    },
  ]);

  const handlePolymorphs = (button, index) => {
    const Data = rarityChartData.filter((el) => el.v === button.key);
    setData(Data);
    setButtons(buttons.map((filter) => (filter.isActive = false)));
    const cloneButtons = [...buttons];
    cloneButtons[index].isActive = !cloneButtons[index].isActive;
    setButtons(cloneButtons);
  };

  return (
    <div className="rarity-chart-header-wrapper">
      <div className="rarity-chart-header-container">
        <div className="rarity-chart-header">
          <h1>Polymorph Rarity Chart</h1>
          <p>10,000 Total Polymorphs</p>
          <div className="btn-polymorphs">
            {buttons.map((el, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    handlePolymorphs(el, i);
                  }}
                  style={
                    el.isActive
                      ? {
                          backgroundImage: `url(${bg})`,
                        }
                      : null
                  }
                  className="btn-polymorphs"
                >
                  <p
                    style={
                      el.isActive
                        ? {
                            color: "black",
                          }
                        : null
                    }
                  >
                    {el.name}
                  </p>
                  <span
                    style={
                      el.isActive
                        ? {
                            color: "black",
                          }
                        : null
                    }
                  >
                    {el.shortName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <HomePage polymorphs={data} />
    </div>
  );
}
