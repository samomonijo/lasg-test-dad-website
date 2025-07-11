let time = document.querySelector('.js-timer');

time.innerHTML = localStorage.getItem('time') || `
  <span class="js-min-time">00</span>:
  <span class="js-sec-time">05</span>
`;

const minutesElement = document.querySelector('.js-min-time');
const secondsElement = document.querySelector('.js-sec-time');

let timerIntervalId;
let minutes = Number(minutesElement.innerHTML);
let seconds = Number(secondsElement.innerHTML);

timerIntervalId = setInterval(() => {
  if (minutes === 0 && seconds === 0) {
    minutes = 45;
  }

  if (seconds > 0) {
    seconds--;

    if (seconds >= 10) {
      secondsElement.innerHTML = seconds;
    }
    else {
      secondsElement.innerHTML = `0${seconds}`;
    }
  }
  else {
    seconds = 59;
    secondsElement.innerHTML = seconds;

    if (minutes > 0) {
      minutes--;

      if (minutes >= 10) {
        minutesElement.innerHTML = minutes;
      }
      else {
        minutesElement.innerHTML = `0${minutes}`;
      }
    }
    else {
      minutes = 59;
      minutesElement.innerHTML = minutes;
    }
  }

  localStorage.setItem('time', time.innerHTML);

  if (minutes === 0 && seconds === 0) {
    submitTestFunction();
    clearInterval(timerIntervalId);
  }
}, 1000);