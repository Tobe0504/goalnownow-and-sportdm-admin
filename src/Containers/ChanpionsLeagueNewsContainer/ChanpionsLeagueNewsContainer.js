import SportDmNewsContainer from "../../Components/SportDmNewsContainer/SportDmNewsContainer";
import { useEffect, useContext } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const ChampionsLeagueNewsContainer = () => {
  // context
  const { fetchChampionsLeague, headlines, setHeadlines } =
    useContext(SportDmNewsContext);

  //   Effects
  useEffect(() => {
    fetchChampionsLeague();

    // eslint-disable-next-line
  }, []);

  return (
    <SportDmNewsContainer>
      <NewsList
        list={headlines}
        setList={setHeadlines}
        fetchFunction={fetchChampionsLeague}
      />
    </SportDmNewsContainer>
  );
};

export default ChampionsLeagueNewsContainer;
