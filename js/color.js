function color() {
  let color = "#" + Math.random().toString(16).slice(2, 8);
  console.log(color);
  let body = document.querySelector("body");
  body.innerHTML = color;
  body.style.background = color;
}
setInterval(color, 2000);
