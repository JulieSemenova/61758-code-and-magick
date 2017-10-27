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

	});

	

})();