import React from "react";
import "./Search.scss";
import { ReactComponent as SortIcon } from "../../../assets/images/sort.svg";
import { ReactComponent as SortByIcon } from "../../../assets/images/SortByIcon.svg";
import search from "../../../assets/images/search.png";

export default function Search() {
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search">
          <img src={search} alt="search" />
          <input placeholder="Search items" />
        </div>
        <div className="sort-cards">
          <p>Rarity Score</p>
          <SortIcon />
          <div className="dropDown">
            <ul>
              <li>Rarity Score</li>
              <li>Rank</li>
              <li>Polymorph ID</li>
            </ul>
          </div>
        </div>
        <div className="sortBy">
          <SortByIcon />
        </div>
      </div>
    </div>
  );
}
