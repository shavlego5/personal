let loader = document.getElementById("loader");

for (let i = 0; i < 12; i++) {
  let div = document.createElement("div");
  loader.appendChild(div);
  let childrenDiv = document.querySelectorAll("#loader div");
  if (i > 0) {
    childrenDiv[i].style.transform = `rotate(${i * 36}deg)`;
  }
}

let span1 = document.querySelector("#loader span:nth-child(1)");

setInterval(() => {
  span1.style.width = "350px";
  span1.style.height = "350px";
  span1.style.top = "-25px";
  span1.style.left = "-25px";
}, 2000);

setInterval(() => {
  span1.style.width = "370px";
  span1.style.height = "370px";
  span1.style.top = "-35px";
  span1.style.left = "-35px";
}, 1000);

let span2 = document.querySelector("#loader span:nth-child(2)");

setInterval(() => {
  span2.style.width = "370px";
  span2.style.height = "370px";
  span2.style.top = "-35px";
  span2.style.left = "-35px";
}, 1000);

setInterval(() => {
  span2.style.width = "400px";
  span2.style.height = "400px";
  span2.style.top = "-50px";
  span2.style.left = "-50px";
}, 2000);