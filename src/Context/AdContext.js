import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AdContext = createContext();

const AdContextProvider = (props) => {
  const [name, setname] = useState("");
  const [country, setCountry] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [platform, setPlatform] = useState("");
  const [redirectURl, setRedirectUrl] = useState("");
  const [adImage, setAdImage] = useState([]);
  const [duration, setDuration] = useState();
  const [section, setSection] = useState("");
  const [page, setPage] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [goalNowNowAds, setGoalNowNowAds] = useState([]);
  const [sportDmAds, setSportDmAds] = useState([]);
  const [singlyAd, setSinglyAd] = useState();
  const [alert, setAlert] = useState("");

  // Update / Edit ads states
  const [newName, setNewName] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newExpiryDate, setNewExpiryDate] = useState("");
  const [newHeight, setNewHeight] = useState("");
  const [newWidth, setNewWidth] = useState("");
  const [newPlatform, setNewPlatform] = useState("");
  const [newRedirectURl, setNewRedirectUrl] = useState("");
  const [newAdImage, setNewAdImage] = useState([]);
  const [newDuration, setNewDuration] = useState();
  const [newSection, setNewSection] = useState("");
  const [newPage, setNewPage] = useState("");

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

  const updatedAdObject = {
    width: newWidth,
    height: newHeight,
    duration: newDuration,
    country: newCountry,
    platform: newPlatform,
    page: newPage,
    section: newSection,
    redirect_url: newRedirectURl,
    media: newAdImage[0]?.image,
    name: newName,
    mediaType: "picture",
  };

  console.log(createAdObject, "Ad ibject");

  //   Fetch functions

  // Create Ad
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
        setAlert(res.data.message);
        setWidth("");
        setHeight("");
        setDuration("");
        setCountry("");
        setPlatform("");
        setPage("");
        setSection("");
        setRedirectUrl("");
        setname("");
        setAdImage([]);
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
        setGoalNowNowAds(
          res.data.data.map((data) => {
            return { ...data, isActive: false };
          })
        );
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
    setAlert();
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=NG&platform=sportdm`,
        createAdObject
      )
      .then((res) => {
        setSportDmAds(
          res.data.data.map((data) => {
            return { ...data, isActive: false };
          })
        );
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
    setSinglyAd();
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/all?id=${id}`
      )
      .then((res) => {
        // setSinglyAd(res.data.data[0]);
        console.log(res);
        setIsSendingRequest(false);

        setWidth(res.data.data[0].width);
        setHeight(res.data.data[0].height);
        setDuration(res.data.data[0].duration);
        setCountry(res.data.data[0].country);
        setPlatform(res.data.data[0].platform);
        setPage(res.data.data[0].page);
        setSection(res.data.data[0].section);
        setRedirectUrl(res.data.data[0].redirect_url);
        setname(res.data.data[0].name);
        setAdImage([{ image: res.data.data[0].media_url }]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(singlyAd, "Singli Ad");
  }, [singlyAd]);

  // Detele single Ad
  const deteleAd = (id) => {
    setIsSendingRequest(true);
    axios
      .delete(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/deleteAds?id=${id}`
      )
      .then((res) => {
        console.log(res, "delete ads");
        setIsSendingRequest(false);
        fetchGoalNowNowAds();
        fetchSportDmAds();
        setAlert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editAd = (id) => {
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/updateAds/${id}`,
        createAdObject
      )
      .then((res) => {
        console.log(res, "Edit ads");
      })
      .catch((err) => {
        console.log(err, "edit ads");
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
        setGoalNowNowAds,
        fetchSportDmAds,
        sportDmAds,
        setSportDmAds,
        fetchSingleAd,
        singlyAd,
        setSinglyAd,
        deteleAd,
        alert,
        setAlert,
        setNewName,
        setNewCountry,
        editAd,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};

export default AdContextProvider;
