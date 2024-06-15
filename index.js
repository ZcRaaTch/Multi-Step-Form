let nxt = document.querySelector(".next");
let nm = document.querySelector("#username");
let eml = document.querySelector("#email");
let ph = document.querySelector("#phone");

let x = 1;

function indicator(val1 = 0, val2 = 0) {
  if (val1) {
    document.querySelector(`[value="${val1}"]`).classList.toggle("indicator");
    document
      .querySelector(`[value="${val1 + 1}"]`)
      .classList.toggle("indicator");
  }
  if (val2) {
    document
      .querySelector(`[value="${val2 + 1}"]`)
      .classList.toggle("indicator");
    document.querySelector(`[value="${val2}"]`).classList.toggle("indicator");
  }
}

function conf() {
  document.querySelector("#step-4").classList.toggle("hidden");
  document.querySelector("#step-5").classList.toggle("hidden");
  document.querySelector(".pg-control").style.display = "none";
}

nxt.addEventListener("click", function () {
  if (x == 1) {
    if (nm.value == "") {
      document.querySelector(".error-1").classList.remove("hidden");
    } else if (eml.value == "") {
      document.querySelector(".error-1").classList.add("hidden");
      document.querySelector(".error-2").classList.remove("hidden");
    } else if (ph.value == "") {
      document.querySelector(".error-1").classList.add("hidden");
      document.querySelector(".error-3").classList.remove("hidden");
    } else {
      document.querySelector(".error-1").classList.add("hidden");
      document.querySelector(".error-2").classList.add("hidden");
      document.querySelector(".error-3").classList.add("hidden");
      document.querySelector("#step-" + x).classList.toggle("hidden");

      indicator(x, 0);
      x = x + 1;
      if (x > 1) {
        document.querySelector(".back").classList.remove("hidden");
      }
      document.querySelector("#step-" + x).classList.toggle("hidden");
      if (x === 4) {
        document.querySelector(".confirm").classList.remove("hidden");
        nxt.classList.add("hidden");
      }
    }
  } else {
    document.querySelector("#step-" + x).classList.toggle("hidden");

    indicator(x, 0);
    x = x + 1;
    if (x > 1) {
      document.querySelector(".back").classList.remove("hidden");
    }
    document.querySelector("#step-" + x).classList.toggle("hidden");
    if (x === 4) {
      document.querySelector(".confirm").classList.remove("hidden");
      nxt.classList.add("hidden");
    }
  }
});

function back() {
  document.querySelector("#step-" + x).classList.toggle("hidden");
  x = x - 1;
  document.querySelector("#step-" + x).classList.toggle("hidden");
  if (x < 2) {
    document.querySelector(".back").classList.add("hidden");
  }
  if (x !== 4) {
    document.querySelector(".confirm").classList.add("hidden");
    nxt.classList.remove("hidden");
  }
  indicator(0, x);
}
