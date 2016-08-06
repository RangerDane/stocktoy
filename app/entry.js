var LineGraph = require('./line_graph.js');

var ctx = document.getElementById("prices").getContext("2d");

var buyButton = document.getElementById("buy");
var sellButton = document.getElementById("sell");

buyButton.onclick = alert.bind(null,"buy!");
sellButton.onclick = alert.bind(null,"sell!");

var chart = new LineGraph( ctx );

chart.push(40);
chart.push(20);
chart.push(8);
chart.push(3);
chart.draw();

// alert("HI");
