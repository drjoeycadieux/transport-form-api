'use client';

import React from 'react';

import TransportForm from '../components/TransportForm';
import FooterModule from '../components/FooterModule';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-links">
          <a href="#" className="header-link">Github</a>
        </div>
        <h1 className="home-title">Welcome to the Transport App</h1>
        <p className="home-description">
          Your one-stop solution for managing transport services. Plan, track, and manage your vehicles with ease.
        </p>
      </header>

      <section className="form-section">
        <TransportForm />
      </section>

      <FooterModule />
    </div>
  );
};

export default HomePage;
