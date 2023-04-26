import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import GoalNowNowAds from "./Containers/GoalNowNowAds/GoalNowNowAds";
import SportDmAds from "./Containers/SportDmAds/SportDmAds";
import CreateAd from "./Containers/CreateAd/CreateAd";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/ads/goalnownow" />} />
        <Route path="/ads/goalnownow" element={<GoalNowNowAds />} />
        <Route path="/ads/sportdm" element={<SportDmAds />} />
        <Route path="/ads/create-new-ad" element={<CreateAd />} />
      </Routes>
    </Router>
  );
}

export default App;
