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
    barWidth = 2;
    barSpacing = 1;

    context.clearRect(0, 0, width, height);
    barCount = Math.round(width / (barWidth + barSpacing));
    loopStep = Math.floor(this.props.analyserData.length / barCount);

    for (i = 0; i < barCount; i++) {
      barHeight = this.props.analyserData[i * loopStep] * 0.3;

      let grd = context.createLinearGradient(width / 2, 0, width / 2, height);
      grd.addColorStop(0.66, 'rgba(145,140,255,1)');
      grd.addColorStop(1, 'rgba(165,250,255,1)');  
      grd.addColorStop(0.33, 'rgba(255,140,205,1)');
      context.fillStyle = grd;
      context.fillRect(((barWidth + barSpacing) * i) + (barSpacing / 2), height, barWidth - barSpacing, -barHeight);
    }
  }

  render() {
    return (
      <canvas ref="canvas" className={"analyser-canvas"} width={1038} height={90}/>
    );
  }
}
