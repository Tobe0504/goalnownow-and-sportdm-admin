import SportDmNewsContainer from "../../Components/SportDmNewsContainer/SportDmNewsContainer";
import { useEffect, useContext } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const ThisDayLastYearNewsContainer = () => {
  // context
  const { fetchThisDayLastYear, headlines, setHeadlines } =
    useContext(SportDmNewsContext);

  //   Effects
  useEffect(() => {
    fetchThisDayLastYear();

    // eslint-disable-next-line
  }, []);

  return (
    <SportDmNewsContainer>
      <NewsList
        list={headlines}
        setList={setHeadlines}
        fetchFunction={fetchThisDayLastYear}
      />
    </SportDmNewsContainer>
  );
};

export default ThisDayLastYearNewsContainer;
