import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/cart">Cart</Link>
        <button onClick={handleLogout}>Logout</button>
      </nav>
    </header>
  );
}

export default Header;
