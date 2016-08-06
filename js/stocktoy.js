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
	
	chart.push(40);
	chart.push(20);
	chart.push(8);
	chart.push(3);
	chart.draw();
	
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
	    this.data = [];
	  }
	
	  _createClass(LineGraph, [{
	    key: "push",
	    value: function push(point) {
	      this.data.push(point);
	      console.log("pushing " + point);
	      if (this.data.length > 20) {
	        this.data.shift();
	      }
	    }
	  }, {
	    key: "draw",
	    value: function draw() {
	      var _this = this;
	
	      if (this.data.length > 0) {
	        var start = this.data[0];
	        this.ctx.beginPath();
	        console.log("drawing");
	        this.ctx.moveTo(0, this.data[0]);
	        this.data.forEach(function (x, index) {
	          console.log(index);
	          console.log(_this.data[index]);
	          _this.ctx.lineTo(index * 10, _this.data[index]);
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