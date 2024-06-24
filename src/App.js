import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';

const Private = ({ children }) => {
  return localStorage.getItem('loggedInUser') ? children : <Navigate to="/login" />;
};

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeader = !['/login', '/register'].includes(location.pathname);

  return (
    <div>
      {showHeader && <Header />}
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            
              <Layout>
                <Home />
              </Layout>
             
          }
        />
        <Route
          path="/product/:id"
          element={
           
              <Layout>
                <ProductDetails />
              </Layout>
           
          }
        />
        <Route
          path="/cart"
          element={
            
              <Layout>
                <Cart />
              </Layout>
               
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
