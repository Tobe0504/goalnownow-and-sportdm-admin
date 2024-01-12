import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
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
import CreateNewsContainer from "./Containers/CreateNewsContainer/CreateNewsContainer";
import CreatedNewsContainer from "./Containers/CreatedNewsContainer/CreatedNewsContainer";
import EditCreatedNews from "./Containers/EditCreatedNews/EditCreatedNews";

function App() {
  return (
    <Routes>
      <Route element={<Restricted />}>
        <Route path="/" element={<Navigate to="/ads/goalnownow/ng" />} />
        <Route path="/ads/goalnownow/ng" element={<GoalNowNowAds />} />
        <Route path="/ads/goalnownow/gh" element={<GoalNowNowGhAds />} />
        <Route path="/ads/goalnownow/ke" element={<GoalNowNowKeAds />} />
        <Route path="/ads/sportdm/ng" element={<SportDmAds />} />
        <Route path="/ads/sportdm/gh" element={<SportDmGHAds />} />
        <Route path="/ads/sportdm/ke" element={<SportDMKEAds />} />
        <Route path="/ads/create-new-ad" element={<CreateAd />} />
        <Route path="/ads/edit-ad/:adId" element={<EditAd />} />
        <Route path="/ad-info/:adId" element={<SinglyAdContainer />} />
        <Route
          path="/sportdm-news/all-headlines"
          element={<AllHeadLinesContainer />}
        />
        <Route
          path="/sportdm-news/create-news"
          element={<CreateNewsContainer />}
        />

        <Route
          path="/sportdm-news/top-stories"
          element={<TopStoriesContainer />}
        />
        <Route
          path="/sportdm-news/created-news"
          element={<CreatedNewsContainer />}
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

        <Route
          path="/sportdm-news/edit-created-news/:newsId"
          element={<EditCreatedNews />}
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
