import React, { Component } from 'react';

export default class Analyser extends Component {
  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    const { frequencyData } = this.props;
    let canvas = this.refs.canvas;
    let context = canvas.getContext('2d');
    let { width, height } = canvas;
    let barWidth = 2;
    let barSpacing = 1;

    context.clearRect(0, 0, width, height);

    let barCount = Math.round(width / (barWidth + barSpacing));
    let loopStep = Math.floor(frequencyData.length / barCount);

    let barHeight;
    for (let i = 0; i < barCount; i++) {
      barHeight = frequencyData[i * loopStep] * 0.3;

      let grd = context.createLinearGradient(width / 2, 0, width / 2, height);
      grd.addColorStop(0.33, 'rgba(255,140,205,1)');
      grd.addColorStop(0.66, 'rgba(145,140,255,1)');
      grd.addColorStop(1, 'rgba(165,250,255,1)');  
      context.fillStyle = grd;
      context.fillRect(
        ((barWidth + barSpacing) * i) + (barSpacing / 2),
        height,
        barWidth - barSpacing,
        -barHeight
      );
    }
  }

  render() {
    return (
      <canvas 
        ref="canvas"
        className={"analyser-canvas"}
        width={1038}
        height={90}
      />
    );
  }
}
