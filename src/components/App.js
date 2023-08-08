import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Navbar from "./Navbar";
import "../styles/style.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" Component={Dashboard} />
          </Routes>
        </Router>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    habits: state.habits,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;
