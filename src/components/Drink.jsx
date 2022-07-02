import { Col, Card, Button } from "react-bootstrap";

const Drink = ({ drink }) => {
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          src={drink.strDrinkThumb}
          variant="top"
          alt={`${drink.strDrink} drink`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
          <Button variant="warning" className="w-100 text-uppercase mt-2">
            Show drink
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Drink;
