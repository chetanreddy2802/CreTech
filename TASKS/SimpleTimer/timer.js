let workTime = 25 * 60;
let breakTime = 5 * 60;
let currentTime = workTime;
let timerInterval;
let isRunning = false;
let isWorkMode = true;

const timerDisplay = document.getElementById('timer');
const modeDisplay = document.getElementById('mode');

function updateDisplay() {
  const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0');
  const seconds = (currentTime % 60).toString().padStart(2, '0');
  timerDisplay.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (isRunning) return;
  isRunning = true;
  timerInterval = setInterval(() => {
    if (currentTime > 0) {
      currentTime--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      isRunning = false;
      alert("Time's up!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  currentTime = isWorkMode ? workTime : breakTime;
  updateDisplay();
}

function toggleMode() {
  isWorkMode = !isWorkMode;
  modeDisplay.textContent = isWorkMode ? 'Work Mode' : 'Break Mode';
  resetTimer();
}

updateDisplay();
