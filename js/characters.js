'use strict';

(function() {
	var firstNames = [
	  'Иван',
	  'Хуан Себастьян',
	  'Мария',
	  'Кристоф',
	  'Виктор',
	  'Юлия',
	  'Люпита',
	  'Вашингтон'
	];
	var lastNames = [
	  'да Марья',
	  'Верон',
	  'Мирабелла',
	  'Вальц',
	  'Онопко',
	  'Топольницкая',
	  'Нионго',
	  'Ирвинг'
	];
	var coatColors = [
	  'rgb(101, 137, 164)',
	  'rgb(241, 43, 107)',
	  'rgb(146, 100, 161)',
	  'rgb(56, 159, 117)',
	  'rgb(215, 210, 55)',
	  'rgb(0, 0, 0)'
	];
	var eyesColors = [
	  'black',
	  'red',
	  'blue',
	  'yellow',
	  'green'
	];

	var fireballColors = [
	  '#ee4830',
	  '#30a8ee',
	  '#5ce6c0',
	  '#e848d5',
	  '#e6e848'
	];
	
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
	  } else {
    	userNameInput.setCustomValidity('');
  		}
	});

	var createCharacters = function(charactersQuantity) {
	  var characters = [];

	  for (var i = 0; i < charactersQuantity; i++) {
	    characters[i] = {
	      name: firstNames[window.util.getRandomNumber(0, firstNames.length - 1)] + ' ' + lastNames[window.util.getRandomNumber(0, lastNames.length - 1)],
	      coatColor: coatColors[window.util.getRandomNumber(0, coatColors.length - 1)],
	      eyesColor: eyesColors[window.util.getRandomNumber(0, eyesColors.length - 1)]
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

	var successHandler = function (wizards) {
    
		var characters = createCharacters(4);
		appendCharacters('.setup-similar-list', characters, 'similar-wizard-template');
	};


	wizardCoat.addEventListener('click', function () {
	  wizardCoat.style = 'fill: ' + coatColors[window.util.getRandomNumber(0, coatColors.length - 1)];
	});

	wizardEyes.addEventListener('click', function () {
	  wizardEyes.style = 'fill: ' + eyesColors[window.util.getRandomNumber(0, eyesColors.length - 1)];
	});

	wizardFireball.addEventListener('click', function () {
	  wizardFireball.style.background = fireballColors[window.util.getRandomNumber(0, fireballColors.length - 1)];
	});
	
	var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    
    node.textContent = errorMessage; 
    document.body.insertAdjacentElement('afterbegin', node);
  }
  
  window.backend.load(successHandler, errorHandler);
  
  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      setup.classList.add('hidden');
    }, errorHandler);
    evt.preventDefault();
  });
})();