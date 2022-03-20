"use strict";

window.addEventListener("load", setup);
const burger = document.querySelector(".burger");
const links = document.querySelector(".nav_links");

function setup() {
  const header = document.querySelector(".nav_container_project");
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", () => {
    location.replace("index.html");
  });

  burger.addEventListener("click", toggle);
  burger.addEventListener("mouseover", over);

  burger.addEventListener("mouseout", done);

  document.querySelector(".empty_button_project").addEventListener("click", removeOverflow);
  document.querySelector(".nav_button").addEventListener("click", removeOverflow);

  window.onscroll = function (ev) {
    let windowY = window.scrollY;

    if (windowY >= 500) {
      header.classList.add("sticky", "toggle_nav");
    } else {
      header.classList.remove("sticky", "toggle_nav");
    }
  };
}

function toggle() {
  if (burger.classList.contains("toggle")) {
    burger.addEventListener("mouseover", over);
    document.body.style.overflowY = "visible";
  } else {
    burger.removeEventListener("mouseover", over);
    document.body.style.overflow = "hidden";
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

function removeOverflow() {
  document.body.style.overflowY = "visible";
  links.classList.remove("nav_toggle");
  burger.classList.remove("toggle");
}
