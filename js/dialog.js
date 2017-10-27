'use strict';

(function () {	
	var setup = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = document.querySelector('.setup-close');
	var dialogHandle = setup.querySelector('.setup-title');

	var onPopupEscPress = function(evt) {
	    window.util.isEscEvent(evt, closePopup);
	};

	var openPopup = function() {
	  setup.classList.remove('hidden');
	  document.addEventListener('keydown', onPopupEscPress);
	};

	var closePopup = function() {
	  setup.classList.add('hidden');
	  document.removeEventListener('keydown', onPopupEscPress);
	  setup.style.top = '';
	  setup.style.left = '';
	};

	setupOpen.addEventListener( 'click', function() {
	  openPopup();
	});

	setupOpen.addEventListener( 'keydown', function(evt) {
	  window.util.isEscEvent(evt, openPopup);
	});

	setupClose.addEventListener( 'click', function() {
	  closePopup();
	});

	setupClose.addEventListener( 'keydown', function(evt) {
	  iwindow.util.isEscEvent(evt, closePopup);
	});

	dialogHandle.addEventListener( 'mousedown', function(evt) {
		evt.preventDefault();
		var startCoords = {
			x: evt.clientX,
			y: evt.clientY
		};

		var onMouseMove = function (moveEvt) {
		    moveEvt.preventDefault();

		    var shift = {
		      x: startCoords.x - moveEvt.clientX,
		      y: startCoords.y - moveEvt.clientY
		    };

		    startCoords = {
		      x: moveEvt.clientX,
		      y: moveEvt.clientY
		    };

		    setup.style.top = (setup.offsetTop - shift.y) + 'px';
		    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  
	    };
	    var onMouseUp = function (upEvt) {
    		upEvt.preventDefault();

    		document.removeEventListener('mousemove', onMouseMove);
    		document.removeEventListener('mouseup', onMouseUp);

   		};

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);
<<<<<<< HEAD

	});

	
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
=======

	});

	
>>>>>>> bd5b8d50038b5c791c69be91a0652d675048da00

})();