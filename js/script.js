


// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".list");
let header = document.querySelector(".header");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  header.classList.toggle("active");
};