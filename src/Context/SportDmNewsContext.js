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
  const [newsImage, setNewsImage] = useState("");
  const [createNewsObject, setCreateNewsObject] = useState({
    headline: "",
    description: "",
    body: "",
    image: "",
  });
  const [success, setSuccess] = useState("");

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
        setSelectedArticle(res.data.data);
        setIsSendingRequest(false);
      })
      .catch((err) => {
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
    picture: newsImage,
  };

  const updateNewsHandler = (id) => {
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/updateNews/${id}`,
        updatedNewsObject
      )
      .then((res) => {
        setIsSendingRequest(false);
        setError(res.data.message);
      })
      .catch((err) => {
        setIsSendingRequest(false);
      });
  };

  const createNewsFormData = new FormData();
  const updateNewsFormData = new FormData();

  useEffect(() => {
    createNewsFormData.append("title", createNewsObject.headline);
    createNewsFormData.append(
      "short_description",
      createNewsObject.description
    );
    createNewsFormData.append("full_description", createNewsObject.body);
    createNewsFormData.append("image", createNewsObject.image);

    // eslint-disable-next-line
  }, [createNewsObject]);

  const createNews = () => {
    setIsSendingRequest(true);
    axios
      .post(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/editor/createNews`,
        createNewsFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        setSuccess(res.data.message);
        setIsSendingRequest(false);
      })
      .catch((err) => {
        setIsSendingRequest(false);
        setError(
          err.response?.data?.errors
            ? err?.response?.data?.errors.toString()
            : err.message
        );
      });
  };

  const [createdNews, setCreatedNews] = useState([]);

  const getCreatedNews = (id) => {
    setIsSendingRequest(true);
    axios
      .get(
        `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/editor/newsList`
      )
      .then((res) => {
        setCreatedNews(
          res.data.posts.map((data) => {
            return { ...data, isActive: false };
          })
        );
        setIsSendingRequest(false);
      })
      .catch((err) => {
        setIsSendingRequest(false);
        setError(err.response ? err?.response?.data?.message : err.message);
      });
  };

  const [particularCreatedNews, setParticularCreatedNews] = useState();

  const getCreatedNewsById = (id) => {
    if (id) {
      setIsSendingRequest(true);
      axios
        .get(
          `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/editor/editNews/${id}`
        )
        .then((res) => {
          setParticularCreatedNews(res.data.data);
          setIsSendingRequest(false);
        })
        .catch((err) => {
          setIsSendingRequest(false);
          setError(err.response ? err?.response?.data?.message : err.message);
        });
    }
  };

  useEffect(() => {
    if (particularCreatedNews) {
      updateNewsFormData.append("title", particularCreatedNews.title);
      updateNewsFormData.append(
        "short_description",
        particularCreatedNews.short_description
      );
      updateNewsFormData.append(
        "full_description",
        particularCreatedNews.full_description
      );
      updateNewsFormData.append("image", particularCreatedNews.image);
    }

    // eslint-disable-next-line
  }, [particularCreatedNews]);

  const updateCreatedNews = (id) => {
    if (id) {
      setIsSendingRequest(true);
      axios
        .post(
          `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/editor/updateNews/${id}`,
          updateNewsFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          setSuccess(res.data.message);
          setIsSendingRequest(false);
        })
        .catch((err) => {
          setIsSendingRequest(false);
          setError(err.response ? err?.response?.data?.message : err.message);
        });
    }
  };

  const deleteNews = (id) => {
    if (id) {
      setIsSendingRequest(true);
      axios
        .delete(
          `${process.env.REACT_APP_PRODUCTION_BACKEND_DOMAIN}/api/v1/editor/deleteNews/${id}`
        )
        .then((res) => {
          setSuccess(res.data?.message);
          setIsSendingRequest(false);
          getCreatedNews();
        })
        .catch((err) => {
          setIsSendingRequest(false);
          setError(err.response ? err?.response?.data?.message : err.message);
        });
    }
  };
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
        setError,
        newsImage,
        setNewsImage,
        createNewsObject,
        setCreateNewsObject,
        createNews,
        createdNews,
        getCreatedNews,
        setCreatedNews,
        getCreatedNewsById,
        particularCreatedNews,
        setParticularCreatedNews,
        success,
        setSuccess,
        updateCreatedNews,
        deleteNews,
      }}
    >
      {props.children}
    </SportDmNewsContext.Provider>
  );
};

export default SportDmNewsContextProvider;
