import React, { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';

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
    var data = {
      labels: this.props.labels,
      datasets: [
          {
            label: "",
            data: this.props.data
          }
      ]
    };
    if (this.props.chart === "bar") {
      data.datasets[0].backgroundColor = "#003fa7";
    } else {
      data.datasets[0].backgroundColor = "transparent";
      data.datasets[0].borderColor = "#d44aab";
    }

    //  "#d44aab";
    return data;
  }
  render() {
    if (this.props.chart === "line") {
      return (<Line data={this.data()}
        height={250}
        fullWidth
        options={options} />)
    } else {
      return (<Bar data={this.data()}
        height={250}
        fullWidth
        options={options} />)
    }

  }
}
