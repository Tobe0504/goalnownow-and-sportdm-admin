import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";

import PlatformAds from "../../Components/PlatformAds/PlatformAds";

const SportDmAds = () => {
  // context
  const { fetchSportDmAds, sportDmAds, setSportDmAds } = useContext(AdContext);

  return (
    <PlatformAds
      list={sportDmAds}
      setList={setSportDmAds}
      fetchFunction={fetchSportDmAds}
      platform="sportdm"
    />
  );
};

export default SportDmAds;
