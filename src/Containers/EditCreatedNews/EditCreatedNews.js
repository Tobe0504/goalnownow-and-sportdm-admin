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
import { useRef } from "react";

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

  // Refs
  const imageFormatChanged = useRef(false);

  const [imageView, setImageView] = useState([]);
  const { newsId } = useParams();

  const imageChangeHandler = (event) => {
    imageFormatChanged.current = true;
    const selectedImages = event.target.files;

    const readers = Array.from(selectedImages).map((image) => {
      const reader = new FileReader();

      return new Promise((resolve) => {
        reader.onload = (e) => {
          resolve(e.target.result);
        };

        reader.readAsDataURL(image);
      });
    });

    Promise.all(readers).then((imageResults) => {
      setImageView(imageResults);

      setParticularCreatedNews((prevState) => {
        return { ...prevState, image: Array.from(selectedImages) };
      });
    });
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

  useEffect(() => {
    if (
      particularCreatedNews &&
      particularCreatedNews?.image.length > 0 &&
      !imageFormatChanged.current
    )
      setImageView(particularCreatedNews.image);

    // eslint-disable-next-line
  }, [particularCreatedNews]);

  console.log(imageView, "Hmm");

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
                  {particularCreatedNews.image?.length > 0 &&
                    imageView.map((data, i) => {
                      return <img src={data} alt="News " key={i} />;
                    })}

                  <input
                    type="file"
                    id="imageChange"
                    accept="image/*"
                    multiple
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
