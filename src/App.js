/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="Quotes" element={<Quotes />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
