import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/User";
import Protect from "./components/ProtectRoute";
import User from "./components/Homepage";
import Reset from "./components/Reset";
import Forget from "./components/Forget";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={User} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/reset" exact component={Reset} />
        <Route path="/forget-pass" exact component={Forget} />
        <Protect path="/home" exact component={Home} />
      </Switch>
    </Router>
  );
};
export default App;
