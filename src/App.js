import "./App.css";
import Layout from "./Components/Layout/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GoalNowNowAds from "./Containers/GoalNowNowAds/GoalNowNowAds";
import SportDmAds from "./Containers/SportDmAds/SportDmAds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ads/goalnownow" />} />
        <Route path="/ads/goalnownow" element={<GoalNowNowAds />} />
        <Route path="/ads/sportdm" element={<SportDmAds />} />
      </Routes>
    </Router>
  );
}

export default App;
