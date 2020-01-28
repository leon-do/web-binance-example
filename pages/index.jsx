import React from "react";
import NavComponent from "../components/NavComponent";

function HomePage(props) {
  return (
    <React.Fragment>
      <NavComponent></NavComponent>
      <div className="container">
        <h1> Home Page </h1>
        <p> This is the home page. Click the links above to view articles </p>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
