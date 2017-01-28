import React, { Component } from 'react';
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

export default class Chart extends Component {
  constructor(props) {
    super();
  }

  data() {
    return {
      labels: this.props.labels,
      datasets: [
          {
            label: "",
            backgroundColor: "steelblue",
            data: this.props.data
          }
      ]
    }
  }
  render() {
    return (
      <Bar data={this.data()}
        height={250}
        fullWidth
        options={options} />
    )
  }
}
