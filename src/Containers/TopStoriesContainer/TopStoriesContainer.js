import SportDmNewsContainer from "../../Components/SportDmNewsContainer/SportDmNewsContainer";
import { useEffect, useContext } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const TopStoriesContainer = () => {
  // context
  const { fetchAllTopStories, headlines, setHeadlines } =
    useContext(SportDmNewsContext);

  //   Effects
  useEffect(() => {
    fetchAllTopStories();

    // eslint-disable-next-line
  }, []);

  return (
    <SportDmNewsContainer>
      <NewsList
        list={headlines}
        setList={setHeadlines}
        fetchFunction={fetchAllTopStories}
      />
    </SportDmNewsContainer>
  );
};

export default TopStoriesContainer;
