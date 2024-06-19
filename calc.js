let card = document.querySelectorAll(".card");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let onsvcs = document.querySelector(".online-service");
let lrgstrg = document.querySelector(".larger-storage");
let customizable = document.querySelector(".customizable");
let ossvg = document.querySelector(".online-service>svg");
let lssvg = document.querySelector(".larger-storage>svg");
let csvg = document.querySelector(".customizable>svg");
let planSelected = document.getElementById("plan-selected");
let planType = document.getElementById("plan-type");
let planDuration = document.querySelector(".plan-durration");
let tAmt = document.querySelector("#amt>span");
let selectives = document.querySelector(".selectives");
let free = document.querySelectorAll(".free");
let checker = document.querySelector("#checker");
// defining variable
let elix = 0;
// functions

// event listeners
card.forEach((btn) => {
  btn.addEventListener("click", function () {});
});
monthly.addEventListener("click", function () {
  free.forEach(function (e) {
    e.classList.add("hidden");
  });
  checker.classList.add("month");
  checker.classList.remove("year");
});
yearly.addEventListener("click", function () {
  free.forEach(function (e) {
    e.classList.remove("hidden");
  });
  checker.classList.add("year");
  checker.classList.remove("month");
});
