import React, { Component } from 'react';
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
      <select onChange={this.props.onChange} value={this.props.value}>
        {CURRENCIES.map((currency)=> this.renderSelectOptions(currency))}
      </select>
    )
  }
}
