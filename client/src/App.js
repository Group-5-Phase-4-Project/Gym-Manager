import React, { useEffect, useState } from "react"
import './App.css';
import Signup from './components/Signup';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
import { Route, Switch } from "react-router-dom"
import Program from "./components/Program";
import Review from "./components/Review"
import Trainer from "./components/Trainer";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState({})

  function getUser(signedInUser){
    setUser(signedInUser)
  }
  return (
    <div className="App">
    
      
      <Switch>
        <Route path="/home">
          <Sidebar/>
          <Route path="/home/main">
            <Home user={user}/>
          </Route>
          <Route path="/home/program">
            <Program/>
          </Route>
          <Route path="/home/review">
            <Review/>
          </Route>
          <Route path="/home/trainer">
            <Trainer/>
          </Route>
          
        </Route>
        <Route  exact path={"/"}>
          <Signup getUser={getUser}/>
        </Route>
        

      </Switch>  
      
        
    </div>
  );
}

export default App;
