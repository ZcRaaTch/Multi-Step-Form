let card = document.querySelectorAll(".card");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let addOnCard = document.querySelectorAll(".sec-card");
let onsvcs = document.querySelector(".online-service");
let lrgstrg = document.querySelector(".larger-storage");
let customizable = document.querySelector(".customizable");
let addonSVG = document.querySelectorAll(".sec-card>svg");
let ossvg = document.querySelector(".online-service>svg");
let lssvg = document.querySelector(".larger-storage>svg");
let csvg = document.querySelector(".customizable>svg");
let planSelected = document.getElementById("selected-plan-name");
let planType = document.getElementById("plan-type");
let planDuration = document.querySelector(".plan-durration");
let tAmt = document.querySelector("#amt>span");
let selectives = document.querySelector(".selectives");
let free = document.querySelectorAll(".free");
let addOnRate = document.querySelectorAll(".addon-rate");
let varRate = document.querySelectorAll(".variable-rate");
let nxtus = document.querySelector(".next");
let bckus = document.querySelector(".back");
// defining variables
var varRateMonthly = ["9/mo", "12/mo", "15/mo"];
var varRateYearly = ["90/yr", "120/yr", "150/yr"];
var planValue = 9;
var addOnValue = 0;
var elix = 1;
var pName = "";
var totalAmount = 0;
var flag = "";

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
    addOnCard[i].dataset.addon = val[i];
  }
}
function displayAddonRate(val) {
  for (var i = 0; i < 3; i++) {
    addOnRate[i].innerHTML = val[i];
  }
}
function finalDisplay() {
  totalAmount = planValue + addOnValue;
  tAmt.innerHTML = `${totalAmount}/${flag}`;
  planSelected.innerHTML = pName;
  document.querySelector(
    "#plan-amount>span"
  ).innerHTML = `${planValue}/${flag}`;
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
  for (var i = 0; i < 3; i++) {
    addonSVG[i].classList.remove("svg-bg");
  }
  addOnValue = 0;
}
// event listeners
card.forEach((btn) => {
  btn.addEventListener("click", function () {
    planValue = parseInt(btn.dataset.value);
    pName = btn.classList[0];
    pName = pName[0].toUpperCase() + pName.slice(1);
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
  displayAddonRate(["+$1/mo", "+$2/mo", "+$2/mo"]);
  planType.innerHTML = "month";
  planDuration.innerHTML = "monthly";
  flag = "mo";
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
  displayAddonRate(["+$10/mo", "+$20/mo", "+$20/mo"]);
  planType.innerHTML = "year";
  planDuration.innerHTML = "yearly";
  flag = "yr";
  planReset();
});
onsvcs.addEventListener("click", function () {
  ossvg.classList.toggle("svg-bg");
  onsvcs.classList.toggle("selected-plan");
  if (onsvcs.classList.contains("selected-plan")) {
    addOnValue += parseInt(onsvcs.dataset.addon);
  } else {
    addOnValue -= parseInt(onsvcs.dataset.addon);
  }
});
lrgstrg.addEventListener("click", function () {
  lssvg.classList.toggle("svg-bg");
  lrgstrg.classList.toggle("selected-plan");
  if (lrgstrg.classList.contains("selected-plan")) {
    addOnValue += parseInt(lrgstrg.dataset.addon);
  } else {
    addOnValue -= parseInt(lrgstrg.dataset.addon);
  }
});
customizable.addEventListener("click", function () {
  csvg.classList.toggle("svg-bg");
  customizable.classList.toggle("selected-plan");
  if (customizable.classList.contains("selected-plan")) {
    addOnValue += parseInt(customizable.dataset.addon);
  } else {
    addOnValue -= parseInt(customizable.dataset.addon);
  }
});
nxtus.addEventListener("click", function () {
  elix++;
  if (x == 4) {
    finalDisplay();
  }
});
bckus.addEventListener("click", function () {
  elix--;
});
