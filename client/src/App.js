import React, { useEffect, useState } from "react"
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Sidebar/>
          <Route path="/home/main">
            <Home/>
          </Route>
        </Route>
        <Route  exact path={"/"}>
          <Signup />
        </Route>
        

      </Switch>
     
        
    </div>
  );
}

export default App;
