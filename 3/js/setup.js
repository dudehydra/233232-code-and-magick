var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];


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
