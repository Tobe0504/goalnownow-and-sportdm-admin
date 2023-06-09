import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";

import PlatformAds from "../../Components/PlatformAds/PlatformAds";

const GoalNowNowAds = () => {
  // context
  const { fetchGoalNowNowAds, goalNowNowAds, setGoalNowNowAds } =
    useContext(AdContext);

  return (
    <PlatformAds
      list={goalNowNowAds}
      setList={setGoalNowNowAds}
      fetchFunction={fetchGoalNowNowAds}
      platform="goalnownow"
    />
  );
};

export default GoalNowNowAds;
