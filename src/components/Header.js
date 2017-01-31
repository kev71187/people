import React, { Component } from 'react';
import { Link } from 'react-router'
require('../stylesheets/nav.scss');


export default class Header extends Component {
  constructor() {
    super();
    this.state = {}
  }


  render() {

    return (
      <div>
        <div className="left-nav">
          <div className="nav-cube">
            <img  src="https://people.ai/app/themes/people/dist/images/svg/logo_white.svg" alt="People.ai"/>
          </div>

          <div className="nav-content">

            <div className={"nav-item " + (this.props.params.chart !== 'line' ? 'active' : '')}>
              <Link to="/charts/bar">
                <svg x="0px" y="0px" viewBox="0 0 512 512" ><g><rect x="64" y="248" width="384" height="16"/></g><g><rect x="88" y="64" width="16" height="160"/></g><g><rect x="152" y="128" width="16" height="96"/></g><g><rect x="216" y="192" width="16" height="32"/></g><g><rect x="280" y="288" width="16" height="64"/></g><g><rect x="344" y="288" width="16" height="128"/></g><g><rect x="408" y="288" width="16" height="160"/></g></svg>
              </Link>
            </div>
            <div className={"nav-item " + (this.props.params.chart === 'line' ? 'active' : '')}>
              <Link to="/charts/line">
                <svg viewBox="0 0 100 100" ><path d="M41.2,42.9l21.4,17.8l27.7-37.9l-2.9-2.1L61.9,55.6L40.7,37.9L20,64.1l2.8,2.2L41.2,42.9z M10.7,82.1V14.6H7.2v71h85.2v-3.5  H10.7z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
