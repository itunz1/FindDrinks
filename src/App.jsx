import { Container } from "react-bootstrap";
import Form from "./components/Forms";
import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from "./context/DrinksProvider";

function App() {
  return (
    <div className="App">
      <CategoriesProvider>
        <DrinksProvider>
          <header className="py-5">
            <h1>Find the best drinks here!</h1>
          </header>

          <Container className="mt-5">
            <Form />
          </Container>
        </DrinksProvider>
      </CategoriesProvider>
    </div>
  );
}

export default App;
