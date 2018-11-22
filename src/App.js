import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from './MainPage';
import './App.css';

const App = () => (
  <Router>
      <Route exact path="/" component={MainPage} />
  </Router>
);

export default App;
