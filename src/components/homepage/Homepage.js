import React, { useState } from "react";
import "./Homepage.scss";
import search from "../../assets/images/search.png";
import filter from "../../assets/images/filter.png";
import { ReactComponent as SmallTab } from "../../assets/images/tabs.svg";
import { ReactComponent as MediumTab } from "../../assets/images/Union.svg";
import { ReactComponent as SortIcon } from "../../assets/images/sort.svg";
import { useSelector } from "react-redux";
import FlufCard from "../flufcard/FlufCard";
import NavBar from "../../components/navBar/NavBar";
import Header from "../header/Header";

export default function Homepage() {
  const { flufData } = useSelector((state) => state.flufWorldData);

  const [tabs, setTabs] = useState([
    {
      id: 1,
      tab: <SmallTab />,
      clicked: false,
    },
    {
      id: 2,
      tab: <MediumTab />,
      clicked: true,
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const handelTabs = (el, ind) => {
    setTabs(tabs.map((tab) => (tab.clicked = false)));
    const cloneTabs = [...tabs];
    cloneTabs[ind].clicked = !cloneTabs[ind].clicked;
    setTabs(cloneTabs);
  };

  const handleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      <div className="homepage-wrapper">
        <div className="homepage-container">
          <NavBar />
          <div className="search-bar">
            <div className="search-field">
              <input
                className="inp-search"
                type="text"
                placeholder="Search items"
              />
              <img className="search-img" src={search} alt={search} />
            </div>
            <div className="buttons">
              <div
                tabIndex="0"
                onBlur={(e) => {
                  setIsOpen(false);
                }}
                onClick={handleDropDown}
                className="sortBy"
              >
                <p>Sort By</p>
                <div
                  className="sortIcon"
                  style={
                    isOpen
                      ? {
                          transform: "rotate(180deg)",
                          transition: ".5s ease-in-out",
                        }
                      : null
                  }
                >
                  <SortIcon />
                </div>

                <div
                  style={isOpen ? { visibility: "visible" } : null}
                  className="dropDown"
                >
                  <ul>
                    <li>Ascending</li>
                    <li>Descending</li>
                  </ul>
                </div>
              </div>
              <button className="btn-filter">
                <img src={filter} alt={filter} />
                Filters
              </button>
              <button className="filter">
                <img src={filter} alt={filter} />
              </button>
              <div className="tabs">
                {tabs.map((el, i) => {
                  return (
                    <div
                      key={i}
                      className={el.clicked ? "active-tab" : "unactive-tab"}
                      onClick={() => {
                        handelTabs(el, i);
                      }}
                    >
                      {el.tab}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="items">
            <div className={tabs[0].clicked === true ? "small-tabs" : "item"}>
              {flufData.map((el) => {
                return <FlufCard fluf={el} key={el.id} />;
              })}
            </div>
            <div className="container-btn">
              <button className="btn-loadMore">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
