import './App.css';
import Products from './components/products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Container>
      <Products />
      </Container>  
    </div>
  );
}

export default App;
