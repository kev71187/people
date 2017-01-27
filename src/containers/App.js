import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from "../components/Header";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
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
