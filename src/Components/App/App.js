import './App.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';

function App () {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <Main />
    </div>
  );
}

export default App;
