import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import TextArea from "../../Components/TextArea/TextArea";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import classes from "./EditNewsContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Components/Input/Input";
import { CircularProgress, Alert, Snackbar } from "@mui/material";

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
    newsImage,
    setNewsImage,
    error,
    setError,
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
      setNewsImage(selectedArticle.picture);
    }

    // eslint-disable-next-line
  }, [selectedArticle]);

  // navigate
  const navigate = useNavigate();

  const imageChangeHandler = (event) => {
    const selectedImage = event.target.files[0];

    // Create a FileReader object to read the contents of the selected image file
    const reader = new FileReader();

    // When the FileReader has finished reading the contents of the selected image file
    reader.onload = (e) => {
      // Set the image contents to the state
      setNewsImage(e.target.result);
    };

    // Read the contents of the selected image file
    reader.readAsDataURL(selectedImage);
  };

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

      {error && (
        <Snackbar
          open={Boolean(alert)}
          autoHideDuration={6000}
          onClose={() => {
            setError();
          }}
        >
          <Alert severity="success" variant="outlined">
            {error}
          </Alert>
        </Snackbar>
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

          <div className={classes.adDetailItem}>
            <p>News Image</p>
            <div>
              <div className={classes.imageUpload}>
                <img src={newsImage} alt="News" />
                <input
                  type="file"
                  id="imageChange"
                  accept="image/*"
                  onChange={(e) => {
                    imageChangeHandler(e);
                  }}
                />
                <label htmlFor="imageChange">Change Image</label>
              </div>
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
