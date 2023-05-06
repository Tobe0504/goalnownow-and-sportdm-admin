import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";

import PlatformAds from "../../Components/PlatformAds/PlatformAds";

const SportDmGHAds = () => {
  // context
  const { fetchSportDmGHAds, sportDmAds, setSportDmAds } =
    useContext(AdContext);

  return (
    <PlatformAds
      list={sportDmAds}
      setList={setSportDmAds}
      fetchFunction={fetchSportDmGHAds}
      platform="sportdm"
    />
  );
};

export default SportDmGHAds;
