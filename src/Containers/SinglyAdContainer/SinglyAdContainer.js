import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import { AdContext } from "../../Context/AdContext";
import classes from "./SinglyAdContainer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router-dom";

const SinglyAdContainer = () => {
  // Context
  const { singlyAd, fetchSingleAd } = useContext(AdContext);

  const navigate = useNavigate();

  const { adId } = useParams();

  useEffect(() => {
    fetchSingleAd(adId);

    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
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
            {singlyAd?.name}
          </h4>
        </div>

        <div className={classes.inputSection}>
          <div className={classes.adDetailItem}>
            <p>Ad Name:</p>
            <div>{singlyAd?.name}</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Country:</p>
            <div>{singlyAd?.country}</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Height:</p>
            <div>{singlyAd?.height}px</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Width:</p>
            <div>{singlyAd?.width}px</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Platform:</p>
            <div>{singlyAd?.platform}</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Page:</p>
            <div>{singlyAd?.page}</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Section:</p>
            <div>{singlyAd?.section}</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Duration:</p>
            <div>{singlyAd?.duration} days</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Redirect URL:</p>
            <div>{singlyAd?.platform}</div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Ad Media Preview</p>
            <div className={classes.imagesDisplay}>
              <div>
                <img src={singlyAd?.media_url} alt="Ad" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SinglyAdContainer;
