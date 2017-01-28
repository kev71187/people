import React, { Component } from 'react';
import Chart from "../components/Chart";
import moment from "moment";
import { connect } from 'react-redux';
class CurrenciesComparison extends Component {
  constructor() {
    super();
    this.state = {
      currency: "USD"
    };
  }
  renderSelectOptions(currency) {
    return(<option key={currency} value={currency}>{currency}</option>);
  }
  formatDaysShort() {
    var format = "MMM DD";
    return this.props.days.map((day) => day.format(format));
  }
  dateKey(day) {
    var format = "YYYY-MM-DD";
    return day.format(format);
  }
  render() {
    return (
      <Chart data={this.props.data} labels={this.formatDaysShort()}/>
    )
  }
}
function mapStateToProps(state, props) {
  console.log(state)
  var data = props.days.map(function(day) {
    var key = day.format("YYYY-MM-DD")+ "-" + props.to

    var currency = state.entities.currencies[key];
    if (currency) {
      var symb = props.from.charAt(0).toLowerCase() + props.from.slice(1);
      return currency.rates[symb];
    } else {
      return 0;
    }
  });
  return {
    data
  }
}
export default connect(mapStateToProps, {

})(CurrenciesComparison)
