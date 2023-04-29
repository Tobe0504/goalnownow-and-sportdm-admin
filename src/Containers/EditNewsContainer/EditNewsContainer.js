import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import TextArea from "../../Components/TextArea/TextArea";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import classes from "./EditNewsContainer.module.css";
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Components/Input/Input";

const EditNewsContainer = () => {
  // Context
  const {
    isSendingRequest,
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
  } = useContext(SportDmNewsContext);

  // Params
  const { newsId } = useParams();

  // Effects
  useEffect(() => {
    fetchSelectedArticle(newsId);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (selectedArticle) {
      setHeadline(selectedArticle.headline);
      setByline(selectedArticle.byline);
      setDescriptionText(selectedArticle.description_text);
      setDescriptionHtml(selectedArticle.description_html);
      setbodyText(selectedArticle.body_text);
      setbodyHtml(selectedArticle.body_html);
    }

    // eslint-disable-next-line
  }, [selectedArticle]);

  // navigate
  const navigate = useNavigate();
  return (
    <Layout>
      {isSendingRequest && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4rem",
          }}
        >
          <CircularProgress
            size="1rem"
            color="inherit"
            style={{ color: "#ffd91b" }}
          />
        </div>
      )}
      <div className={classes.container}>
        <div className={classes.headerContainer}>
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <h4
            onClick={() => {
              navigate(-1);
            }}
          >
            Edit {selectedArticle?.headline}
          </h4>
        </div>

        <div className={classes.inputSection}>
          <div className={classes.adDetailItem}>
            <p>Headline:</p>
            <div>
              <Input
                type="text"
                value={headline}
                onChange={(e) => {
                  setHeadline(e.target.value);
                }}
                placeholder="Headline"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>ByLine:</p>
            <div>
              <Input
                type="text"
                value={byLine}
                onChange={(e) => {
                  setByline(e.target.value);
                }}
                placeholder="By Line (Author)"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Description Text:</p>
            <div>
              <TextArea
                type="text"
                value={descriptionText}
                onChange={(e) => {
                  setDescriptionText(e.target.value);
                }}
                placeholder="Description text"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Description HTML:</p>
            <div>
              <TextArea
                type="text"
                value={descriptionHtml}
                onChange={(e) => {
                  setDescriptionHtml(e.target.value);
                }}
                placeholder="Description HTML"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Body Text:</p>
            <div>
              <TextArea
                type="text"
                value={bodyText}
                onChange={(e) => {
                  setbodyText(e.target.value);
                }}
                placeholder="Body Text"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Body HTML:</p>
            <div>
              <TextArea
                type="text"
                value={bodyHtml}
                onChange={(e) => {
                  setbodyHtml(e.target.value);
                }}
                placeholder="Body HTML"
              />
            </div>
          </div>

          <div className={classes.buttonSection}>
            <span>
              <button
                className={classes.uploadButton}
                onClick={() => {
                  //   editAd(adId);
                  updateNewsHandler(selectedArticle.uri);
                }}
              >
                {isSendingRequest ? (
                  <CircularProgress
                    size="1rem"
                    color="inherit"
                    style={{ color: "#000000" }}
                  />
                ) : (
                  "Update News"
                )}
              </button>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditNewsContainer;
