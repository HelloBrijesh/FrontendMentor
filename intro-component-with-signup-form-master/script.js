const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitbtn = document.getElementById("submit");
const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

submitbtn.addEventListener("click", (e) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value.match(validRegex)) {
    emailError.classList.add("active");
    email.classList.add("input-error");
  }

  if (!firstName.value) {
    firstNameError.classList.add("active");
    firstName.classList.add("input-error");
  }
  if (!lastName.value) {
    lastNameError.classList.add("active");
    lastName.classList.add("input-error");
  }
  if (!password.value) {
    passwordError.classList.add("active");
    password.classList.add("input-error");
  }

  e.preventDefault();
});
