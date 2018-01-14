var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandomName(names, surNames) {
    n1 = Math.floor(Math.random() * names.length);
    n2 = Math.floor(Math.random() * surNames.length);
    return names[n1] + ' ' + surNames[n2];      
};   

function getRandomCoat(coatColor) {
  var c = Math.floor(Math.random() * coatColor.length);
  return  coatColor[c];
};

function getRandomEyes(eyesColor) {
  var e = Math.floor(Math.random() * eyesColor.length);
  return eyesColor[e];
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

var wizards = [
  {
    name: getRandomName(names, surNames),
    coatColor: getRandomCoat(coatColor),
    eyesColor: getRandomEyes(eyesColor)
  },
  {
    name: getRandomName(names, surNames),
    coatColor: getRandomCoat(coatColor),
    eyesColor: getRandomEyes(eyesColor)
  },
  {
    name: getRandomName(names, surNames),
    coatColor: getRandomCoat(coatColor),
    eyesColor: getRandomEyes(eyesColor)
  },
  {
    name: getRandomName(names, surNames),
    coatColor: getRandomCoat(coatColor),
    eyesColor: getRandomEyes(eyesColor)
  }
];

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');