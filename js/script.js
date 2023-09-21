const userName = document.querySelector("#name");
const otherJobRole = document.querySelector("#other-job-role");
const jobRoleSelect = document.querySelector("#title");

userName.focus();
otherJobRole.style.display = 'none';

jobRoleSelect.addEventListener("change", (e) => {
    if (e.target.value === "other") {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
})