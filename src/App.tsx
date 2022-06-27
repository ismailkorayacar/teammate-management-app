import React, { useState } from 'react';
import { Login } from "./components/Login";
import { Link } from "react-router-dom";


function App() {

  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <div>
      {!isLogin ?
        <Login setIsLogin={setIsLogin} />
        :
        <div className="teammate-app">
          <header>
            <h1>
              Teammate Management App
              <br></br>
              <b>Welcome</b>
            </h1>
          </header>
          <p className='welcome-text'>
            Welcome to the application where you can create and update a software teammate. Click on the button below and start exploring!
            <Link to="/teammate-dashboard" className='start-btn'>Start</Link>
          </p>
        </div>

      }
    </div>

  );
};

export default App;
