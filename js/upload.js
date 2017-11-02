'use strict';

(function () {
	var URL = 'https://1510.dump.academy/code-and-magik';

	window.upload = function (data, onSuccess) {
		var xhr = new XMLHttpRequest();
	    xhr.responseType = 'json';
	    
	    xhr.addEventListener('load', function () {
	      onSuccess(xhr.response);
	    });
	    
	    xhr.open('POST', URL);
    	xhr.send(data);
	};
})();