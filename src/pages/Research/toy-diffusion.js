import React from 'react';

const WriteContent = () => {
  console.log('hello');
  return (
    <>
	<h1>Exploring the internals of a Toy Diffusion Model leaning to generate images of numbers</h1>
	Why am I doing this: I am curious to see whether the input random noise has any correlation to the final output image. It seems like it is hard to control or change the output of diffusion process once it has started. Why is that?
	<div id="references">
		<h4>References:</h4>
		<a href="https://www.kaggle.com/datasets/daavoo/3d-mnist">3D MNIST Dataset on Kaggle</a> <br />
		<a href="https://github.com/thunguyenphuoc/3DMNIST">3DMNIST GitHub Repository</a> <br />
		<a href="https://scholar.harvard.edu/binxuw/classes/machine-learning-scratch/materials/stable-diffusion-scratch">Stable Diffusion in Machine Learning - Harvard Scholar Page</a> <br />
		<a href="https://github.com/TeaPearce/Conditional_Diffusion_MNIST">Conditional Diffusion MNIST GitHub Repository</a> <br />
		<a href="https://github.com/cloneofsimo/minDiffusion">minDiffusion GitHub Repository</a> <br />
	</div>
    </>
  );
};

/* eslint-disable no-unused-vars */
const MakePage = () => {
	console.log('hello');
  return (
    <>
	<WriteContent />
    </>
  );
};

export default MakePage;
