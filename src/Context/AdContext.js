import axios from "axios";
import { createContext, useState } from "react";

export const AdContext = createContext();

const AdContextProvider = (props) => {
  //
  const formData = new FormData();

  const [name, setname] = useState("");
  const [country, setCountry] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [platform, setPlatform] = useState("");
  const [redirectURl, setRedirectUrl] = useState("");
  const [adImage, setAdImage] = useState(formData);
  const [duration, setDuration] = useState();
  const [section, setSection] = useState("");
  const [page, setPage] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [goalNowNowAds, setGoalNowNowAds] = useState([]);
  const [sportDmAds, setSportDmAds] = useState([]);
  const [singlyAd, setSinglyAd] = useState([]);

  const createAdObject = {
    width,
    height,
    duration,
    country,
    platform,
    page,
    section,
    redirect_url: redirectURl,
    media: adImage[0]?.image,
    name,
    mediaType: "picture",
  };

  console.log(createAdObject, "Ad ibject");

  //   Fetch functions
  const createAd = () => {
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/createAds`,
        createAdObject
      )
      .then((res) => {
        console.log(res, "Test");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err");
        setIsSendingRequest(false);
      });
  };

  // Fetch ads by platform
  const fetchGoalNowNowAds = () => {
    setGoalNowNowAds([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=NG&platform=goalnownow`,
        createAdObject
      )
      .then((res) => {
        setGoalNowNowAds(res.data.data);
        console.log(res, "Test");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err");
        setIsSendingRequest(false);
      });
  };

  // Fetch ads by platform
  const fetchSportDmAds = () => {
    setSportDmAds([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=NG&platform=sportdm`,
        createAdObject
      )
      .then((res) => {
        setSportDmAds(res.data.data);
        console.log(res, "Test");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err");
        setIsSendingRequest(false);
      });
  };

  // Fetch single Ad
  const fetchSingleAd = (id) => {
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/all?id=${id}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <AdContext.Provider
      value={{
        name,
        setname,
        country,
        setCountry,
        expiryDate,
        setExpiryDate,
        height,
        setHeight,
        width,
        setWidth,
        platform,
        setPlatform,
        redirectURl,
        setRedirectUrl,
        adImage,
        setAdImage,
        createAd,
        duration,
        setDuration,
        section,
        setSection,
        page,
        setPage,
        fetchGoalNowNowAds,
        isSendingRequest,
        goalNowNowAds,
        fetchSportDmAds,
        sportDmAds,
        fetchSingleAd,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};

export default AdContextProvider;
