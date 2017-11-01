'use strict';

(function () {
	var COLORS = [
	  'rgb(101, 137, 164)',
	  'rgb(241, 43, 107)',
	  'rgb(146, 100, 161)',
	  'rgb(56, 159, 117)',
	  'rgb(215, 210, 55)',
	  'rgb(0, 0, 0)'
	];

	var getRandomColor = function() {
	 	return COLORS[Math.floor(COLORS.length * Math.random())];
	};

	window.colorize = function (element, onColorChange) {
	    element.addEventListener('click', function() {
	    	var color = getRandomColor();
	    	onColorChange(color);
	    })
	};
})();