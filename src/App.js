
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Products from './Products';
import Product from './Product';
import Footer from './footer';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
