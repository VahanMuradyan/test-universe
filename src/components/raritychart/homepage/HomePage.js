import React, { useEffect, useRef, useState } from "react";
import "./Homepage.scss";
import TrollCard from "../trollcard/TrollCard";
import { ReactComponent as SortIcon } from "../../../assets/images/sort.svg";
import { ReactComponent as ClearIcon } from "../../../assets/images/ClearIcon.svg";

import Search from "../search/Search";
import useOutsideClick from "./useOutsideClick ";
import filter from "../../../assets/images/filter.png";
import ReactPaginate from "react-paginate";

export default function HomePage({ polymorphs }) {
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
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState(null);
  const [perPage, setPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  const handleFilters = (index) => {
    setFilterSection(filterSection.map((filter) => (filter.clicked = false)));
    const clonefilterSection = [...filterSection];
    clonefilterSection[index].clicked = !clonefilterSection[index].clicked;
    setIsOpen(true);
    setFilterSection(clonefilterSection);
  };

  const handlePageClick = (e) => {
    const selectedPage = (e.selected * perPage) % polymorphs.length;
    setOffset(selectedPage);
  };

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  const ItemsDisplayed = (e) => {
    const value = e.target.innerText;
    setPerPage(value);
  };
  useEffect(() => {
    const slice = polymorphs.slice(offset, offset + perPage);
    setData(slice);
    setPageCount(Math.ceil(polymorphs.length / perPage));
  }, [offset, perPage]);

  return (
    <div className="rarity-chart-container">
      <Search />
      <div className="rarity-chart-homepage">
        <div ref={ref} className="rarity-chart-filters">
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
                <div
                  style={
                    el.clicked && isOpen
                      ? {
                          boxShadow:
                            " 0px 0px 0px 5px rgba(102, 234, 90, 0.15)",
                        }
                      : null
                  }
                  className="filters"
                >
                  <p>{el.name}</p>
                  <SortIcon
                    style={
                      el.clicked && isOpen
                        ? {
                            transform: "rotate(180deg)",
                          }
                        : null
                    }
                  />
                </div>
                <div
                  style={el.clicked && isOpen ? { display: "flex" } : null}
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
            <button className="filter-btn">
              <img src={filter} alt={filter} />
            </button>
            {data?.map((el, i) => {
              return <TrollCard troll={el} key={el.id} />;
            })}
          </div>
          <div className="pagination-container">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={2}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
            <div className="displayed-card">
              <p>Items per page</p>
              <div className="card-count">
                {perPage} <SortIcon />
                <div className="per-page-dropdown">
                  <span onClick={ItemsDisplayed}>9</span>
                  <span onClick={ItemsDisplayed}>6</span>
                  <span onClick={ItemsDisplayed}>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
