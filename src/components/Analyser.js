import React, { Component } from 'react';

export default class Analyser extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    let canvas, context, width, height, barWidth, barHeight, barSpacing, barCount, loopStep, i;

    canvas = this.refs.canvas;
    context = canvas.getContext('2d');
    width = canvas.width;
    height = canvas.height;
    barWidth = 4;
    barSpacing = 1;

    context.clearRect(0, 0, width, height);
    barCount = Math.round(width / (barWidth + barSpacing));
    loopStep = Math.floor(this.props.analyserData.length / barCount);

    for (i = 0; i < barCount; i++) {
      barHeight = this.props.analyserData[i * loopStep];
      context.fillStyle = 'rgb(32, 194, 186)';
      context.fillRect(((barWidth + barSpacing) * i) + (barSpacing / 2), height, barWidth - barSpacing, -barHeight);
    }
  }

  render() {
    return (
      <canvas ref="canvas" className={"analyser-canvas"} width={642} height={300}/>
    );
  }
}
