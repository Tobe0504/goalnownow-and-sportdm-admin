import classes from "./NewsList.module.css";
import { Alert, CircularProgress, Snackbar } from "@mui/material";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  activeToggler,
  // activeToggler,
  activeTogglerAllFalse,
} from "../../HelperFunctions/ActiveToggler";
import { useContext, useEffect } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";

const NewsList = (props) => {
  // Context
  const {
    isSendingRequest,
    setOffsetValue,
    offsetValue,
    deleteNews,
    success,
    setSuccess,
    error,
    setError,
  } = useContext(SportDmNewsContext);

  //   Navigate
  const navigate = useNavigate();

  useEffect(() => {
    setOffsetValue(0);

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    props.fetchFunction();

    // eslint-disable-next-line
  }, [offsetValue]);

  return (
    <div className={classes.container}>
      <Snackbar
        open={Boolean(error)}
        autoHideDuration={6000}
        onClose={() => {
          setError();
        }}
      >
        <Alert severity="error" variant="outlined">
          {error}
        </Alert>
      </Snackbar>

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

      {isSendingRequest && (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <CircularProgress
            size="1rem"
            color="inherit"
            style={{ color: "#ffd91b" }}
          />
        </div>
      )}

      {props.list.length <= 0 && !isSendingRequest ? (
        <div className={classes.noNews}>No News found</div>
      ) : (
        props.list.map((item, i) => {
          return (
            <div className={classes.listItemOuter} key={i}>
              <div className={classes.listItem}>
                <div
                  className={classes.leftSection}
                  onClick={() => {
                    if (item.uri) {
                      navigate(`/sportdm-news/edit/${item.uri}`);
                    } else {
                      navigate(`/sportdm-news/edit-created-news/${item.id}`);
                    }
                  }}
                >
                  <div className={classes.adName}>
                    {item?.headline || item.title}
                  </div>
                </div>
                <div className={classes.rightSection}>
                  <div>
                    <FontAwesomeIcon
                      icon={faPencil}
                      onClick={() => {
                        if (item.uri) {
                          navigate(`/sportdm-news/edit/${item.uri}`);
                        } else {
                          navigate(
                            `/sportdm-news/edit-created-news/${item.id}`
                          );
                        }
                      }}
                    />
                  </div>

                  {!item?.uri && (
                    <div
                      onClick={() => {
                        activeToggler(i, props.list, props.setList);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </div>
                  )}
                </div>
              </div>
              <div
                className={classes.deleteOption}
                style={
                  item.isActive
                    ? { maxHeight: "200px" }
                    : { maxHeight: "0px", visibility: "hidden" }
                }
              >
                <p>Are you sure you want to delete?</p>
                <button
                  className={classes.uploadButton}
                  onClick={() => {
                    deleteNews(item.id);
                  }}
                >
                  Yes
                </button>
                <button
                  className={classes.uploadButton2}
                  onClick={() => {
                    activeTogglerAllFalse(i, props.list, props.setList);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          );
        })
      )}

      {/* <div
        className={classes.showMore}
        onClick={() => {
          setOffsetValue((prevState) => prevState + 10);
        }}
      >
        Show more
      </div> */}
    </div>
  );
};

export default NewsList;
