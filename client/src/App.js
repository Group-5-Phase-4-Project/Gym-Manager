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
import { useHistory } from "react-router-dom";

function App() {
  const [user, setUser] = useState({})
  let history = useHistory()

  function getUser(signedInUser){
    setUser(signedInUser)
  }

  useEffect((() => {
    fetch("/me")
    .then(r =>{
      if(r.ok) {
        r.json().then(setUser)
        history.push("/home/main")
      }
    })
   
  }), [])
  
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
          <Login getUser={getUser}/>
        </Route>
        <Route  exact path={"/signup"}>
          <Signup getUser={getUser}/>
        </Route>
        

      </Switch>  
      
        
    </div>
  );
}

export default App;
