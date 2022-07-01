import { Button, Form, Row, Col } from "react-bootstrap";

const Forms = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="drinkName">Drink Name</Form.Label>
            <Form.Control
              id="drinkName"
              type="text"
              placeholder="Enter drink name"
              name="drinkName"
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Label htmlFor="category">Category</Form.Label>
          <Form.Select id="category" name="category">
            <option>Select a drink</option>
          </Form.Select>
        </Col>
      </Row>
    </Form>
  );
};

export default Forms;
