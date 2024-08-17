//Time
const labelMinutes = document.querySelector("#minutes");
const labelSeconds = document.querySelector("#seconds");
const labelMilliseconds = document.querySelector("#milliseconds");

//Button
let startButton = document.querySelector("#startBtn");
let stopButton = document.querySelector("#stopBtn");
let pauseButton = document.querySelector("#pauseBtn");
let resetButton = document.querySelector("#resetBtn");

//lapTime ul
const laplist = document.querySelector("#laplist");

//Variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

//start Button
const startBtn = () => {
  interval = setInterval(realTime, 10);
  startButton.disabled = true;
};

//Stop Button

const stopBtn = () => {
  clearInterval(interval);
  addLapList();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  displayRealTime();
  startButton.disabled = false;
};

//Pause Button
const pauseBtn = () => {
  clearInterval(interval);
  pauseBtn.disabled = true;
  startButton.disabled = false;
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
const addLapList = () => {
  const lapTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;

  const liItem = document.createElement("li");
  liItem.innerHTML = `<span>Lap ${
    laplist.childElementCount + 1
  }: </span>${lapTime}`;
  laplist.appendChild(liItem);
};
