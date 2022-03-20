"use strict";
gsap.registerPlugin(ScrollTrigger);
window.addEventListener("load", setup);

const burger = document.querySelector(".burger");
const links = document.querySelector(".nav_links");

// Add active class to nav:
// const currentLocation = location.href;
// let menuItem = document.querySelectorAll("a");
// const menuLength = menuItem.length;

function setup() {
  console.log("setup");

  const arrow = document.querySelector(".arrow_splash");

  arrow.addEventListener("mouseover", changeAnimationSpeed);
  arrow.addEventListener("mouseout", changeAnimationSpeedBack);

  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);

  burger.addEventListener("mouseout", done);

  const logo = document.querySelector(".logo");

  logo.addEventListener("click", () => {
    location.replace("index.html");
  });

  document.querySelector(".empty_button").addEventListener("click", removeOverflow);
  document.querySelector(".nav_button").addEventListener("click", removeOverflow);

  addAnimations();
}

function addAnimations() {
  gsap.from(".nav_container", { scrollTrigger: ".nav_container", delay: 1, duration: 1, y: "-20rem", ease: Cubic.easeOut, stagger: { amount: 0.5, from: "random" } });

  let h1 = document.querySelector("h1");
  h1.innerHTML = spanWrapper(h1.textContent);

  gsap.from("span", { x: 400, opacity: 0, delay: 0.4, duration: 1, stagger: { amount: 0.7, from: "random" } });

  gsap.from(".header_graphics", { scrollTrigger: ".header_graphics", delay: 0.2, duration: 1, x: "100rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "random" } });

  gsap.from("#intro", { scrollTrigger: "#intro", delay: 0.8, duration: 1, x: "100rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "random" } });

  gsap.from(".card", { scrollTrigger: ".card", duration: 0.2, x: "-300rem", ease: Cubic.easeOut, stagger: { amount: 0.7, from: "random" } });

  gsap.from("#conclussion", { scrollTrigger: "#conclussion", duration: 1, x: "100rem", ease: Cubic.easeOut, onComplete: footerAnimation, stagger: { amount: 0.3, from: "random" } });

  window.onscroll = function (ev) {
    const myID = document.querySelector("#customID");
    let y = window.scrollY;
    if (y >= 2100 || y >= 3100) {
      myID.className = "cta show";
    } else {
      myID.className = "cta hide";
    }

    myID.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  };

  function spanWrapper(word) {
    let wordArr = word.split(" ").map((word) => {
      return `<span>${word}</span>`;
    });

    return wordArr.join(" ");
  }

  function footerAnimation() {
    gsap.from(".some", { scrollTrigger: ".some", duration: 0.2, x: "-100rem", ease: Cubic.easeOut, stagger: { amount: 0.5 } });
  }
}

function toggle() {
  if (burger.classList.contains("toggle")) {
    burger.addEventListener("mouseover", over);
    document.body.style.overflowY = "visible";
    document.querySelector(".header_graphics").style.visibility = "visible";
  } else {
    burger.removeEventListener("mouseover", over);
    document.body.style.overflow = "hidden";
    document.querySelector(".header_graphics").style.visibility = "hidden";
  }
  links.classList.toggle("nav_toggle");
  burger.classList.toggle("toggle");
}

function over() {
  burger.classList.add("hover");
}
function done() {
  burger.classList.remove("hover");
}

function changeAnimationSpeed() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "paused";
}
function changeAnimationSpeedBack() {
  document.querySelector(".arrow_splash img").style.animationPlayState = "running";
}

function removeOverflow() {
  document.body.style.overflowY = "visible";
  links.classList.remove("nav_toggle");
  burger.classList.remove("toggle");
  document.querySelector(".header_graphics").style.visibility = "visible";
}
