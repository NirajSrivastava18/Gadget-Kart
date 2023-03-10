import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartScreen from './screen/CartScreen';
import ProductsScreen from './screen/ProductsScreen';
import ProductScreen from './screen/ProductScreen.jsx';
import Footer from './components/Footer';
import LandingScreen from './screen/LandingScreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingScreen />}></Route>
            <Route path="/products" element={<ProductsScreen />}></Route>
            <Route path="/product/:id" element={<ProductScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
