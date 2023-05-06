import "./App.css";
import {
  HashRouter as Router,
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
import EditNewsContainer from "./Containers/EditNewsContainer/EditNewsContainer";
import AllHeadLinesContainer from "./Containers/AllHeadLinesContainer/AllHeadLinesContainer";
import TopStoriesContainer from "./Containers/TopStoriesContainer/TopStoriesContainer";
import FootballNewsContainer from "./Containers/FootballNewsContainer/FootballNewsContainer";
import TransferNewsContainer from "./Containers/TransferNewsContainer/TransferNewsContainer";
import ThisDayLastYearNewsContainer from "./Containers/ThisDayLastYearNewsContainer/ThisDayLastYearNewsContainer";
import ChampionsLeagueNewsContainer from "./Containers/ChanpionsLeagueNewsContainer/ChanpionsLeagueNewsContainer";
import SportDmGHAds from "./Containers/SportDmGhAds/SportDmGhAds";
import SportDMKEAds from "./Containers/SportDMKEAds/SportDMKEAds";
import GoalNowNowGhAds from "./Containers/GoalNowNowGhAds/GoalNowNowGhAds";
import GoalNowNowKeAds from "./Containers/GoalNowNowKeAds/GoalNowNowKeAds";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Restricted>
              <Navigate to="/ads/goalnownow/ng" />
            </Restricted>
          }
        />
        <Route
          path="/ads/goalnownow/ng"
          element={
            <Restricted>
              <GoalNowNowAds />
            </Restricted>
          }
        />

        <Route
          path="/ads/goalnownow/gh"
          element={
            <Restricted>
              <GoalNowNowGhAds />
            </Restricted>
          }
        />

        <Route
          path="/ads/goalnownow/ke"
          element={
            <Restricted>
              <GoalNowNowKeAds />
            </Restricted>
          }
        />
        <Route
          path="/ads/sportdm/ng"
          element={
            <Restricted>
              <SportDmAds />
            </Restricted>
          }
        />

        <Route
          path="/ads/sportdm/gh"
          element={
            <Restricted>
              <SportDmGHAds />
            </Restricted>
          }
        />

        <Route
          path="/ads/sportdm/ke"
          element={
            <Restricted>
              <SportDMKEAds />
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
        <Route
          path="/sportdm-news/all-headlines"
          element={<AllHeadLinesContainer />}
        />
        <Route
          path="/sportdm-news/top-stories"
          element={<TopStoriesContainer />}
        />

        <Route
          path="/sportdm-news/football-news"
          element={<FootballNewsContainer />}
        />

        <Route
          path="/sportdm-news/transfer-news"
          element={<TransferNewsContainer />}
        />
        <Route
          path="/sportdm-news/this-day-last-year"
          element={<ThisDayLastYearNewsContainer />}
        />

        <Route
          path="/sportdm-news/champions-league-news"
          element={<ChampionsLeagueNewsContainer />}
        />

        <Route
          path="/sportdm-news/edit/:newsId"
          element={<EditNewsContainer />}
        />
      </Routes>
    </Router>
  );
}

export default App;
