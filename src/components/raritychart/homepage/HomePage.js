import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Homepage.scss";
import TrollCard from "../trollcard/TrollCard";
import { ReactComponent as SortIcon } from "../../../assets/images/sort.svg";
import { ReactComponent as ClearIcon } from "../../../assets/images/ClearIcon.svg";
import Search from "../search/Search";

export default function HomePage() {
  const { rarityChartData } = useSelector((state) => state.flufWorldData);
  const [filterSection, setFilterSection] = useState([
    {
      id: 1,
      name: "Headwear",
      clicked: false,
    },
    {
      id: 2,
      name: "Eyewear",
      clicked: false,
    },
    {
      id: 3,
      name: "Torso",
      clicked: false,
    },
    {
      id: 4,
      name: "Pants",
      clicked: false,
    },
    {
      id: 5,
      name: "Footwear",
      clicked: false,
    },
    {
      id: 6,
      name: "Left-Hand Accessories",
      clicked: false,
    },
    {
      id: 7,
      name: "Right-Hand Accessories (32)",
      clicked: false,
    },
    {
      id: 8,
      name: "Backgrounds (13)",
      clicked: false,
    },
  ]);
  const filterCategory = [
    "No Eyewear",
    "3D Glasses",
    "Bar Shades",
    "Eye Paint",
    "Golden Sunglasses",
    "Monocle",
    "Orange Sunglesses",
  ];

  const handleFilters = (index) => {
    setFilterSection(filterSection.map((filter) => (filter.clicked = false)));
    const clonefilterSection = [...filterSection];
    clonefilterSection[index].clicked = !clonefilterSection[index].clicked;
    setFilterSection(clonefilterSection);
  };

  return (
    <div className="rarity-chart-container">
      <Search />
      <div className="rarity-chart-homepage">
        <div className="rarity-chart-filters">
          <div className="filter">
            <p>Filters</p>
          </div>
          {filterSection.map((el, i) => {
            return (
              <div
                onClick={() => {
                  handleFilters(i);
                }}
                key={i}
                className="filters-section"
              >
                <div className="filters">
                  <p>{el.name}</p>
                  <SortIcon />
                </div>
                <div
                  style={el.clicked? { display: "flex" } : null}
                  className="filters-list"
                >
                  <ul>
                    {filterCategory.map((el, i) => {
                      return (
                        <li key={i}>
                          <input type="checkbox" />
                          {el}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        <div className="main">
          <div className="filters-selected">
            <p className="results">898 results</p>
            <div className="selected">
              <h2>3D Glasses</h2>
              <ClearIcon />
            </div>
            <div className="selected">
              <h2>Monocle</h2>
              <ClearIcon />
            </div>
            <p className="clear">Clear all</p>
          </div>
          <div className="rarity-chart-cards">
            {rarityChartData.map((el, i) => {
              return <TrollCard troll={el} key={el.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
