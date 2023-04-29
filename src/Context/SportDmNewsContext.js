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
  const [articles, setArticles] = useState([]);
  const [transferNews, setTransferNews] = useState([]);
  const [transferNewsOffsetValue, setTransferNewsOffsetValue] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedNews, setSearchNews] = useState([]);
  const [searchOffsetValue, setSearchOffsetValue] = useState(0);
  const [thisDayLastYear, setThisDayLastYear] = useState([]);
  const [topStories, setTopStories] = useState([]);
  const [displaySearchContainer, setDisplaySearchContainer] = useState(false);
  const [basketBallNews, setBasketBallNews] = useState([]);
  const [championsLeagueNews, setChampionsLeagueNews] = useState([]);
  const [championsLeagueOffset, setChampionsLeagueOffset] = useState(0);
  const [womenSportNews, setWomenSportNews] = useState([]);
  const [womenSportNewsOffset, setWomenSportNewsOffset] = useState(0);

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
        `${process.env.REACT_APP_PA_API_DOMAIN}/v1/item?sort=issued:desc&sort=uri:asc&limit=20&offset=${offsetValue}&fields=total,limit,offset,item(uri,headline,subject,associations,description_text,subject,body_text,byline,firstcreated)`,
        {
          headers: {
            apikey: process.env.REACT_APP_PA_API_KEY,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res, "Headlines");
        setHeadlines(res.data.item);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        // console.log(err);
        setIsSendingRequest(false);
        setError(err.message);
      });
  };

  const fetchSelectedArticle = (id) => {
    setSelectedArticle();
    axios
      .get(`${process.env.REACT_APP_PA_API_DOMAIN}/v1/item/${id}`, {
        headers: {
          apikey: process.env.REACT_APP_PA_API_KEY,
          Accept: "application/json",
        },
      })
      .then((res) => {
        setSelectedArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
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
      }}
    >
      {props.children}
    </SportDmNewsContext.Provider>
  );
};

export default SportDmNewsContextProvider;
