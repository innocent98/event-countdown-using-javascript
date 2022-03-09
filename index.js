const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const occasionTitle = document.getElementById("occasionTitle");
const title = document.getElementById("title");
const date = document.getElementById("date");
const submit = document.getElementById("submit");

let newYear = "1 jan 2023";

submit.addEventListener("click", (e) => {
  e.preventDefault()
  occasionTitle.innerHTML = `Your Next ${title.value} is in`;
  newYear = date.value;
  console.log(date.value)
});

function countDown() {
  const newYearDate = new Date(newYear);
  const currentDate = new Date();

  const totalSeconds = (newYearDate - currentDate) / 1000;

  days.innerHTML = Math.floor(totalSeconds / 3600 / 24);
  hours.innerHTML = timeFormat(Math.floor(totalSeconds / 3600) % 24);
  mins.innerHTML = timeFormat(Math.floor(totalSeconds / 60) % 60);
  secs.innerHTML = timeFormat(Math.floor(totalSeconds) % 60);
}

function timeFormat(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);
