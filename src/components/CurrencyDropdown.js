import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {  ControlLabel, FormControl } from 'react-bootstrap';
import CURRENCIES from "../constants/currencies";
export default class CurrencyDropdown extends Component {
  constructor() {
    super();
    this.state = {
      currency: "USD"
    };
  }
  renderSelectOptions(currency) {
    return(<option key={currency} value={currency}>{currency}</option>);
  }
  render() {
    return (
      <FormControl onChange={this.props.onChange} value={this.props.value} componentClass="select">
        {CURRENCIES.map((currency)=> this.renderSelectOptions(currency))}
      </FormControl>
    )
  }
}
