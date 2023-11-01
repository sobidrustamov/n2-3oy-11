let nowTime = () => {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let hours = document.querySelector(".hours");
  let minut = document.querySelector(".minut");
  let secund = document.querySelector(".secund");
  let am_pm = document.querySelector("#am_pm");

  minut.innerHTML = minutes;
  secund.innerHTML = seconds;

  if (hour > 12) {
    am_pm.innerHTML = "PM";
    hours.innerHTML = hour - 12;
  } else {
    hours.innerHTML = hour;
  }
};
setInterval(nowTime, 1000);
