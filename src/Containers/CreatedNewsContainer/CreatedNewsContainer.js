import SportDmNewsContainer from "../../Components/SportDmNewsContainer/SportDmNewsContainer";
import { useEffect, useContext } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const CreatedNewsContainer = () => {
  // context
  const { createdNews, getCreatedNews, setCreatedNews } =
    useContext(SportDmNewsContext);

  //   Effects
  useEffect(() => {
    getCreatedNews();

    // eslint-disable-next-line
  }, []);

  return (
    <SportDmNewsContainer>
      <NewsList
        list={createdNews}
        setList={setCreatedNews}
        fetchFunction={getCreatedNews}
      />
    </SportDmNewsContainer>
  );
};

export default CreatedNewsContainer;
