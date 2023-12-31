import React from "react";
import "./Error.scss";

import { ReactElement } from "react";
import { Link } from "react-router-dom";

const Error = (): ReactElement => {
  return (
    <div className="noMatch">
      <div className="overlay"></div>
      <div className="errorMessage">
        <h1>The page you were looking for cannot be found.</h1>
        <h2>Please go to the Disney home page by clicking the button below</h2>
        <Link to="/">
          <button>Disney Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
