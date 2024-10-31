import React from 'react';
import './App.css';
import MapComponent2 from './leaflet/MapComponent2';
import Header from './Navbar/Header/Header';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <div className=''>
      <div className='mb-1'>
      <Header/>
      </div>
      <div className='m-20 rounded-full'>
        <p className='text-center font-extrabold text-5xl mb-8'>Map</p>
      <MapComponent2/>
      </div>
      <Footer/>
    </div>
  );
};

export default App;
