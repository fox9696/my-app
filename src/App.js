import './App.css';
import React from 'react';

import Meals from './components/Food/Meals/Meals';
import Header from './components/Food/LayOut/Header';
const App = () => {
  return (
    <>
      <Header />
      <div id='main'>
        <Meals />
      </div>
    </>
  );
};

export default App;
