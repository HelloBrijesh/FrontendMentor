const email = document.getElementById("email");
const submitbtn = document.getElementById("submit");
const error = document.getElementById("error");

submitbtn.addEventListener("click", (e) => {
  e.preventDefault();

  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value.match(validRegex)) {
    error.classList.add("active");
    email.classList.add("input-error");
  }
});
email.addEventListener("focus", () => {
  error.classList.remove("active");
  email.classList.remove("input-error");
});
