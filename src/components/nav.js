import { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul className="nav-list">
          <li className="item">Home</li>
          <li className="item">Pricing</li>
          <li className="item">About</li>
        </ul>
        <button className="sign">Sign up</button>
      </div>
    );
  }
}

export default Nav;
