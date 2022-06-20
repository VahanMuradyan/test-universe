import React, { useEffect, useRef, useState } from "react";
import "./Homepage.scss";
import TrollCard from "../trollcard/TrollCard";
import { ReactComponent as SortIcon } from "../../../assets/images/sort.svg";
import { ReactComponent as ClearIcon } from "../../../assets/images/ClearIcon.svg";
import { ReactComponent as NextLabel } from "../../../assets/images/nextLabel.svg";
import { ReactComponent as PreviousLabel } from "../../../assets/images/lastLabel.svg";
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

  const [filterCategory, setFilterCategory] = useState([
    {
      id: 1,
      name: "No Eyewear",
      checked: false,
    },
    {
      id: 2,
      name: "3D Glasses",
      checked: false,
    },
    {
      id: 3,
      name: "Bar Shades",
      checked: false,
    },
    {
      id: 4,
      name: "Eye Paint",
      checked: false,
    },
    {
      id: 5,
      name: "Golden Sunglasses",
      checked: false,
    },
    {
      id: 6,
      name: "Monocle",
      checked: false,
    },
    {
      id: 7,
      name: "Orange Sunglesses",
      checked: false,
    },
  ]);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState(null);
  const [perPage, setPerPage] = useState(3);
  const [pageCount, setPageCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [pagesDisplayed, setPagesDisplayed] = useState(false);
  const ref = useRef();

  const [selectedFilters, setSelectedFilters] = useState([]);
  const showSelectedFilters = (filter, index) => {
    filterCategory[index].checked = true;
    setFilterCategory(filterCategory);
    selectedFilters.push(filter.name);
    setSelectedFilters(selectedFilters);
  };

  const clearFilters = () => {
    filterCategory.map((el) => (el.checked = false));
    setFilterCategory(filterCategory);
    setSelectedFilters([]);
  };

  const clearFilter = (element) => {
    console.log(element);
    filterCategory.map((el) =>
      el.name === element ? (el.checked = false) : null
    );
    setFilterCategory(filterCategory);
    const newData = selectedFilters.filter((el) => el !== element);
    setSelectedFilters(newData);
  };

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
  }, [offset, perPage, polymorphs]);

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
                        ? { transform: "rotate(180deg)" }
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
                          <input
                            checked={el.checked}
                            type="checkbox"
                            onChange={() => {
                              showSelectedFilters(el, i);
                            }}
                          />
                          {el.name}
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
          <div
            className="filters-selected"
            style={
              selectedFilters.length > 0 ? { visibility: "visible" } : null
            }
          >
            <p className="results">898 results</p>
            {selectedFilters?.map((el, i) => {
              return (
                <div key={i} className="selected">
                  <h2>{el}</h2>
                  <ClearIcon
                    onClick={() => {
                      clearFilter(el);
                    }}
                  />
                </div>
              );
            })}
            <p
              className="clear"
              onClick={() => {
                clearFilters();
              }}
            >
              Clear all
            </p>
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
              previousLabel={<PreviousLabel />}
              nextLabel={<NextLabel />}
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
              <div
                tabIndex="0"
                onBlur={() => setPagesDisplayed(false)}
                onClick={() => setPagesDisplayed(true)}
                className="card-count"
              >
                {perPage}{" "}
                <SortIcon
                  style={
                    pagesDisplayed
                      ? {
                          transform: "rotate(180deg)",
                          transition: ".5s ease-in-out",
                        }
                      : null
                  }
                />
                <div
                  className="per-page-dropdown"
                  style={pagesDisplayed ? { display: "flex" } : null}
                >
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
