'use strict';

(function () {	
	var artifactsElement = document.querySelector('.setup-artifacts');
	var shopElement = document.querySelector('.setup-artifacts-shop');

	var draggedItem = null;

	shopElement.addEventListener('dragstart', function (evt) {
 		if (evt.target.tagName.toLowerCase() === 'img') {
    		draggedItem = evt.target.cloneNode(true);
    		evt.dataTransfer.setData('text/plain', evt.target.alt);
  		}
  		artifactsElement.style.outline = '2px dashed red';
	});

	artifactsElement.addEventListener('dragover', function (evt) {
		if (evt.target.draggable) {
			evt.target.style.backgroundColor = 'red';
		}
		evt.preventDefault();
		return false;
	});

	artifactsElement.addEventListener('drop', function (evt) {
		  evt.target.style.backgroundColor = '';
		  evt.target.appendChild(draggedItem);
		  evt.preventDefault();
		  artifactsElement.style.outline = '';
	});

	artifactsElement.addEventListener('dragenter', function (evt) {
	  evt.target.style.backgroundColor = 'yellow';
	  evt.preventDefault();
	});

	artifactsElement.addEventListener('dragleave', function (evt) {
	  evt.target.style.backgroundColor = '';
	  evt.preventDefault();
	});
})();