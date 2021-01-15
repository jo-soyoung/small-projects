const form = document.querySelector("form");
const allCheck = form.querySelector("#all");
const essChecks = form.querySelectorAll(".mandatory");
const optCheck = form.querySelector(".optional");
const btn = form.querySelector("button");

const manualChks = [...essChecks, optCheck];

function btnActivator() {
  if (Array.from(essChecks).every(ess => ess.checked)) {
    btn.removeAttribute("disabled");
  } else {
    btn.setAttribute("disabled", "");
  }
}

function allCheckActivator() {
  if (manualChks.every(box => box.checked)) {
    allCheck.setAttribute("checked", "");
    allCheck.checked = true;
  } else {
    allCheck.removeAttribute("checked");
    allCheck.checked = false;
  }
}

function toggleAllCheck() {
  for (let box of manualChks) {
    if (allCheck.checked === true) {
      box.setAttribute("checked", "");
      box.checked = true;
    } else {
      box.removeAttribute("checked");
      box.checked = false;
    }
  }
  allCheckActivator();
}

function toggleCheck(e) {
  e.target.toggleAttribute("checked");
  allCheckActivator();
  btnActivator();
}

allCheck.addEventListener("click", toggleAllCheck);
optCheck.addEventListener("click", toggleCheck);
essChecks.forEach(ess => {
  ess.addEventListener("click", toggleCheck);
});
