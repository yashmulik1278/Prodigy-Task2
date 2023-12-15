const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
let isRunning = false;
let intervalIds = [];

startBtn.addEventListener('click', function() {
  if (!isRunning) {
    startBtn.textContent = 'Stop';
    isRunning = true;
    intervalIds.push(setInterval(changeTexts0, 1000));
    intervalIds.push(setInterval(changeTexts1, 10000));
    intervalIds.push(setInterval(changeTextm0, 60000));
    intervalIds.push(setInterval(changeTextm1, 600000));
    intervalIds.push(setInterval(changeTexthr0, 6000000));
    intervalIds.push(setInterval(changeTexthr1, 60000000));
  } else {
    startBtn.textContent = 'Start';
    isRunning = false;
    intervalIds.forEach(intervalId => clearInterval(intervalId));
    intervalIds = [];
  }
});

resetBtn.addEventListener('click', function() {
  clearInterval(intervalIds);
  intervalIds = [];
  isRunning = false;
  startBtn.textContent = 'Start';
  document.querySelectorAll('span[id^="hr"], span[id^="m"], span[id^="s"]').forEach(span => span.textContent = '0');

});

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const m0 = document.getElementById('m0');
const m1 = document.getElementById('m1');
const hr0 = document.getElementById('hr0');
const hr1 = document.getElementById('hr1');

function changeTexts0() {
  let currentNumber = parseInt(s0.textContent);
  currentNumber = (currentNumber + 1) % 10;
  s0.textContent = currentNumber;
}

function changeTexts1() {
  let currentNumber = parseInt(s1.textContent);
  currentNumber = (currentNumber + 1) % 6;
  s1.textContent = currentNumber;
}

function changeTextm0() {
  let currentNumber = parseInt(m0.textContent);
  currentNumber = (currentNumber + 1) % 10;
  m0.textContent = currentNumber;
}

function changeTextm1() {
  let currentNumber = parseInt(m1.textContent);
  currentNumber = (currentNumber + 1) % 6;
  m1.textContent = currentNumber;
}

function changeTexthr0() {
  let currentNumber = parseInt(hr0.textContent);
  currentNumber = (currentNumber + 1) % 10;
  hr0.textContent = currentNumber;
}

function changeTexthr1() {
  let currentNumber = parseInt(hr1.textContent);
  currentNumber = (currentNumber + 1) % 6;
  hr1.textContent = currentNumber;
}
