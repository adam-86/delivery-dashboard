'use strict';

var circles = document.querySelectorAll('circle[percent]');

circles.forEach(applyPercentageToCircle);

var purple = window.document.getElementById('purple-percentage');
var blue = window.document.getElementById('blue-percentage');
// var submit = window.document.getElementById('submit');
var purpleCircle = window.document.getElementById("purpleCircle");
var blueCircle = window.document.getElementById("blueCircle");


purple.oninput = function(){
  purpleCircle.setAttribute("percent", purple.value);
  applyPercentageToCircle(purpleCircle);
};

blue.oninput = function(){
  blueCircle.setAttribute("percent", blue.value);
  applyPercentageToCircle(blueCircle);
};

function applyPercentageToCircle(circle) {

  var radius = +circle.getAttribute('r');
  var percent = +circle.getAttribute('percent');

  var circumference = 2 * Math.PI * radius;
  circle.style.strokeDasharray = circumference;

  var dashOffset = circumference * (1 - percent / 100);
  circle.style.strokeDashoffset = dashOffset;
}
