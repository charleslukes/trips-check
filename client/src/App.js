import React from 'react';
import './App.css';
import NavBar from './components/common/nav';
// import DashBoard from './components/dashboard';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
