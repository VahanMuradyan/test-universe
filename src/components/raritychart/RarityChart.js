import React from "react";
import HomePage from "./homepage/HomePage";
import "./RarityChart.scss";

export default function RarityChart() {
  return (
    <div className="rarity-chart-header-wrapper">
      <div className="rarity-chart-header-container">
        <div className="rarity-chart-header">
          <h1>Polymorph Rarity Chart</h1>
          <p>10,000 Total Polymorphs</p>
          <div className="btn-polymorphs">
            <button className="btn-polymorphs-v1">Polymorphs V1</button>
            <button className="btn-polymorphs-v2">Polymorphs V2</button>
          </div>
        </div>
      </div>
      <HomePage />
    </div>
  );
}
