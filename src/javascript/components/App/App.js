import React from 'react';

import '../../../styles/app.css';
import Header from '../Header';
import ShippingInfo from '../ShippingInfo';
import Filters from '../Filters';
import Products from '../Products';
import Footer from '../Footer';

const App = () => (
  <div className="app">
    <Header />
    <ShippingInfo />
    <Filters />
    <Products />
    <Footer />
  </div>
);

export default App;
