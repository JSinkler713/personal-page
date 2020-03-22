'use strict'

let waveImg = document.querySelector('.title')

waveImg.addEventListener("load", (event) => {
  waveImg.classList.title.styles.opacity = 0.5
})

const numSteps = 20.0;
let hobbyDiv
let boxElement;
let prevRatio = 0.0;
let decreasingColor = "rgba(177, 189, 192, ratio)";
let increasingColor = "rgba(75, 123, 133, ratio)";

// Set things up
window.addEventListener("load", (event) => {
  hobbyDiv = document.querySelector('#hobbies')

  createObserver();
}, false);

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(hobbyDiv);
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i=1.0; i<=numSteps; i++) {
    let ratio = i/numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}


//
function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}

// have images switch every few seconds for projects
let image1 = document.getElementById('project-image-1')

// different images src
const images1 = ['./swello-erd.png', './movie-reels.png']
let i = 0;

//image1.addEventListener('mouseover', function() {
setInterval(function() {
  let length = images1.length;
  image1.src = images1[(i % length)];
  i++;
  }, 5000)
//})
