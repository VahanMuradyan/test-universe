import React from "react";
import Header from "../../header/Header";
import NavBar from "../../navBar/NavBar";
import "./Description.scss";

export default function Description() {
  return (
    <>
      <Header />
      <div className="description-wrapper">
        <NavBar />
        <div className="description-container">
          <div className="description">
            <h1> This is FLUF World…</h1>
            <p>
              A metaverse ecosystem of NFT character collectables and a global,
              creative community.
              <br /> From our genesis collection Flufs, to Thingies, Party Bears
              and more to come, we’re building
              <br /> a world that’s yours to shape, explore and call home.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
