const userName = document.querySelector("#name");
const otherJobRole = document.querySelector("#other-job-role");
const jobRoleSelect = document.querySelector("#title");
const colorSelect = document.querySelector("#color");
const designSelect = document.querySelector("#design");
const activitiesSet = document.querySelector("#activities");
const total = document.querySelector("#activities-cost");

userName.focus();
otherJobRole.style.display = 'none';

jobRoleSelect.addEventListener("change", (e) => {
    if (e.target.value === "other") {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

// 4- T-SHIRT INFO SECTION
//disable color select element
colorSelect.disabled = true;

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

