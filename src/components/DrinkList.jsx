import useDrinks from "../hooks/useDrinks";
import Drink from "./Drink";
import { Row } from "react-bootstrap";

const DrinkList = () => {
  const { drinks } = useDrinks();
  console.log(drinks);
  return (
    <Row className="mt-5">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </Row>
  );
};

export default DrinkList;
