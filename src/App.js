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
import EditAd from "./Containers/EditAd/EditAd";
import Login from "./Containers/Login/Login";
import Restricted from "./Components/Restricted/Restricted";
import SinglyAdContainer from "./Containers/SinglyAdContainer/SinglyAdContainer";
import SignUp from "./Containers/SignUp/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Restricted>
              <Navigate to="/ads/goalnownow" />
            </Restricted>
          }
        />
        <Route
          path="/ads/goalnownow"
          element={
            <Restricted>
              <GoalNowNowAds />
            </Restricted>
          }
        />
        <Route
          path="/ads/sportdm"
          element={
            <Restricted>
              <SportDmAds />
            </Restricted>
          }
        />
        <Route
          path="/ads/create-new-ad"
          element={
            <Restricted>
              <CreateAd />
            </Restricted>
          }
        />
        <Route
          path="/ads/edit-ad/:adId"
          element={
            <Restricted>
              <EditAd />
            </Restricted>
          }
        />

        <Route
          path="/ad-info/:adId"
          element={
            <Restricted>
              <SinglyAdContainer />
            </Restricted>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
