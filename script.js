const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function appendToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = '오류';
  }
}

function clearDisplay() {
  display.value = '';
}

function toggleSign() {
  if (display.value) {
    display.value = String(-1 * parseFloat(display.value));
  }
}

function percent() {
  if (display.value) {
    display.value = String(parseFloat(display.value) / 100);
  }
}

buttons.forEach(button => {
  const value = button.textContent;

  button.addEventListener('click', () => {
    if (value === 'AC') {
      clearDisplay();
    } else if (value === '±') {
      toggleSign();
    } else if (value === '%') {
      percent();
    } else if (value === '=') {
      calculate();
    } else {
      appendToDisplay(value);
    }
  });
});

document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.';
  if (validKeys.includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});