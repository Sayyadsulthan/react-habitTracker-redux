import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <div className="nav-left">
            <Link to="/">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </Link>
            <h1>Habit Tracker </h1>
          </div>

          <div className="nav-right"> 
            <Link to="/dashboard">
              <h1>Dashboard </h1>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
