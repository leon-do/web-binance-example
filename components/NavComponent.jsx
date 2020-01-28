import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";
import HeaderComponent from "../components/HeaderComponent";

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: []
    };
  }
  async componentDidMount() {
    const res = await axios.get("https://binance-api-example.herokuapp.com/");
    this.setState({ pages: res.data });
  }
  render() {
    return (
      <React.Fragment>
        <HeaderComponent></HeaderComponent>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Articles
          </a>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              {this.state.pages.map(page => (
                <li key={page._id}>
                  <Link href="/page" as={page.slug} className="nav-item">
                    <a className="nav-link">{page.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavComponent;
