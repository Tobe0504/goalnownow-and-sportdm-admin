import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import TextArea from "../../Components/TextArea/TextArea";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import classes from "./EditNewsContainer.module.css";
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faImage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
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
  } = useContext(SportDmNewsContext);

  // Params
  const { newsId } = useParams();

  // Effects
  useEffect(() => {
    fetchSelectedArticle(newsId);
  }, []);

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
                value={selectedArticle?.headline}
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
                value={selectedArticle?.byline}
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
                value={selectedArticle?.description_text}
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
                value={selectedArticle?.description_html}
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
                value={selectedArticle?.body_text}
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
                value={selectedArticle?.body_html}
                onChange={(e) => {
                  setbodyHtml(e.target.value);
                }}
                placeholder="Body HTML"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EditNewsContainer;
