import React from 'react';

const Navegation = () => {

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Mi Sitio</h1>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/register_page">Register</a></li>
        <li><a href="/consult_page">Consult</a></li>
        <li><a href="/contact_page">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navegation;