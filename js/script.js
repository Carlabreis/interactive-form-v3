/*
  FORM ELEMENTS
*/
const form = document.querySelector("form");

const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const jobRoleSelect = document.querySelector("#title");
const otherJobRole = document.querySelector("#other-job-role");

const colorSelect = document.querySelector("#color");
const designSelect = document.querySelector("#design");

const activitiesSet = document.querySelector("#activities");
const activitiesBox = document.querySelector("#activities-box");
const checkboxInputs = activitiesSet.querySelectorAll("input[type='checkbox']");
const total = document.querySelector("#activities-cost");

const paymentType = document.querySelector("#payment");
const creditCardinfo = document.querySelector("#credit-card");
const paypalInfo = document.querySelector("#paypal");
const bitcoinInfo = document.querySelector("#bitcoin");
const ccNum = document.querySelector("#cc-num");
const zipCode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");

/*
  REQUIRED FIELDS VALIDATION FUNCTIONS
*/
const isNameValid = () => /^(?!\s*$).+/.test(userName.value);
const isEmailValid = () => /^[^@]+@[^@.]+\.[a-z]+$/i.test(userEmail.value);
const isCardValid = () => /\b\d{13,16}\b/.test(ccNum.value);
const isZipCodeValid = () => /^\d{5}$/.test(zipCode.value);
const isCvvValid = () => /^\d{3}$/.test(cvv.value);
function isActivitiesValid() {
  if (totalPrice !== 0) {
    return true;
  }
}

/*
  if input is valid adds visual hints that it was valid,
  if not, it adds visual hints to show where to fix/add info
*/
function validation(element, validator) {
  if (validator) {
    element.parentElement.classList.add("valid");
    element.parentElement.classList.remove("not-valid");
    element.parentElement.lastElementChild.style.display = "none";
  } else if (!validator) {
    element.parentElement.classList.remove("valid");
    element.parentElement.classList.add("not-valid");
    element.parentElement.lastElementChild.style.display = "block";
  }
  if (element.value === "") {
    element.parentElement.lastElementChild.innerText =
      "This field can not be empty";
  }
}

/*
  ON LOAD
*/
document.addEventListener("DOMContentLoaded", () => {
  userName.focus();
  otherJobRole.style.display = "none";
  colorSelect.disabled = true;
  paymentType.querySelector('[value="credit-card"]').selected = true;
  paypalInfo.style.display = "none";
  bitcoinInfo.style.display = "none";
});

/*
  JOB INFO SECTION
  Job Role extra input field will display if 'other' option is selected
*/
jobRoleSelect.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});

/*
  T-SHIRT INFO SECTION
  Shows the color options available for the selected design
*/
designSelect.addEventListener("change", (e) => {
  const heartJsOptions = colorSelect.querySelectorAll('[data-theme="heart js"]');
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

/*
  ACTIVITIES SECTION
  Update total price according to selected activities;
  Disable options that conflict with time and day of activitie selected;
  Validates and display error message if no option is selected.
*/
let totalPrice = 0;

activitiesSet.addEventListener("change", (event) => {
  const targetPrice = parseInt(event.target.dataset.cost);
  const targetTime = event.target.dataset.dayAndTime;

  if (event.target.checked) {
    checkboxInputs.forEach((element) => {
      const dataTime = element.dataset.dayAndTime;

      if (dataTime === targetTime && event.target !== element) {
        element.disabled = true;
        element.parentElement.classList.add("disabled");
      }
    });

    totalPrice = totalPrice + targetPrice;
  } else {
    checkboxInputs.forEach((element) => {
      const dataTime = element.dataset.dayAndTime;

      if (dataTime === targetTime && event.target !== element) {
        element.disabled = false;
        element.parentElement.classList.remove("disabled");
      }
    });

    totalPrice = totalPrice - targetPrice;
  }

  total.innerText = `Total: $${totalPrice}`;
  validation(activitiesBox, isActivitiesValid());
});

// Add or remove classes for better visibility of focused option
checkboxInputs.forEach((element) => {
  element.addEventListener("blur", () => {
    element.parentElement.classList.add("blur");
    element.parentElement.classList.remove("focus");
  });

  element.addEventListener("focus", () => {
    element.parentElement.classList.add("focus");
  });
});

/*
  PAYMENT INFO SECTION
  Displays input fields according to payment option selected
*/
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

/*
  VALIDATION OF REQUIRED FIELDS ON CHANGE
*/
userName.addEventListener("keyup", () => {
  validation(userName, isNameValid());
});

userEmail.addEventListener("keyup", () => {
  const isValid = isEmailValid();
  validation(userEmail, isValid);

  if (!isValid && userEmail.value !== "") {
    userEmail.parentElement.lastElementChild.innerText =
      "Email address must be formatted correctly";
  }
});

ccNum.addEventListener("keyup", () => {
  const isValid = isCardValid();
  validation(ccNum, isValid);

  if (!isValid && ccNum.value !== "") {
    ccNum.parentElement.lastElementChild.innerText =
      "Credit card number must be between 13 - 16 digits";
  }
});

zipCode.addEventListener("keyup", () => {
  const isValid = isZipCodeValid();
  validation(zipCode, isValid);

  if (!isValid && zipCode.value !== "") {
    zipCode.parentElement.lastElementChild.innerText =
      "Zip Code must be 5 digits";
  }
});

cvv.addEventListener("keyup", () => {
  const isValid = isCvvValid();
  validation(cvv, isValid);

  if (!isValid && cvv.value !== "") {
    cvv.parentElement.lastElementChild.innerText = "CVV must be 3 digits";
  }
});

/*
  FORM SUBMIT/VALIDATION
*/
form.addEventListener("submit", (e) => {
  validation(userName, isNameValid());
  validation(userEmail, isEmailValid());
  validation(activitiesBox, isActivitiesValid());
  if (paymentType.value === "credit-card") {
    validation(ccNum, isCardValid());
    validation(zipCode, isZipCodeValid());
    validation(cvv, isCvvValid());
  }
  e.preventDefault();
});
