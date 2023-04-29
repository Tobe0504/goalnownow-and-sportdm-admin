import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const SportDmNewsContext = createContext();

const SportDmNewsContextProvider = (props) => {
  // States
  const [headlines, setHeadlines] = useState([]);
  const [offsetValue, setOffsetValue] = useState(0);
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [error, setError] = useState("");
  const [selectedArticle, setSelectedArticle] = useState();

  //   Editable States
  const [headline, setHeadline] = useState("");
  const [byLine, setByline] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [descriptionHtml, setDescriptionHtml] = useState("");
  const [bodyText, setbodyText] = useState("");
  const [bodyHtml, setbodyHtml] = useState(" ");

  if (offsetValue > 100) {
    setOffsetValue(0);
  }

  // Fetch
  const fetchAllHeadlines = () => {
    setHeadlines([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/getNews?type=all-headlines
`
      )
      .then((res) => {
        setHeadlines(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchAllTopStories = () => {
    setHeadlines([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/getNews?type=top-stories
`
      )
      .then((res) => {
        setHeadlines(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchFootballNews = () => {
    setHeadlines([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/getNews?type=football-news
`
      )
      .then((res) => {
        setHeadlines(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchTransferNews = () => {
    setHeadlines([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/getNews?type=tranfer-news
`
      )
      .then((res) => {
        setHeadlines(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchThisDayLastYear = () => {
    setHeadlines([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/thisDayLastYear`
      )
      .then((res) => {
        setHeadlines(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchChampionsLeague = () => {
    setHeadlines([]);
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/getNews?type=champions-leagues`
      )
      .then((res) => {
        setHeadlines(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchSelectedArticle = (id) => {
    setSelectedArticle();
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/getNewsByID?uri=${id}`
      )
      .then((res) => {
        console.log(res, "Selected");
        setSelectedArticle(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
      });
  };

  const updatedNewsObject = {
    byline: byLine,
    headline,
    description_text: descriptionText,
    description_html: descriptionHtml,
    body_text: bodyText,
    body_html: bodyHtml,
  };

  const updateNewsHandler = (id) => {
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/updateNews/${id}`,
        updatedNewsObject
      )
      .then((res) => {
        console.log(res, "Updated");
        setIsSendingRequest(false);
      })
      .catch((err) => {
        console.log(err);
        setIsSendingRequest(false);
      });
  };

  useEffect(() => {});
  return (
    <SportDmNewsContext.Provider
      value={{
        fetchAllHeadlines,
        headlines,
        setHeadlines,
        isSendingRequest,
        setOffsetValue,
        offsetValue,
        selectedArticle,
        fetchSelectedArticle,
        headline,
        setHeadline,
        byLine,
        setByline,
        descriptionHtml,
        setDescriptionHtml,
        descriptionText,
        setDescriptionText,
        bodyText,
        setbodyText,
        bodyHtml,
        setbodyHtml,
        updateNewsHandler,
        fetchAllTopStories,
        fetchFootballNews,
        fetchTransferNews,
        fetchThisDayLastYear,
        fetchChampionsLeague,
        error,
      }}
    >
      {props.children}
    </SportDmNewsContext.Provider>
  );
};

export default SportDmNewsContextProvider;
