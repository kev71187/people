import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../components/Header";
require('../stylesheets/app.scss');

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header params={this.props.params}/>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}
export default connect(mapStateToProps, {
})(App)
