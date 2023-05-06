import axios from "axios";
import { createContext, useState } from "react";

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
  const [duration, setDuration] = useState(0);
  const [mediaType, setMediaType] = useState("");
  const [section, setSection] = useState("");
  const [page, setPage] = useState("");
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [goalNowNowAds, setGoalNowNowAds] = useState([]);
  const [sportDmAds, setSportDmAds] = useState([]);
  const [singlyAd, setSinglyAd] = useState();
  const [alert, setAlert] = useState("");
  const [createError, setCreateError] = useState([]);
  const [sportDmKEAds, setSportDmKEADs] = useState([]);
  const [sportDmGHAds, setSportDmGHADs] = useState([]);

  // user token
  const adminUserToken = localStorage.getItem("gnn_and_sport_admin_user_token");

  const createAdObject = {
    width,
    height,
    duration,
    country,
    platform,
    page: page?.replaceAll(" ", "-"),
    section: section?.replaceAll(" ", "-"),
    redirect_url: redirectURl,
    media: adImage[0]?.image,
    name,
    mediaType,
  };

  //   Fetch functions

  // Create Ad
  const createAd = () => {
    setIsSendingRequest(true);
    setCreateError([]);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/createAds`,
        createAdObject
      )
      .then((res) => {
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
        setCreateError(Object.values(err.response.data).flat());
        console.log(Object.values(err.response.data).flat());
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
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err");
        setIsSendingRequest(false);
      });
  };

  const fetchGoalNowNowGHAds = () => {
    setGoalNowNowAds([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=GH&platform=goalnownow`,
        createAdObject
      )
      .then((res) => {
        setGoalNowNowAds(
          res.data.data.map((data) => {
            return { ...data, isActive: false };
          })
        );
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err");
        setIsSendingRequest(false);
      });
  };

  const fetchGoalNowNowKEAds = () => {
    setGoalNowNowAds([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=KE&platform=goalnownow`,
        createAdObject
      )
      .then((res) => {
        setGoalNowNowAds(
          res.data.data.map((data) => {
            return { ...data, isActive: false };
          })
        );
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
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err from sportdm");
        setIsSendingRequest(false);
      });
  };

  const fetchSportDmKEAds = () => {
    setSportDmAds([]);
    setIsSendingRequest(true);
    setAlert();
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=KE&platform=sportdm`,
        createAdObject
      )
      .then((res) => {
        setSportDmAds(
          res.data.data.map((data) => {
            return { ...data, isActive: false };
          })
        );
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err from sportdm");
        setIsSendingRequest(false);
      });
  };

  const fetchSportDmGHAds = () => {
    setSportDmAds([]);
    setIsSendingRequest(true);
    setAlert();
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/filterPlatform?country=GH&platform=sportdm`,
        createAdObject
      )
      .then((res) => {
        setSportDmAds(
          res.data.data.map((data) => {
            return { ...data, isActive: false };
          })
        );
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err, "Test err from sportdm");
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
        setSinglyAd(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Detele single Ad
  const deteleAd = (id) => {
    setIsSendingRequest(true);
    axios
      .delete(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/deleteAds?id=${id}`
      )
      .then((res) => {
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
    setAlert("");
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/updateAds/${id}`,
        createAdObject,
        { headers: { Authorization: `Bearer ${adminUserToken}` } }
      )
      .then((res) => {
        setIsSendingRequest(false);
        setAlert(res.data.message);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err, "edit ads");
        setIsSendingRequest(false);
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
        editAd,
        mediaType,
        setMediaType,
        createError,
        setCreateError,
        fetchSportDmGHAds,
        fetchSportDmKEAds,
        sportDmGHAds,
        setSportDmGHADs,
        sportDmKEAds,
        setSportDmKEADs,
        fetchGoalNowNowKEAds,
        fetchGoalNowNowGHAds,
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};

export default AdContextProvider;
