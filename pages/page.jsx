import React from "react";
import TopBar from "../components/NavComponent";
import axios from "axios";

function About(props) {
  return (
    <React.Fragment>
      <TopBar></TopBar>
      <div class="container">
        <h1> {props.title} </h1>
        <p> {props.content}</p>
      </div>
    </React.Fragment>
  );
}

About.getInitialProps = async props => {
  const path = props.asPath.slice(1);
  const res = await axios.get("https://binance-api-example.herokuapp.com/");
  const data = res.data;
  const list = data.filter(val => val.slug === path);
  return { title: list[0].title, content: list[0].content };
  return true;
};

export default About;
