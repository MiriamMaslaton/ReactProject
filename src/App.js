import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Components/Router';
import Login from './Components/Login';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        {
          !isLogin ?
            <Login setIsLogin={setIsLogin}/>
            :
            <Router setIsLogin={setIsLogin}/>
        }
      </BrowserRouter>
    </div >
  );
}

export default App;
