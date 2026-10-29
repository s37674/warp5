const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});

const button = document.getElementById('clickBtn');
const result = document.getElementById('result');

// Zmienna przed obsługą zdarzenia
let clickCount = 0;

function handleClick() {
  clickCount = clickCount + 1;
  result.textContent = 'Kliknięto: ' + clickCount + ' razy';
  console.log('clickCount =', clickCount);
}

button.addEventListener('click', handleClick);