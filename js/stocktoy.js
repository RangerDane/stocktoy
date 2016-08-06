/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var LineGraph = __webpack_require__(148);
	
	var ctx = document.getElementById("prices").getContext("2d");
	
	var buyButton = document.getElementById("buy");
	var sellButton = document.getElementById("sell");
	
	buyButton.onclick = alert.bind(null, "buy!");
	sellButton.onclick = alert.bind(null, "sell!");
	
	var chart = new LineGraph(ctx);
	
	var x = 100;
	var percentage = Math.random() - 0.5;
	
	setInterval(function () {
	  x += 10 * (Math.random() - 0.50);
	  x = Math.max(x, 0);
	  chart.push(x);
	}, 50);
	
	// alert("HI");

/***/ },

/***/ 148:
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var LineGraph = function () {
	  function LineGraph(ctx) {
	    _classCallCheck(this, LineGraph);
	
	    this.ctx = ctx;
	    this.width = ctx.canvas.width;
	    this.height = ctx.canvas.height;
	    this.data = [0];
	    this.min = 0;
	    this.max = 1;
	    console.log(this.Yh);
	  }
	
	  _createClass(LineGraph, [{
	    key: "push",
	    value: function push(point) {
	      this.data.push(point);
	      if (this.data.length > this.width / 10) {
	        this.data.shift();
	      }
	      this.draw();
	    }
	  }, {
	    key: "calculateBounds",
	    value: function calculateBounds() {
	      var _this = this;
	
	      this.min = this.data[0];
	      this.max = 1;
	      this.data.forEach(function (x) {
	        if (x > _this.max) {
	          _this.max = x;
	        }
	        if (x < _this.min) {
	          _this.min = x;
	        }
	      });
	      this.min -= 5;
	      this.max += 5;
	    }
	  }, {
	    key: "mapY",
	    value: function mapY(y) {
	      var difference = Math.max(this.max - this.min, 1);
	      return (this.max - y) * this.height / difference;
	    }
	  }, {
	    key: "draw",
	    value: function draw() {
	      this.ctx.clearRect(0, 0, this.width, this.height);
	      this.calculateBounds();
	      this.drawRules();
	      this.drawLines();
	    }
	  }, {
	    key: "drawRules",
	    value: function drawRules() {
	      var rule = 0;
	      var y;
	      while (rule < this.max) {
	        if (rule > this.min) {
	          y = this.mapY(rule);
	          this.ctx.textAlign = "start";
	          this.ctx.font = "18pt Inconsolata";
	          this.ctx.fillText(rule, 0, y);
	          if (rule === 0) {
	            console.log(y);
	            this.ctx.lineWidth = 7;
	          } else {
	            this.ctx.lineWidth = 0.5;
	          }
	          this.ctx.beginPath();
	          this.ctx.moveTo(0, y);
	          this.ctx.lineTo(this.width, y);
	          this.ctx.stroke();
	        }
	        rule += 100;
	      }
	    }
	  }, {
	    key: "drawLines",
	    value: function drawLines() {
	      var _this2 = this;
	
	      if (this.data.length > 0) {
	        var x, y, difference;
	        this.ctx.beginPath();
	        this.ctx.lineWidth = 1;
	        this.data.forEach(function (price, index) {
	          difference = Math.max(_this2.max - _this2.min, 100);
	          x = index * 10;
	          y = _this2.mapY(price);
	          _this2.ctx.lineTo(index * 10, y);
	        });
	        this.ctx.stroke();
	      }
	    }
	  }]);
	
	  return LineGraph;
	}();
	
	module.exports = LineGraph;

/***/ }

/******/ });
//# sourceMappingURL=stocktoy.js.map