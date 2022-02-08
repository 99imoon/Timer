//Variables
var time = 0;
var timerId = 0;
var timerOut = true;

//Elements in a variable
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const timer = document.querySelector("#time-display");

//use this function to start the timer
const initTimer = () => {
  timerOut = false;
  timerId = setInterval(() => {
    time++;
    timerCount();
  }, 1000);
};

//this function update the timer values
const timerCount = () => {
  const min = Math.floor(time / 60),
    sec = time % 60;
  if (sec < 10) {
    timer.innerHTML = `${min}:0${sec}`;
  } else {
    timer.innerHTML = `${min}:${sec}`;
  }
};

// stop and clear the timer
const StopTimer = () => {
  clearInterval(timerId);
};

// Start the timer
start.addEventListener("click", function () {
  if (timerOut) {
    initTimer();
  }
});

// stop the timer
reset.addEventListener("click", function () {
  StopTimer();
  timerOut = true;
  time = 0;
  timerCount();
});
