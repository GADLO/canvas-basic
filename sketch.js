const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048, 2048]
};

const sketch = () => {
  return ({ context, width, height }) => {


    context.fillStyle = 'orange';
    context.fillRect(0, 100, width, 100);
    context.fillRect(0, 300, width, 100);


    context.fillStyle = 'green';
    context.fillRect(100, 0, 100, height);
    context.fillRect(300, 0, 100, height);
  };
};



canvasSketch(sketch, settings);


