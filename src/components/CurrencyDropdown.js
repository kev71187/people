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
  // renderMenuItem(currency) {
  //   return (<MenuItem key={currency} eventKey={currency}>{currency}</MenuItem>);
  // }
  // <DropdownButton title={this.state.currency} id="bg-nested-dropdown">
  //   {CURRENCIES.map((currency)=> this.renderMenuItem(currency))}
  // </DropdownButton>
  renderSelectOptions(currency) {
    return(<option key={currency} value={currency}>{currency}</option>);
  }
  render() {
    return (
      <FormControl componentClass="select">
        {CURRENCIES.map((currency)=> this.renderSelectOptions(currency))}
      </FormControl>
    )
  }
}
