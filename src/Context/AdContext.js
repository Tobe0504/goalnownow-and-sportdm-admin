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
  const [duration, setDuration] = useState("");
  const [section, setSection] = useState("");
  const [page, setPage] = useState("");

  //   Fetch functions
  const createAd = () => {
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/createAds`,
        {
          data: {
            width,
            height,
            duration,
            country,
            platform,
            page,
            section,
            redirect_url: redirectURl,
            media: adImage,
            name,
          },
        }
      )
      .then((res) => {
        console.log(res, "Test");
      })
      .catch((err) => {
        console.log(err, "Test err");
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
      }}
    >
      {props.children}
    </AdContext.Provider>
  );
};

export default AdContextProvider;
