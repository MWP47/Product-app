import logo from './logo.svg';
import './App.css';
import Addproduct from './components/Addproduct';
import Navbar from './components/Navbar';
import SearchProuct from './components/SearchProuct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Addproduct />
      <SearchProuct />
      <DeleteProduct />

      <ViewProduct />
    </div>
  );
}

export default App;
