'use strict';

(function () {	
	var setup = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = document.querySelector('.setup-close');
	var dialogHandle = setup.querySelector('.setup-title');
	var artifactsElement = document.querySelector('.setup-artifacts');
	var shopElement = document.querySelector('.setup-artifacts-shop');

	var onPopupEscPress = function(evt) {
	  if (evt.keyCode === ESC_KEYCODE) {
	    closePopup();
	  }
	};

	var openPopup = function() {
	  setup.classList.remove('hidden');
	  document.addEventListener('keydown', onPopupEscPress);
	};

	var closePopup = function() {
	  setup.classList.add('hidden');
	  document.removeEventListener('keydown', onPopupEscPress);
	};

	setupOpen.addEventListener( 'click', function() {
	  openPopup();
	});

	setupOpen.addEventListener( 'keydown', function(evt) {
	  if (evt.keyCode === ENTER_KEYCODE) {
	    openPopup();
	  }
	});

	setupClose.addEventListener( 'click', function() {
	  closePopup();
	});

	setupClose.addEventListener( 'keydown', function(evt) {
	  if (evt.keyCode === ENTER_KEYCODE) {
	    closePopup();
	  }
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
	});

	
	var draggedItem = null;

	shopElement.addEventListener('dragstart', function (evt) {
 		if (evt.target.tagName.toLowerCase() === 'img') {
    		draggedItem = evt.target;
    		evt.dataTransfer.setData('text/plain', evt.target.alt);
  		}
	});

	artifactsElement.addEventListener('dragover', function (evt) {
		evt.preventDefault();
		return false;
	});

	artifactsElement.addEventListener('drop', function (evt) {
		  evt.target.style.backgroundColor = '';
		  evt.target.appendChild(draggedItem);
		  evt.preventDefault();
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