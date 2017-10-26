'use strict';

(function() {
	var setup = document.querySelector('.setup');
	var userNameInput  = setup.querySelector('.setup-user-name');
	var setupWizardForm = setup.querySelector('.setup-wizard-form');
	var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
	var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
	var wizardFireball = document.querySelector('.setup-fireball-wrap');
	
	document.querySelector('.setup-similar').classList.remove('hidden');

	userNameInput.addEventListener('invalid', function (evt) {
	    if (userNameInput.validity.tooShort) {
	    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
	  } else if (userNameInput.validity.tooLong) {
	    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
	  } else if (userNameInput.validity.valueMissing) {
	    userNameInput.setCustomValidity('Обязательное поле');
	  }
	});

	var createCharacters = function(charactersQuantity) {
	  var characters = [];

	  for (var i = 0; i < charactersQuantity; i++) {
	    characters[i] = {
	      name: firstNames[getRandomNumber(0, firstNames.length - 1)] + ' ' + lastNames[getRandomNumber(0, lastNames.length - 1)],
	      coatColor: coatColors[getRandomNumber(0, coatColors.length - 1)],
	      eyesColor: eyesColors[getRandomNumber(0, eyesColors.length - 1)]
	    };
	  }
	  return characters;
	}

	var appendCharacters = function (container, characters, containerTemplateId) {
	  var template = document.getElementById(containerTemplateId).content;
	  var div = document.querySelector(container);
	  for (var i = 0; i < characters.length; i++) {
	    var element = template.cloneNode(true);
	    element.querySelector('.setup-similar-label').textContent = characters[i].name;
	    element.querySelector('.wizard-coat').style.fill = characters[i].coatColor;
	    element.querySelector('.wizard-eyes').style.fill = characters[i].eyesColor;
	    div.appendChild(element);
	  }
	};

	var characters = createCharacters(4);
	appendCharacters('.setup-similar-list', characters, 'similar-wizard-template');

	wizardCoat.addEventListener('click', function () {
	  wizardCoat.style = 'fill: ' + coatColors[getRandomNumber(0, coatColors.length - 1)];
	});

	wizardEyes.addEventListener('click', function () {
	  wizardEyes.style = 'fill: ' + eyesColors[getRandomNumber(0, eyesColors.length - 1)];
	});

	wizardFireball.addEventListener('click', function () {
	  wizardFireball.style.background = fireballColors[getRandomNumber(0, fireballColors.length - 1)];
	});

})();