import React, { useState } from "react";
import "./Search.scss";
import { ReactComponent as SortIcon } from "../../../assets/images/sort.svg";
import { ReactComponent as SortByIcon } from "../../../assets/images/SortByIcon.svg";
import search from "../../../assets/images/search.png";

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div className="search-wrapper">
      <div className="search-bar">
        <div className="search">
          <img src={search} alt="search" />
          <input placeholder="Search items" />
        </div>
        <div
          tabIndex="0"
          onBlur={() => setOpen(false)}
          onClick={() => setOpen(true)}
          className="sort-cards"
        >
          <p>Rarity Score</p>
          <SortIcon
            style={
              open
                ? { transform: "rotate(180deg)", transition: ".5s ease-in-out" }
                : null
            }
          />
          <div
            style={open ? { visibility: "visible" } : null}
            className="dropDown"
          >
            <ul>
              <li>Rarity Score</li>
              <li>Rank</li>
              <li>Polymorph ID</li>
            </ul>
          </div>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="sortBy">
          <SortByIcon
            style={
              isOpen
                ? { transform: "rotate(180deg)", transition: ".5s ease-in-out" }
                : null
            }
          />
        </div>
      </div>
    </div>
  );
}
