import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import { AdContext } from "../../Context/AdContext";
import classes from "./CreateAd.module.css";
import {
  countries,
  goalNowNowPagesAndSections,
  heights,
  platforms,
  sportDmAdPagesAndSections,
  widths,
} from "../../Utilities/data";
import Input from "../../Components/Input/Input";
import Dropdown from "../../Components/Dropdown/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faImage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const CreateAd = () => {
  // States
  const [options, setOptions] = useState([]);

  //   Context
  const {
    name,
    setname,
    country,
    setCountry,
    height,
    setHeight,
    width,
    setWidth,
    platform,
    setPlatform,
    redirectURl,
    setRedirectUrl,
    adImage,
    setAdImage,
    createAd,
    duration,
    setDuration,
    section,
    setSection,
    page,
    setPage,
  } = useContext(AdContext);

  const imageHandler = (e) => {
    const files = Array.from(e.target.files);

    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then((images) => {
      setAdImage(
        images.map((data) => {
          return { image: data, id: v4() };
        })
      ); // set adImage to an array of images
    });
  };

  const imageFilterHandler = (id) => {
    const filteredAds = adImage.filter((data) => {
      return data.id !== id;
    });
    setAdImage(filteredAds);
  };

  const goalNowNowSectionNames = goalNowNowPagesAndSections.map((data) => {
    return data.name;
  });

  const sportDmSectionNames = sportDmAdPagesAndSections.map((data) => {
    return data.name;
  });

  useEffect(() => {
    if (platform === "GoalNowNow") {
      setOptions(goalNowNowSectionNames);
    } else {
      setOptions(sportDmSectionNames);
    }

    // eslint-disable-next-line
  }, [platform]);

  const [sectionArray, setSectionArray] = useState([]);

  useEffect(() => {
    if (platform === "GoalNowNow" && page) {
      setSectionArray(
        goalNowNowPagesAndSections.find((data) => {
          return data.name === page;
        })?.sections
      );
    } else
      setSectionArray(
        sportDmAdPagesAndSections.find((data) => {
          return data.name === page;
        })?.sections
      );

    console.log(sectionArray, "section array");

    // eslint-disable-next-line
  }, [page]);

  // navigate
  const navigate = useNavigate();

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
            Create Ad
          </h4>
        </div>

        <div className={classes.inputSection}>
          <div className={classes.adDetailItem}>
            <p>Ad Name:</p>
            <div>
              <Input
                type="text"
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
                placeholder="Enter Ad Name (eg: Alpha and Jam)"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Country:</p>
            <div>
              <Dropdown
                title="Select a country"
                selected={country}
                setSelected={setCountry}
                options={countries}
              />
            </div>
          </div>

          <div
            className={`${classes.adDetailItem} ${classes.dimensionSection}`}
          >
            <p>Dimensions:</p>
            <div className={classes.timeSection}>
              <div>
                <Dropdown
                  title="Width"
                  selected={width}
                  setSelected={setWidth}
                  options={widths}
                />
              </div>
              <div>
                <Dropdown
                  title="Height"
                  selected={height}
                  setSelected={setHeight}
                  options={heights}
                />
              </div>
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Platform</p>
            <div>
              <Dropdown
                title="Platform"
                selected={platform}
                setSelected={setPlatform}
                options={platforms}
              />
            </div>
          </div>

          <div
            className={`${classes.adDetailItem} ${classes.dimensionSection}`}
          >
            <p>Page and Section:</p>

            <div className={classes.timeSection}>
              <div>
                <Dropdown
                  title={`Page in  ${platform ? platform : "the Website"}`}
                  selected={page}
                  setSelected={setPage}
                  options={options}
                />
              </div>
              <div>
                <Dropdown
                  title={`Section in  ${page ? page : "the Website"}`}
                  selected={section}
                  setSelected={setSection}
                  options={sectionArray}
                />
              </div>
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Duration</p>
            <div>
              <Input
                placeholder="Duration (in days)"
                type="number"
                value={duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Redirect URL</p>
            <div>
              <Input
                type="text"
                value={redirectURl}
                onChange={(e) => {
                  setRedirectUrl(e.target.value);
                }}
                placeholder="Enter an Ad redirect URL"
              />
            </div>
          </div>

          <div className={classes.adDetailItem}>
            <p>Media</p>
            <div className={classes.imageUpload}>
              <i>
                <FontAwesomeIcon icon={faImage} />
              </i>
              <label htmlFor="idInput">Select Image</label>
              <input
                type="file"
                multiple
                name=""
                id="idInput"
                accept="image/*"
                onChange={imageHandler}
              />
            </div>
          </div>

          {adImage.length > 0 && (
            <div className={classes.adDetailItem}>
              <p>Ad Media Preview</p>
              <div className={classes.imagesDisplay}>
                {adImage.length > 0 &&
                  adImage.map((data, i) => {
                    return (
                      <div>
                        <img src={data.image} alt="Ad" key={data.id} />
                        <div
                          className={classes.cancelIcon}
                          onClick={() => {
                            imageFilterHandler(data.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faXmark} />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* {width &&
            height &&
            duration &&
            country &&
            platform &&
            page &&
            section &&
            redirectURl &&
            adImage.length > 0 &&
            name && ( */}
          <div className={classes.buttonSection}>
            <span>
              <button className={classes.uploadButton} onClick={createAd}>
                Create Ad
              </button>
            </span>
          </div>
          {/* )} */}
        </div>
      </div>
    </Layout>
  );
};

export default CreateAd;