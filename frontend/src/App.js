import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartScreen from './screen/CartScreen';
import ProductsScreen from './screen/ProductsScreen';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />

        <main>
          <Routes>
            <Route path="/products" element={<ProductsScreen />}></Route>
            <Route path="/cart" element={<CartScreen />}></Route>
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
