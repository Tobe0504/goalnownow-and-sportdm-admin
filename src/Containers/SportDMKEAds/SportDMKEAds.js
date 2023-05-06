import { useContext } from "react";
import { AdContext } from "../../Context/AdContext";

import PlatformAds from "../../Components/PlatformAds/PlatformAds";

const SportDMKEAds = () => {
  // context
  const { fetchSportDmKEAds, sportDmAds, setSportDmAds } =
    useContext(AdContext);

  return (
    <PlatformAds
      list={sportDmAds}
      setList={setSportDmAds}
      fetchFunction={fetchSportDmKEAds}
      platform="sportdm"
    />
  );
};

export default SportDMKEAds;
