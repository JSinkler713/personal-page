'use strict'
// have images switch every few seconds for projects
let image1 = document.getElementById('project-image-1')

// different images src
const images1 = ['./swello-erd.png', './surfApi.png']
let i = 0;

setInterval(function() {
  let length = images1.length;
  image1.src = images1[(i % length)];
  i++;
  }, 5000)
