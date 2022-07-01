import { Container } from "react-bootstrap";
import Form from "./components/Forms";
import { CategoriesProvider } from "./context/CategoriesProvider";

function App() {
  return (
    <div className="App">
      <CategoriesProvider>
        <header className="py-5">
          <h1>Find the best drinks here!</h1>
        </header>

        <Container className="mt-5">
          <Form />
        </Container>
      </CategoriesProvider>
    </div>
  );
}

export default App;
