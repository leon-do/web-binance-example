import React, { Component } from "react";
import Head from "next/head";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Head>
        <title> Binance Web</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/flatly/bootstrap.min.css"
        ></link>
      </Head>
    );
  }
}

export default HeaderComponent;
