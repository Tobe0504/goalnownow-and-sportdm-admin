import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";

import PlatformAds from "../../Components/PlatformAds/PlatformAds";

const GoalNowNowKeAds = () => {
  // context
  const { fetchGoalNowNowKEAds, goalNowNowAds, setGoalNowNowAds } =
    useContext(AdContext);

  return (
    <PlatformAds
      list={goalNowNowAds}
      setList={setGoalNowNowAds}
      fetchFunction={fetchGoalNowNowKEAds}
      platform="goalnownow"
    />
  );
};

export default GoalNowNowKeAds;
