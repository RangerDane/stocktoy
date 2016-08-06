var LineGraph = require('./line_graph.js');

var ctx = document.getElementById("prices").getContext("2d");

var buyButton = document.getElementById("buy");
var sellButton = document.getElementById("sell");

buyButton.onclick = alert.bind(null,"buy!");
sellButton.onclick = alert.bind(null,"sell!");

var chart = new LineGraph( ctx );

var x = 100;
var percentage = Math.random() - 0.5;

setInterval( () => {
  x += 10 * ( Math.random() - 0.50 );
  x = Math.max( x, 0 );
  chart.push( x );
}, 50);

// alert("HI");
