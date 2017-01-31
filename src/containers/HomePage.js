import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExchangeForm from '../components/ExchangeForm';
import CurrenciesComparison from "../components/CurrenciesComparison";
import moment from "moment";
import {getCurrency} from "../actions/index";
import loading from "../images/loading.gif";
require('../stylesheets/homepage.scss');

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      to: props.to ? props.to : "USD",
      from: props.from ? props.from : "EUR",
      days: this.days(20),
      loading: true
    };

    this.toOnChange = this.toOnChange.bind(this);
    this.fromOnChange = this.fromOnChange.bind(this);
  }
  componentDidMount() {
    this.getData(this.state.to, this.state.from);
  }
  days(num) {
    var days = [];
    for (var i = 0; i < num; i++) {
      days.push(moment().subtract(num - i, 'days'));
    }

    days.push(moment());
    return days;
  }
  getData(to, from) {
    this.state.days.map((day) => this.props.getCurrency(to, from, day));
    this.setLoadingTimeout();
  }
  setLocation(to, from) {
    window.location.hash = '#' + to + "/" + from;
  }
  lastDateFormatted() {
    var format = "MMM DD YYYY";
    return this.state.days[0].format(format);
  }
  toOnChange(event) {
    var to = event.target.value;
    this.setState({to, loading: true});
    this.setLocation(to, this.state.from);
    this.getData(to, this.state.from);
  }
  setLoadingTimeout() {
    var self = this;
    setTimeout(function() {
      self.setState({loading: false});
    }, 1000);
  }
  fromOnChange(event) {
    var from = event.target.value;
    this.setState({from, loading: true});
    this.setLocation(this.state.to, from);
    this.getData(this.state.to, from);
  }

  render() {
    var chart = this.props.params.chart ?  this.props.params.chart : "bar";

    return (
      <div className="homepage">
        { this.state.loading &&
          <img className="loadable loading-img" src={loading}/>
        }

        <div className={"row loadable " + (this.state.loading === true ? "loading" : "")}>
          <h1 className="home-title col-xs-7">
            Exchange Rates <span className="text-muted">: {this.state.to} / {this.state.from} </span>
          </h1>
          <h4 className="todays-date col-xs-5">{this.lastDateFormatted()}</h4>
          <ExchangeForm toOnChange={this.toOnChange} fromOnChange={this.fromOnChange} to={this.state.to} from={this.state.from}/>
          <div className="col-xs-12">
            <CurrenciesComparison chart={chart} days={this.state.days} to={this.state.to} from={this.state.from}/>
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state, props) {
  var params;
  var hash = props.location.hash;
  if (hash) {
    params = hash.replace("#", "").split("/");
    return {
      to: params[0],
      from: params[1]
    }
  }

  return {}
}
export default connect(mapStateToProps, {
  getCurrency
})(HomePage)
