const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const otherJobRole = document.querySelector("#other-job-role");
const jobRoleSelect = document.querySelector("#title");
const colorSelect = document.querySelector("#color");
const designSelect = document.querySelector("#design");
const activitiesSet = document.querySelector("#activities");
const total = document.querySelector("#activities-cost");
const creditCardinfo = document.querySelector("#credit-card");
const paypalInfo = document.querySelector("#paypal");
const bitcoinInfo = document.querySelector("#bitcoin");
const paymentType = document.querySelector("#payment");
const form = document.querySelector("form");
const ccNum = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

userName.focus();
otherJobRole.style.display = "none";

jobRoleSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

// 4- T-SHIRT INFO SECTION
//disable color select element
colorSelect.disabled = true;

designSelect.addEventListener("change", (e) => {
  const heartJsOptions = colorSelect.querySelectorAll(
    '[data-theme="heart js"]'
  );
  const jsPunsOptions = colorSelect.querySelectorAll('[data-theme="js puns"]');

  colorSelect.disabled = false;

  if (e.target.value === "js puns") {
    colorSelect[0].selected = "true";
    for (let i = 0; i < heartJsOptions.length; i++) {
      heartJsOptions[i].setAttribute("hidden", "");
    }
    for (let i = 0; i < jsPunsOptions.length; i++) {
      jsPunsOptions[i].removeAttribute("hidden", "");
    }
  } else {
    colorSelect[0].selected = "true";
    for (let i = 0; i < heartJsOptions.length; i++) {
      heartJsOptions[i].removeAttribute("hidden", "");
    }
    for (let i = 0; i < jsPunsOptions.length; i++) {
      jsPunsOptions[i].setAttribute("hidden", "");
    }
  }
});

// 5- ACTIVITIES SECTION
let totalPrice = 0;

activitiesSet.addEventListener("change", (e) => {
  if (e.target.checked) {
    totalPrice = totalPrice + parseInt(e.target.dataset.cost);
  } else {
    totalPrice = totalPrice - parseInt(e.target.dataset.cost);
  }
  total.innerText = `Total: $${totalPrice}`;
});

// 6- PAYMENT INFO SECTION
paymentType.querySelector('[value="credit-card"]').selected = true;
paypalInfo.style.display = "none";
bitcoinInfo.style.display = "none";

paymentType.addEventListener("change", (e) => {
  if (paymentType.querySelector('[value="credit-card"]').selected) {
    creditCardinfo.style.display = "block";
    paypalInfo.style.display = "none";
    bitcoinInfo.style.display = "none";
  } else if (paymentType.querySelector('[value="paypal"]').selected) {
    paypalInfo.style.display = "block";
    bitcoinInfo.style.display = "none";
    creditCardinfo.style.display = "none";
  } else {
    bitcoinInfo.style.display = "block";
    paypalInfo.style.display = "none";
    creditCardinfo.style.display = "none";
  }
});

// 7- FORM VALIDATION

form.addEventListener("submit", (e) => {
  const isNameValid = () => /^(?!\s*$).+/.test(userName.value);
  const isEmailValid = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail.value);
  const registerActivitiesValid = () => (totalPrice !== 0 ? true : false);
  const isCardValid = () => /\b\d{13,16}\b/.test(ccNum.value);
  const isZipCodeValid = () => /^\d{5}$/.test(zipCode.value);
  const isCvvValid = () => /^\d{3}$/.test(cvv.value);

  if (paymentType.value === "credit-card") {
    if (
      isNameValid() &&
      isEmailValid() &&
      registerActivitiesValid() &&
      isCardValid() &&
      isZipCodeValid() &&
      isCvvValid()
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (isNameValid() && isEmailValid() && registerActivitiesValid()) {
      true;
    } else {
      return false;
    }
  }
  e.preventDefault();
});
