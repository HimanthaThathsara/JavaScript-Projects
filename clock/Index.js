const hour = document.getElementById("clock_hour"),
  minutes = document.getElementById("clock_minutes"),
  seconds = document.getElementById("clock_seconds");

const clock = () => {
  let date = new Date();

  let hh = date.getHours() * 30,
    mm = date.getMinutes() * 6,
    ss = date.getSeconds() * 6;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutes.style.transform = `rotateZ(${mm}deg)`;
  seconds.style.transform = `rotateZ(${ss}deg)`;
};

setInterval(clock, 1000);
const textHour = document.getElementById("text_hour"),
  textMinutes = document.getElementById("text_minutes"),
  textAmPm = document.getElementById("text_ampm"),
  dateDay = document.getElementById("date_day"),
  dateMonth = document.getElementById("date_month"),
  dateYear = document.getElementById("date_year");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes(),
    day = date.getDate(),
    month = date.getMonth(),
    year = date.getFullYear();

  if (hh >= 12) {
    hh = hh - 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  if (hh == 0) {
    hh = 12;
  }

  if (hh < 10) {
    hh = `0${hh}`;
  }

  textHour.innerHTML = `${hh}:`;

  if (mm < 10) {
    mm = `0${mm}`;
  }

  textMinutes.innerHTML = mm;

  textAmPm.innerHTML = ampm;

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]},`;
  dateYear.innerHTML = year;
};
setInterval(clockText, 1000);
