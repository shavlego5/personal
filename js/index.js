let preLoader = document.getElementById("pre-loader");
let selfie = document.getElementById("selfie");

window.addEventListener("load", () => {
  preLoader.style.opacity = "0";
  preLoader.style.top = "-100vh";
});

function opacity(event) {
  let x = event.clientX;
  let screenWidth = window.innerWidth;
  let opacity = 1.1 - x / screenWidth;
  selfie.style.opacity = opacity;
}

let modal = document.getElementById("modal");
let modalCounter = "closed";

function toggleModal() {
  if (modalCounter === "closed") {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "inherit";
    modalCounter = "opened";
  } else {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    modalCounter = "closed";
  }
}

let dob = new Date("04/05/1991");
//calculate month difference from current date in time
let month_diff = Date.now() - dob.getTime();

//convert the calculated difference in date format
let age_dt = new Date(month_diff);

//extract year from date
let year = age_dt.getUTCFullYear();

//now calculate the age of the user
let age = Math.abs(year - 1970);

//display the calculated age
document.getElementById("age").innerHTML = age;

let speed = 10;
//html

let progressHtml = document.getElementById("html");
let valueHtml = document.querySelector("#html-progress span");

let progHtml = 0;
let progressEndHtml = 90;

//css

let progressCss = document.getElementById("css");
let valueCss = document.querySelector("#css-progress span");

let progCss = 0;
let progressEndCss = 90;

//scss

let progressScss = document.getElementById("scss");
let valueScss = document.querySelector("#scss-progress span");

let progScss = 0;
let progressEndScss = 50;

//javascript

let progressJs = document.getElementById("js");
let valueJs = document.querySelector("#js-progress span");

let progJs = 0;
let progressEndJs = 70;

//React.js

let progressReact = document.getElementById("react");
let valueReact = document.querySelector("#react-progress span");

let progReact = 0;
let progressEndReact = 50;

//jQuery

let progressJQuery = document.getElementById("jQuery");
let valueJQuery = document.querySelector("#jQuery-progress span");

let progJQuery = 0;
let progressEndJQuery = 50;

//bootstrap

let progressBootstrap = document.getElementById("bootstrap");
let valueBootstrap = document.querySelector("#bootstrap-progress span");

let progBootstrap = 0;
let progressEndBootstrap = 80;

//svg

let progressSVG = document.getElementById("svg");
let valueSVG = document.querySelector("#svg-progress span");

let progSVG = 0;
let progressEndSVG = 50;

window.addEventListener("scroll", () => {
  // html

  let rectHtml = progressHtml.getBoundingClientRect();

  if (rectHtml.bottom < window.innerHeight) {
    progressHtml.style.opacity = "1";
    if (progHtml == 0) {
      let html = setInterval(() => {
        progHtml++;
        valueHtml.innerHTML = `${progHtml}%`;
        progressHtml.style.background = `conic-gradient(
        #FFB401 ${progHtml * 3.6}deg,
        #222222 ${progHtml * 3.6}deg
      )`;
        if (progHtml >= progressEndHtml) {
          clearInterval(html);
        }
      }, speed);
    }
  } else {
    progHtml = 0;
    progressHtml.style.opacity = "0";
  }

  // css

  let rectCss = progressCss.getBoundingClientRect();

  if (rectCss.bottom < window.innerHeight) {
    progressCss.style.opacity = "1";
    if (progCss == 0) {
      let css = setInterval(() => {
        progCss++;
        valueCss.innerHTML = `${progCss}%`;
        progressCss.style.background = `conic-gradient(
        #FFB401 ${progCss * 3.6}deg,
        #222222 ${progCss * 3.6}deg
      )`;
        if (progCss >= progressEndCss) {
          clearInterval(css);
        }
      }, speed);
    }
  } else {
    progCss = 0;
    progressCss.style.opacity = "0";
  }

  // scss

  let rectScss = progressScss.getBoundingClientRect();

  if (rectScss.bottom < window.innerHeight) {
    progressScss.style.opacity = "1";
    if (progScss == 0) {
      let scss = setInterval(() => {
        progScss++;
        valueScss.innerHTML = `${progScss}%`;
        progressScss.style.background = `conic-gradient(
        #FFB401 ${progScss * 3.6}deg,
        #222222 ${progScss * 3.6}deg
      )`;
        if (progScss >= progressEndScss) {
          clearInterval(scss);
        }
      }, speed);
    }
  } else {
    progScss = 0;
    progressScss.style.opacity = "0";
  }

  // javascript

  let rectJs = progressJs.getBoundingClientRect();

  if (rectJs.bottom < window.innerHeight) {
    progressJs.style.opacity = "1";
    if (progJs == 0) {
      let js = setInterval(() => {
        progJs++;
        valueJs.innerHTML = `${progJs}%`;
        progressJs.style.background = `conic-gradient(
        #FFB401 ${progJs * 3.6}deg,
        #222222 ${progJs * 3.6}deg
      )`;
        if (progJs >= progressEndJs) {
          clearInterval(js);
        }
      }, speed);
    }
  } else {
    progJs = 0;
    progressJs.style.opacity = "0";
  }

  // React.js

  let rectReact = progressReact.getBoundingClientRect();

  if (rectReact.bottom < window.innerHeight) {
    progressReact.style.opacity = "1";
    if (progReact == 0) {
      let react = setInterval(() => {
        progReact++;
        valueReact.innerHTML = `${progReact}%`;
        progressReact.style.background = `conic-gradient(
        #FFB401 ${progReact * 3.6}deg,
        #222222 ${progReact * 3.6}deg
      )`;
        if (progReact >= progressEndReact) {
          clearInterval(react);
        }
      }, speed);
    }
  } else {
    progReact = 0;
    progressReact.style.opacity = "0";
  }

  // jQuery

  let rectJQuery = progressJQuery.getBoundingClientRect();

  if (rectJQuery.bottom < window.innerHeight) {
    progressJQuery.style.opacity = "1";
    if (progJQuery == 0) {
      let jQuery = setInterval(() => {
        progJQuery++;
        valueJQuery.innerHTML = `${progJQuery}%`;
        progressJQuery.style.background = `conic-gradient(
        #FFB401 ${progJQuery * 3.6}deg,
        #222222 ${progJQuery * 3.6}deg
      )`;
        if (progJQuery >= progressEndJQuery) {
          clearInterval(jQuery);
        }
      }, speed);
    }
  } else {
    progJQuery = 0;
    progressJQuery.style.opacity = "0";
  }

  // Bootstrap

  let rectBootstrap = progressBootstrap.getBoundingClientRect();

  if (rectBootstrap.bottom < window.innerHeight) {
    progressBootstrap.style.opacity = "1";
    if (progBootstrap == 0) {
      let bootstrap = setInterval(() => {
        progBootstrap++;
        valueBootstrap.innerHTML = `${progBootstrap}%`;
        progressBootstrap.style.background = `conic-gradient(
        #FFB401 ${progBootstrap * 3.6}deg,
        #222222 ${progBootstrap * 3.6}deg
      )`;
        if (progBootstrap >= progressEndBootstrap) {
          clearInterval(bootstrap);
        }
      }, speed);
    }
  } else {
    progBootstrap = 0;
    progressBootstrap.style.opacity = "0";
  }

  // SVG

  let rectSVG = progressSVG.getBoundingClientRect();

  if (rectSVG.bottom < window.innerHeight) {
    progressSVG.style.opacity = "1";
    if (progSVG == 0) {
      let svg = setInterval(() => {
        progSVG++;
        valueSVG.innerHTML = `${progSVG}%`;
        progressSVG.style.background = `conic-gradient(
        #FFB401 ${progSVG * 3.6}deg,
        #222222 ${progSVG * 3.6}deg
      )`;
        if (progSVG >= progressEndSVG) {
          clearInterval(svg);
        }
      }, speed);
    }
  } else {
    progSVG = 0;
    progressSVG.style.opacity = "0";
  }
});

function full(event) {
  event.target.style.clipPath =
    "polygon(30% 0%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  }, 50);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  }, 100);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
  }, 150);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 90%, 10% 70%, 10% 30%)";
  }, 200);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 10% 70%, 10% 30%)";
  }, 250);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 10% 30%)";
  }, 300);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
  }, 350);
}

function half(event) {
  event.currentTarget.children[0].children[0].style.marginTop = "-200px";
  event.currentTarget.children[0].children[1].style.marginLeft = "-200%";
  event.currentTarget.children[0].children[2].style.marginBottom = "-200px";
  event.currentTarget.children[0].style.background = "rgba(40, 116, 166, 0)";
  setTimeout(() => {
    event.target.style.borderRadius = "0px";
    event.target.parentNode.style.borderRadius = "0px";
  }, 200);
  setTimeout(() => {
    event.target.style.clipPath =
      "polygon(30% 10%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }, 50);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }, 100);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";
    }, 150);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 100%, 0% 70%, 0% 30%)";
    }, 200);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 0% 70%, 0% 30%)";
    }, 250);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 0% 30%)";
    }, 300);
    setTimeout(() => {
      event.target.style.clipPath =
        "polygon(30% 10%, 70% 10%, 90% 30%, 90% 70%, 70% 90%, 30% 90%, 10% 70%, 10% 30%)";
    }, 350);
  }, 450);
}

function expand(event) {
  event.currentTarget.style.clipPath =
    "polygon(0% 0%, 100% 0%, 100% 30%, 100% 100%, 70% 100%, 0% 100%, 0% 70%, 0% 30%)";
  event.currentTarget.children[0].style.background = "rgba(255, 180, 1, .8)";
  for (let i = 0; i < event.currentTarget.children[0].children.length; i++) {
    event.currentTarget.children[0].children[i].style.margin = "0";
  }
  setTimeout(() => {
    event.target.style.borderRadius = "30px";
    event.target.parentNode.style.borderRadius = "30px";
  }, 300);
}

function move(event) {
  let rect = event.target.getBoundingClientRect();
  let width = event.target.offsetWidth;
  let height = event.target.offsetHeight;
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;

  //event.currentTarget.style.boxShadow = `${x}px ${y}px 10px 0px rgba(0,0,0,1)`;
}

function contact(event) {
  let img = event.target.parentNode.previousElementSibling;
  let src = img.getAttribute("src");
  img.setAttribute("src", src.replace(".png", "Yellow.png"));
}
function contact0(event) {
  let img = event.target.parentNode.previousElementSibling;
  let src = img.getAttribute("src");
  img.setAttribute("src", src.replace("Yellow.png", ".png"));
}

function facebookIn(event) {
  event.target.children[0].style.transform = "translateZ(350px)";
  setTimeout(() => {
    event.target.children[0].style.transform = "translateZ(100px)";
  }, 500);
}

function facebookOut(event) {
  event.target.children[0].style.transform = "translateZ(0px)";
}

let menuBtn = document.getElementById("menu-btn");

function menuEnter(event) {
  menuBtn.style.transition = "0s";
  let menuRect = event.target.getBoundingClientRect();
  let x = event.clientX - menuRect.left;
  let y = event.clientY - menuRect.top;

  menuBtn.style.top = y - 15 + "px";
  menuBtn.style.left = x - 20 + "px";
}

function menuLeave(event) {
  if (window.innerWidth > 1024) {
    menuBtn.style.transition = ".7s";
    menuBtn.style.left = "130px";
    menuBtn.style.top = "30px";
  } else {
    menuBtn.style.transition = ".7s";
    menuBtn.style.left = "0px";
    menuBtn.style.top = "30px";
  }
}

let menuContainer = document.getElementById("menu-container");

function openMenu() {
  menuContainer.style.opacity = "1";
  menuContainer.style.top = "0";
}

function closeMenu() {
  menuContainer.style.opacity = "0";
  menuContainer.style.top = "-100vh";
  menuCounter = "closed";
}

let menuCounter = "closed";

function toggleMenu() {
  if (menuCounter === "closed") {
    openMenu();
    menuCounter = "opened";
  } else {
    closeMenu();
    menuCounter = "closed";
  }
}

let myLink = document.getElementById("my-link");
let leftTop = document.getElementById("left-top");
let leftBottom = document.getElementById("left-bottom");
let rightTop = document.getElementById("right-top");
let rightBottom = document.getElementById("right-bottom");

function footer(event) {
  myLink.style.transition = "0s";
  let myLinkRect = event.target.getBoundingClientRect();
  let x = event.clientX - myLinkRect.left;
  let y = event.clientY - myLinkRect.top;

  myLink.style.left = x - 115 + "px";
  myLink.style.top = y - 20 + "px";

  leftTop.setAttribute("x2", x - 114);
  leftTop.setAttribute("y2", y - 19);

  leftBottom.setAttribute("x2", x - 114);
  leftBottom.setAttribute("y2", y + 19);

  rightTop.setAttribute("x2", x + 114);
  rightTop.setAttribute("y2", y - 19);

  rightBottom.setAttribute("x2", x + 114);
  rightBottom.setAttribute("y2", y + 19);
}

function footerLeave() {
  myLink.style.transition = ".5s";

  myLink.style.left = "calc(50% - 115px)";
  myLink.style.top = "calc(50% - 20px)";

  leftTop.setAttribute("x2", "0");
  leftTop.setAttribute("y2", "0");

  leftBottom.setAttribute("x2", "0");
  leftBottom.setAttribute("y2", "100%");

  rightTop.setAttribute("x2", "100%");
  rightTop.setAttribute("y2", "0");

  rightBottom.setAttribute("x2", "100%");
  rightBottom.setAttribute("y2", "100%");
}
