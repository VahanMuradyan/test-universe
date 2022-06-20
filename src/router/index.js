import { BrowserRouter, Route, Routes } from "react-router-dom";
import Activity from "../components/homepage/activity/Activity";
import Description from "../components/homepage/description/Description";
import Homepage from "../components/homepage/Homepage";
import RarityChart from "../components/raritychart/RarityChart";
import TrollGod from "../components/raritychart/trollgod/TrollGod";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/description" element={<Description />} />
        <Route path="rarity-chart" element={<RarityChart />} />
        <Route path="/trollGod/:id" element = {< TrollGod/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
