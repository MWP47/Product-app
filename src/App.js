import logo from './logo.svg';
import './App.css';
import Addproduct from './components/Addproduct';
import Navbar from './components/Navbar';
import SearchProuct from './components/SearchProuct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={ <Addproduct/> } />
          <Route path="/Del" element={ <DeleteProduct/> } />
          <Route path="/Sea" element={ <SearchProuct/> } />
          <Route path="/V" element={ <ViewProduct/> } />


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
