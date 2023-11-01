let nowTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let hours = document.querySelector(".hours");
  let minut = document.querySelector(".minut");
  let secund = document.querySelector(".secund");
  let am_pm = document.querySelector("#am_pm");
  if (minutes < 10) {
    minut.innerHTML = "0" + minutes;
  } else {
    minut.innerHTML = minutes;
  }

  if (seconds < 10) {
    secund.innerHTML = "0" + seconds;
  } else {
    secund.innerHTML = seconds;
  }

  if (hour > 12) {
    am_pm.innerHTML = "PM";
    hours.innerHTML = "0" + (hour - 12);
  } else if (hour < 10) {
    hours.innerHTML = "0" + hour;
  } else {
    hours.innerHTML = hour;
  }
};
setInterval(nowTime, 1000);
