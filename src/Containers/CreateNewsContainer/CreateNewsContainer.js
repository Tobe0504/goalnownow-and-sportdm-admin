import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const CreateNewsContainer = () => {
  // Context

  const {
    isSendingRequest,
    error,
    setError,
    setCreateNewsObject,
    createNewsObject,
    createNews,
    success,
    setSuccess,
  } = useContext(SportDmNewsContext);

  // navigate
  const navigate = useNavigate();
  const [imageView, setImageView] = useState([]);

  // const imageChangeHandler = (event) => {
  //   const selectedImage = event.target.files;

  //   // Create a FileReader object to read the contents of the selected image file
  //   const reader = new FileReader();

  //   // When the FileReader has finished reading the contents of the selected image file
  //   reader.onload = (e) => {
  //     // Set the image contents to the state
  //     setImageView(e.target.result);

  //     setCreateNewsObject((prevState) => {
  //       return { ...prevState, image: selectedImage };
  //     });
  //   };

  //   // Read the contents of the selected image file
  //   reader.readAsDataURL(selectedImage);
  // };

  // const imageChangeHandlerAlt = (event) => {
  //   const selectedImage = event.target.files;

  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     console.log("Check");
  //     setImageViews(e.target.result);

  //     setCreateNewsObject((prevState) => {
  //       return { ...prevState, images: selectedImage };
  //     });
  //     console.log(createNewsObject, "Create news");
  //   };

  //   // reader.readAsDataURL(selectedImage);
  // };

  console.log(createNewsObject, "Hmm");

  const imageChangeHandler = (event) => {
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
      console.log("Check");
      setImageView(imageResults);

      setCreateNewsObject((prevState) => {
        return { ...prevState, image: Array.from(selectedImages) };
      });
    });
  };

  const onChangeHandler = (e) => {
    setCreateNewsObject((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleChange = (content, delta, source, editor) => {
    setCreateNewsObject((prevState) => {
      return { ...prevState, body: content };
    });
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
          <Alert severity="error" variant="outlined">
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
            Create news
          </h4>
        </div>

        <div className={classes.inputSection}>
          <div className={classes.adDetailItem}>
            <p>Headline:</p>
            <div>
              <Input
                type="text"
                placeholder="Headline"
                name="headline"
                onChange={onChangeHandler}
                value={createNewsObject.headline}
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
                name="description"
                onChange={onChangeHandler}
                value={createNewsObject.description}
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Body HTML:</p>
            <div>
              <TextArea
                type="text"
                placeholder="Body Text"
                name="body"
                value={createNewsObject.body}
                readOnly
              />
            </div>
          </div>

          <div
            className={classes.adDetailItem}
            style={{ marginBottom: "3rem" }}
          >
            <p>Body Text:</p>
            <div>
              <ReactQuill
                value={createNewsObject.body}
                onChange={handleChange}
                style={{ height: "200px" }}
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>News Images</p>
            <div>
              <div className={classes.imageUpload}>
                {createNewsObject.image &&
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
                <label htmlFor="imageChange">Upload Images</label>
              </div>
            </div>
          </div>

          {/* <div className={classes.adDetailItem}>
            <p>News Other Images</p>
            <div>
              <div className={classes.imageUpload}>
                {createNewsObject.images &&
                  imageViews.map((data, i) => {
                    return <img src={data} alt="News " key={i} />;
                  })}
                <input
                  type="file"
                  id="imageChanges"
                  max={3}
                  multiple
                  accept="image/*"
                  onChange={(e) => {
                    imageChangeHandlerAlt(e);
                  }}
                />
                <label htmlFor="imageChanges">Upload Images</label>
              </div>
            </div>
          </div> */}

          <div className={classes.buttonSection}>
            <span>
              <button
                className={classes.uploadButton}
                onClick={() => {
                  createNews();
                }}
              >
                {isSendingRequest ? (
                  <CircularProgress
                    size="1rem"
                    color="inherit"
                    style={{ color: "#000000" }}
                  />
                ) : (
                  "Create News"
                )}
              </button>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateNewsContainer;
