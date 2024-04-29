const mainBlur = document.getElementById("main");
const loadingPercent = document.getElementById("loadingPercent");
let ii = 1;
const start = setInterval(function () {
  mainBlur.style.filter = `blur(${10 - ii / 10}px)`;
  loadingPercent.style.opacity = 1 - ii / 100;
  loadingPercent.innerText = `${ii}%`;
  ii += 1;
  if (ii == 101) {
    clearInterval(start);
  }
}, 20);

// start();

// for (let i = 1; i < 1000; i++) {
//   setTimeout(function () {
//     mainBlur.style.filter = `blur(${10 - i / 10}px)`;

//   }, 5000);
// }

// setTimeout(function () {
//   clearInterval();
// }, 200);
