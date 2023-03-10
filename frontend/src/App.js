import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CartScreen from './screen/CartScreen';
import ProductsScreen from './screen/ProductsScreen';
import ProductScreen from './screen/ProductScreen.jsx';
import Footer from './components/Footer';
import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import RegistrationScreen from './screen/RegistrationScreen';
import ProfileScreen from './screen/ProfileScreen';
import CheckoutScreen from './screen/CheckoutScreen';
import OrderSuccessScreen from './screen/OrderSuccessScreen';

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
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route
              path="/registration"
              element={<RegistrationScreen />}
            ></Route>
            <Route path="/profile" element={<ProfileScreen />}></Route>
            <Route path="/checkout" element={<CheckoutScreen />}></Route>
            <Route path="/order-success" element={<OrderSuccessScreen />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
