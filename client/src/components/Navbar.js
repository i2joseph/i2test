import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default" id="navbar">
          <div className="container-fluid">
            <div className="nav navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div>
                <Link to="/">
                  <img className="logo" src="http://www.industryintel.com/commons/images/IndustryIntelLogo.png" role="presentation" />
                </Link>
              </div>
            </div>
            <div className="nav navbar-nav navbar-right collapse navbar-collapse" id="bs-navbar-collapse">
              <li>
                <Link to="market">Market</Link>
              </li>
              <li>
                <Link to="company">Company</Link>
              </li>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar