import React, { Component } from 'react';
import { connect } from 'react-redux';
import CurrencyDropdown from "../components/CurrencyDropdown";
import {FormGroup} from 'react-bootstrap';
require('../stylesheets/homepage.scss');
import {Bar} from 'react-chartjs-2';
const options = {
    gridLines: {display: false},
    maintainAspectRatio: false,
    showTooltips: true,
    fillColor: "steelblue",
    barThickness: 4,
    legend: {
        display: false
    },
    label: "red",
    tooltips: {
        enabled: true,
        displayColors: false,
    },

    hover: {
      animationDuration: 0
    },

    title: {
        display: false,
    },
    scales: {
      xAxes: [{
        gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
      }],
      yAxes: [{
        gridLines: {
            color: "rgba(0, 0, 0, 0)",
        }
      }]
    },
};
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        backgroundColor: "red",
        datasets: [
            {
              label: "",
              backgroundColor: "steelblue",
              data: [20, 14, 12, 18, 13,21,12]
            }
        ]
      }
    };
  }
  render() {
    var self = this;

    return (
      <div className="row">
        <h1 className="col-xs-12 text-center">
          USD/EUR Exchange Rates from Jan 07 2017
        </h1>
        <div className="col-md-4 form-inline text-right pull-right">
          <FormGroup controlId="currencyControls">
            <label className="margin-right-5">Choose rates</label>
            <CurrencyDropdown/>
            <span> / </span>
            <CurrencyDropdown/>
          </FormGroup>
        </div>
        <div className="col-xs-12">
          <Bar data={this.state.data}
            height={250}
            fullWidth
            options={options} />
        </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
  }
}
export default connect(mapStateToProps, {

})(HomePage)
