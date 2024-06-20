let card = document.querySelectorAll(".card");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let addOnCard = document.querySelectorAll(".sec-card");
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
let varRate = document.querySelectorAll(".variable-rate");
// defining variable
var varRateMonthly = ["9/mo", "12/mo", "15/mo"];
var varRateYearly = ["90/yr", "120/yr", "150/yr"];
var planValue = 9;
var addOnValue = 0;
var totalAmount = 0;

card[0].classList.add("selected-plan");
// functions
function changeValue(arr1) {
  for (var i = 0; i < 3; i++) {
    varRate[i].innerHTML = arr1[i];
  }
}
function changePlanValue(val) {
  for (var i = 0; i < 3; i++) {
    card[i].dataset.value = val[i];
  }
}
function changeAddonValue(val) {
  for (var i = 0; i < 3; i++) {
    addOnCard[i].dataset.value = val[i];
  }
}
function planReset() {
  planValue = card[0].dataset.value;
  for (var i = 0; i < 3; i++) {
    card[i].classList.remove("selected-plan");
  }
  card[0].classList.add("selected-plan");
  for (var i = 0; i < 3; i++) {
    addOnCard[i].classList.remove("selected-plan");
  }
  addOnValue = 0;
}
// event listeners
card.forEach((btn) => {
  btn.addEventListener("click", function () {
    planValue = btn.dataset.value;
    for (var i = 0; i < 3; i++) {
      if (card[i].dataset.value != planValue) {
        card[i].classList.remove("selected-plan");
      }
    }
    btn.classList.add("selected-plan");
  });
});
monthly.addEventListener("click", function () {
  free.forEach(function (e) {
    e.classList.add("hidden");
  });
  checker.classList.add("month");
  checker.classList.remove("year");
  changeValue(varRateMonthly);
  changePlanValue([9, 12, 15]);
  changeAddonValue([1, 2, 2]);
  planReset();
});
yearly.addEventListener("click", function () {
  free.forEach(function (e) {
    e.classList.remove("hidden");
  });
  checker.classList.add("year");
  checker.classList.remove("month");
  changeValue(varRateYearly);
  changePlanValue([90, 120, 150]);
  changeAddonValue([10, 20, 20]);
  planReset();
});
onsvcs.addEventListener("click", function () {
  ossvg.classList.toggle("svg-bg");
  onsvcs.classList.toggle("selected-plan");
  if (onsvcs.classList.contains("selected-plan")) {
    addOnValue += onsvcs.dataset.addon;
  } else {
    addOnValue -= onsvcs.dataset.addon;
  }

  console.log();
});
lrgstrg.addEventListener("click", function () {
  lssvg.classList.toggle("svg-bg");
  lrgstrg.classList.toggle("selected-plan");
  if (onsvcs.classList.contains("selected-plan")) {
    addOnValue += lrgstrg.dataset.addon;
  } else {
    addOnValue -= lrgstrg.dataset.addon;
  }
});
customizable.addEventListener("click", function () {
  csvg.classList.toggle("svg-bg");
  customizable.classList.toggle("selected-plan");
  if (onsvcs.classList.contains("selected-plan")) {
    addOnValue += customizable.dataset.addon;
  } else {
    addOnValue -= customizable.dataset.addon;
  }
});
