import SportDmNewsContainer from "../../Components/SportDmNewsContainer/SportDmNewsContainer";
import { useEffect, useContext } from "react";
import { SportDmNewsContext } from "../../Context/SportDmNewsContext";
import NewsList from "../../Components/NewsList/NewsList";

const TransferNewsContainer = () => {
  // context
  const { fetchTransferNews, headlines, setHeadlines } =
    useContext(SportDmNewsContext);

  //   Effects
  useEffect(() => {
    fetchTransferNews();

    // eslint-disable-next-line
  }, []);

  return (
    <SportDmNewsContainer>
      <NewsList
        list={headlines}
        setList={setHeadlines}
        fetchFunction={fetchTransferNews}
      />
    </SportDmNewsContainer>
  );
};

export default TransferNewsContainer;
