"use strict";
// sticky navigation
const nav = document.getElementById("nav");
const navWrapper = document.getElementById("nav-wrapper");
const arr = document.getElementById("arr");
const navToggle = document.getElementById("nav-mobile");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    nav.classList.add("sticky");
    navWrapper.classList.add("sticky-wrapper");
    arr.classList.remove("hide");
    navToggle.style.top = "1rem";
  } else {
    nav.classList.remove("sticky");
    navWrapper.classList.remove("sticky-wrapper");
    arr.classList.add("hide");
    navToggle.style.top = "3rem";
  }
});

// bill functionality when the checkbox is checked
const monthsPayment = document.querySelectorAll(".prices__plan-payment-month");
const yearsPayment = document.querySelectorAll(".prices__plan-payment-year");
const checkBox = document.querySelector(".switch input");

checkBox.addEventListener("change", function () {
  for (let i = 0; i < yearsPayment.length; i++) {
    yearsPayment[i].classList.toggle("hide");
    monthsPayment[i].classList.toggle("hide");
  }
});
