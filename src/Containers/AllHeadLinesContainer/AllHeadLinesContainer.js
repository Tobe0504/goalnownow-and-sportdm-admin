import SportDmNewsContainer from "../../Components/SportDmNewsContainer/SportDmNewsContainer";
import { useEffect, useContext } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const AllHeadLinesContainer = () => {
  // context
  const { fetchAllHeadlines, headlines, setHeadlines } =
    useContext(SportDmNewsContext);

  //   Effects
  useEffect(() => {
    fetchAllHeadlines();

    // eslint-disable-next-line
  }, []);

  return (
    <SportDmNewsContainer>
      <NewsList
        list={headlines}
        setList={setHeadlines}
        fetchFunction={fetchAllHeadlines}
      />
    </SportDmNewsContainer>
  );
};

export default AllHeadLinesContainer;
