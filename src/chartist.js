import React from 'react';
import Canvas from 'react-native-canvas';

export default class Chartist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.canvassRef = React.createRef();
  }

  componentWillUnmount() {
    let chart = this.state.chart;
    chart.destroy();
  }

  handleCanvas = canvas => {
    const Chart = require('chart.js');
    const ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {type: this.props.type, data: this.props.data, options: this.props.options || {}, plugins: this.props.plugins || {}});
    this.state.chart = chart;
  }

  render() {
    return (
      <Canvas
        ref={this.handleCanvas}
      />
    );
  }
}
