function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

function createBoxes(amount) {
  boxes.innerHTML = '';

  const elements = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  boxes.append(...elements);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
createButton.addEventListener('click', () => {
  const amount = Number(input.value.trim());
  if (amount < 1 || amount > 100 || isNaN(amount)) {
    alert('Please enter a number between 1 and 100.');
    return;
  }
  createBoxes(amount);
  input.value = '';
});

destroyButton.addEventListener('click', destroyBoxes);