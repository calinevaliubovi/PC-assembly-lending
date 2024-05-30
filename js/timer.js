const timerHours = document.querySelector(".timer__hours");
const timerMinutes = document.querySelector(".timer__minutes");
const timerSeconds = document.querySelector(".timer__seconds");

const upDateTimer = () => {
  const date = new Date();
  const dateDeadLine = new Date("31 may 2024").getTime();
  const timeUpToDeadline = (dateDeadLine - date) / 1000;

  const hours = Math.floor(timeUpToDeadline / 60 / 60);
  const minutes = Math.floor((timeUpToDeadline / 60) % 60);
  const seconds = Math.floor(timeUpToDeadline % 60);

  const fHours = hours > 10 ? hours : "0" + hours;
  const fMinutes = minutes > 10 ? minutes : "0" + minutes;
  const fSeconds = seconds > 10 ? seconds : "0" + seconds;

  timerHours.textContent = fHours;
  timerMinutes.textContent = fMinutes;
  timerSeconds.textContent = fSeconds;
};

const date = new Date().getTime();

// upDateTimer();
setInterval(upDateTimer, 500);
