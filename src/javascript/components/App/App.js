import React from 'react';
import { connect } from 'react-redux';

import '../../../styles/app.css';
import Header from '../Header';
import ShippingInfo from '../ShippingInfo';
import Filters from '../Filters';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ShippingInfo />
        <Filters />
        {/*<div style={{ height: '200px' }} />*/}
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  ...state
});

const mapDispatch = (dispatch, ownProps) => ({
});

export default connect(mapState, mapDispatch)(App);

//
// export default App;
