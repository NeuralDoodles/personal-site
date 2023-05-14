import * as d3 from 'd3';
import React from 'react';
import Button from '@mui/material/Button';

function cliffordOrbit(length, x0, y0, a, b, c, d) {
  let n = length;
  const { sin, cos } = Math;
  const value = new Float64Array([x0, y0]);
  return {
    length,
    next() {
      if (n === 0) return { done: true };
      n -= 1;
      const x = value[0];
      const y = value[1];
      value[0] = sin(a * y) + c * cos(a * x);
      value[1] = sin(b * x) + d * cos(b * y);
      return { value, done: false };
    },
  };
}

/* eslint-disable no-unused-vars */
const MakeAttractor = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.position = 'absolute';
  canvas.style.overflow = 'visible';
  ctx.canvas.width = 600;
  ctx.canvas.height = 600;
  document.body.appendChild(canvas);

  function drawAttractor(e) {
    let n = 50000;
    if (typeof e !== 'undefined') { n = e.target.value; }
    const myscale = d3.scaleLinear()
      .domain([-3, 3])
      .range([0, 600]);
    const myscalex = d3.scaleLinear()
      .domain([-5, 3])
      .range([0, 600]);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const params = {
      a: -1.7,
      b: -1.5,
      c: -1.6,
      d: -1.9,
      clr: 'steelblue',
      size: 0.5,
    };
    const it = cliffordOrbit(n, 0, 0, params.a, params.b, params.c, params.d);
    let result = it.next();
    while (!result.done) {
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.arc(myscalex(result.value[0]), myscale(result.value[1]), params.size, 0, 2 * Math.PI);
      ctx.fillStyle = params.clr;
      ctx.fill();
      result = it.next();
    }
  }

  drawAttractor();
  return (
    <>
      <input type="number" id="n" name="n" min={100000} max={8000000} defaultValue={50000} step={100000} onChange={drawAttractor} />
      <a href="./visuals">
        <Button variant="contained" color="primary">Go Back</Button>
      </a>
    </>
  );
};
/* eslint-enable no-unused-vars */

export default MakeAttractor;
