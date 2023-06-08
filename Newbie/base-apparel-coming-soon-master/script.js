const submitbtn = document.getElementById("submit");
const email = document.getElementById("email");
const error = document.getElementById("error");
submitbtn.addEventListener("click", (e) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.value.match(validRegex)) {
    error.classList.add("active");
  }
  e.preventDefault();
});
email.addEventListener("focus", () => {
  error.classList.remove("active");
});
