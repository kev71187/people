import React, { Component } from 'react';
import {InputGroup} from 'react-bootstrap';
import CurrencyDropdown from "../components/CurrencyDropdown";
export default class ExchangeForm extends Component {
  render() {
    return (
      <div className="col-xs-12 exhange-form form-inline text-left">

        <InputGroup controlId="currencyControls">
          <label className="margin-right-5">Choose rates</label>
          <CurrencyDropdown onChange={this.props.toOnChange} value={this.props.to}/>
          <span> / </span>
          <CurrencyDropdown onChange={this.props.fromOnChange} value={this.props.from}/>
        </InputGroup>
      </div>
    )
  }
}
