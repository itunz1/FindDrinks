import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
import useDrinks from "../hooks/useDrinks";

const Forms = () => {
  const [search, setSearch] = useState({
    drinkName: "",
    category: "",
  });
  const [alert, setAlert] = useState("");
  const { categories } = useCategories();
  const { searchDrinks, drinks } = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Object.values(search).includes(""));
    if (Object.values(search).includes("")) {
      setAlert("Please fill in all fields");
      return;
    }
    setAlert("");
    searchDrinks(search);
    console.log(drinks);
  };

  return (
    <Form>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="drinkName">Drink Name</Form.Label>
            <Form.Control
              id="drinkName"
              type="text"
              placeholder="Enter drink name"
              name="drinkName"
              value={search.drinkName}
              onChange={(e) =>
                setSearch({ ...search, [e.target.name]: e.target.value })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="category">Category</Form.Label>
          <Form.Select
            id="category"
            name="category"
            onChange={(e) =>
              setSearch({ ...search, [e.target.name]: e.target.value })
            }
          >
            <option value="">Select a drink</option>
            {categories.map((category) => {
              return (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              );
            })}
          </Form.Select>
        </Col>
      </Row>

      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100 mt-4 mt-md-0"
            onClick={handleSubmit}
            type="submit"
          >
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;
