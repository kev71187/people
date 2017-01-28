import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyDropdown from "../components/CurrencyDropdown";
import {FormGroup} from 'react-bootstrap';
import CurrenciesComparison from "../components/CurrenciesComparison";
import moment from "moment";
import {getCurrency} from "../actions/index";
require('../stylesheets/homepage.scss');

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: props.to ? props.to : "USD",
      from: props.from ? props.from : "EUR",
      days: this.days(20)
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
    this.setState({to});
    this.setLocation(to, this.state.from);
    this.getData(to, this.state.from);
  }
  fromOnChange(event) {
    var from = event.target.value;
    this.setState({from});
    this.setLocation(this.state.to, from);
    this.getData(this.state.to, from);
  }

  render() {
    return (
      <div className="row">
        <h1 className="col-xs-12 text-center">
          {this.state.to}/{this.state.from} Exchange Rates from {this.lastDateFormatted()}
        </h1>
        <div className="col-md-4 form-inline text-right pull-right">
          <FormGroup controlId="currencyControls">
            <label className="margin-right-5">Choose rates</label>
            <CurrencyDropdown onChange={this.toOnChange} value={this.state.to}/>
            <span> / </span>
            <CurrencyDropdown onChange={this.fromOnChange} value={this.state.from}/>
          </FormGroup>
        </div>
        <div className="col-xs-12">
          <CurrenciesComparison days={this.state.days} to={this.state.to} from={this.state.from}/>
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
