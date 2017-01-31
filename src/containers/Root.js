import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from './App';
import HomePage from './HomePage';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <Route path="/charts/:chart" component={HomePage} />
            <IndexRoute path=""
            component={HomePage} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
