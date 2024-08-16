//time
const labelMinutes = document.querySelector("#minutes");
const labelSeconds = document.querySelector("#seconds");
const labelMilliseconds = document.querySelector("#milliseconds");
//button
let startButton = document.querySelector("#startBtn");
let stopButton = document.querySelector("#stopBtn");
let pauseButton = document.querySelector("#pauseBtn");
let resetButton = document.querySelector("#resetBtn");
//variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
//start Button
const startBtn = () => {
  interval = setInterval(realTime, 10);
  startButton.disabled = true;
};
//Pause Button
const pauseBtn = () => {
  clearInterval(interval);
  pauseBtn.disabled = true;
};
//Reset Button
const resetBtn = () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayRealTime();
  startButton.disabled = false;
};

const realTime = () => {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayRealTime();
};
const displayRealTime = () => {
  labelMilliseconds.textContent = milliseconds.toString().padStart(2, "0");
  labelSeconds.textContent = seconds.toString().padStart(2, "0");
  labelMinutes.textContent = minutes.toString().padStart(2, "0");
};
