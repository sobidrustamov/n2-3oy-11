let redd = document.querySelector("#circle1");
let yelloww = document.querySelector("#circle2");
let greenn = document.querySelector("#circle3");

function redLight() {
  redd.style.backgroundColor = "red";
  greenn.style.backgroundColor = "#333";
  yelloww.style.backgroundColor = "#333";
}

function yellowLight() {
  yelloww.style.backgroundColor = "yellow";
  greenn.style.backgroundColor = "#333";
  redd.style.backgroundColor = "#333";
}

function greenLight() {
  greenn.style.backgroundColor = "lime";
  redd.style.backgroundColor = "#333";
  yelloww.style.backgroundColor = "#333";
}

function tl() {
  redLight();

  setTimeout(() => {
    yellowLight();

    setTimeout(() => {
      greenLight();

      setTimeout(yellowLight, 5_000);
    }, 2_000);
  }, 5_000);
}

tl();
setInterval(tl, 14_000);
