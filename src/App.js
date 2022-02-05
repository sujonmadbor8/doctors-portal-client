import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home/Home";
import Appointment from "./components/Appointment/Appointment/Appointment";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AllPatients from "./components/AllPatients/AllPatients";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route exact path="/dashboard/appointment">
            <Dashboard />
          </Route>
          <Route exact path="/allpatients">
            <AllPatients />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Router exact path="/doctor/addDoctor">
            <AddDoctor />
          </Router>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
