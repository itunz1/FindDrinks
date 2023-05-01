import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinksContext = createContext();

const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!drinkId) {
        return;
      }
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;

        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getRecipe();
  }, [drinkId]);

  const searchDrinks = async (search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;

      const { data } = await axios.get(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    console.log("click");
    setModal(!modal);
  };

  const handleDrinkId = (id) => {
    setDrinkId(id);
  };
  return (
    <DrinksContext.Provider
      value={{
        searchDrinks,
        drinks,
        handleModalClick,
        modal,
        handleDrinkId,
        recipe,
        loading,
      }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export { DrinksProvider };
export default DrinksContext;
