import React from 'react';


// components
import TransportForm from '../components/TransportForm';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Transport App</h1>
      <p>Your one-stop solution for managing transport services.</p>
      <TransportForm />
    </div>
  );
};

export default HomePage;