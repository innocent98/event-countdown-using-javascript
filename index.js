const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const occasionTitle = document.getElementById("occasionTitle");
const title = document.getElementById("title");
const date = document.getElementById("date");
const member = document.getElementById("member-form");

let newYear = "15 sept 2022";

member.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(member);
  const data = Object.fromEntries(formData);

  try {
    fetch("https://forezon-api.herokuapp.com/api/user/bootcamp-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => alert(data));
  } catch (error) {}
});

date.addEventListener("change", (e) => {
  e.preventDefault();
  occasionTitle.innerHTML = `Your Next ${title.value} is in`;
  newYear = date.value;
  title = title.value;
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
