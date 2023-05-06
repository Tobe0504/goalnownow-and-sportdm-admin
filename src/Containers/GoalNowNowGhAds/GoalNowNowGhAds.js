import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";

import PlatformAds from "../../Components/PlatformAds/PlatformAds";

const GoalNowNowGhAds = () => {
  // context
  const { fetchGoalNowNowGHAds, goalNowNowAds, setGoalNowNowAds } =
    useContext(AdContext);

  return (
    <PlatformAds
      list={goalNowNowAds}
      setList={setGoalNowNowAds}
      fetchFunction={fetchGoalNowNowGHAds}
      platform="goalnownow"
    />
  );
};

export default GoalNowNowGhAds;
