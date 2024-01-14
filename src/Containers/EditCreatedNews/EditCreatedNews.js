import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import TextArea from "../../Components/TextArea/TextArea";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import classes from "../EditNewsContainer/EditNewsContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "../../Components/Input/Input";
import { CircularProgress, Alert, Snackbar } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditCreatedNews = () => {
  // Context

  const {
    isSendingRequest,
    error,
    setError,
    getCreatedNewsById,
    particularCreatedNews,
    setParticularCreatedNews,
    updateCreatedNews,
    success,
    setSuccess,
  } = useContext(SportDmNewsContext);

  // navigate
  const navigate = useNavigate();

  const [imageView, setImageView] = useState("");
  const { newsId } = useParams();

  const imageChangeHandler = (event) => {
    const selectedImage = event.target.files[0];

    // Create a FileReader object to read the contents of the selected image file
    const reader = new FileReader();

    // When the FileReader has finished reading the contents of the selected image file
    reader.onload = (e) => {
      // Set the image contents to the state
      setImageView(e.target.result);

      setParticularCreatedNews((prevState) => {
        return { ...prevState, image: selectedImage };
      });
    };

    // Read the contents of the selected image file
    reader.readAsDataURL(selectedImage);
  };

  const onChangeHandler = (e) => {
    setParticularCreatedNews((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleChange = (content, delta, source, editor) => {
    setParticularCreatedNews((prevState) => {
      return { ...prevState, full_description: content };
    });
  };

  useEffect(() => {
    getCreatedNewsById(newsId);

    // eslint-disable-next-line
  }, []);

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
          open={Boolean(error)}
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

      <Snackbar
        open={Boolean(success)}
        autoHideDuration={6000}
        onClose={() => {
          setSuccess();
        }}
      >
        <Alert severity="success" variant="outlined">
          {success}
        </Alert>
      </Snackbar>
      {particularCreatedNews && (
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
              Edit news "{particularCreatedNews?.title}"
            </h4>
          </div>

          <div className={classes.inputSection}>
            <div className={classes.adDetailItem}>
              <p>Headline:</p>
              <div>
                <Input
                  type="text"
                  placeholder="Headline"
                  name="title"
                  onChange={onChangeHandler}
                  value={particularCreatedNews.title}
                />
              </div>
            </div>

            <div className={classes.adDetailItem}>
              <p>ByLine:</p>
              <div>
                <Input
                  type="text"
                  placeholder="By Line (Author)"
                  readOnly
                  value="By SportDm"
                />
              </div>
            </div>

            <div className={classes.adDetailItem}>
              <p>Description Text:</p>
              <div>
                <TextArea
                  type="text"
                  placeholder="Description text"
                  name="short_description"
                  onChange={onChangeHandler}
                  value={particularCreatedNews.short_description}
                />
              </div>
            </div>

            <div className={classes.adDetailItem}>
              <p>Body HTML:</p>
              <div>
                <TextArea
                  type="text"
                  placeholder="Body Text"
                  name="full_description"
                  value={particularCreatedNews.full_description}
                  readOnly
                />
              </div>
            </div>

            <div
              className={classes.adDetailItem}
              style={{ marginBottom: "4rem" }}
            >
              <p>Body Text:</p>
              <div>
                <ReactQuill
                  value={particularCreatedNews.full_description}
                  onChange={handleChange}
                  style={{ height: "200px" }}
                />
              </div>
            </div>

            <div className={classes.adDetailItem}>
              <p>News Image</p>
              <div>
                <div className={classes.imageUpload}>
                  {particularCreatedNews.image && (
                    <img
                      src={imageView || particularCreatedNews.image}
                      alt="News"
                    />
                  )}
                  <input
                    type="file"
                    id="imageChange"
                    accept="image/*"
                    onChange={(e) => {
                      imageChangeHandler(e);
                    }}
                  />
                  <label htmlFor="imageChange">Upload Image</label>
                </div>
              </div>
            </div>

            <div className={classes.buttonSection}>
              <span>
                <button
                  className={classes.uploadButton}
                  onClick={() => {
                    updateCreatedNews(newsId);
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
      )}
    </Layout>
  );
};

export default EditCreatedNews;
