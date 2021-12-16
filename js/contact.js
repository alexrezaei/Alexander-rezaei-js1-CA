const form = document.querySelector("form");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const error = document.querySelector(".error");
console.log(error);
console.log(address);
form.addEventListener("submit", (e) => {
  error.innerHTML = "";
  let message = [];
  if (firstName.value === "" || firstName.value == null) {
    message.push("First name is required");
  }
  if (lastName.value === "" || lastName.value == null) {
    message.push("Last Name is required");
  }
  if (
    subject.length === "" ||
    subject.value == null ||
    validateLength(subject.value, 10) === false
  ) {
    message.push("Subject has to contain more than or 10 letters");
  }
  if (
    address.length === "" ||
    address.length == null ||
    validateLength(address.value, 24) === false
  ) {
    console.log(address.value.length);
    message.push("Address length needs to be atleast 25 characters");
  }
  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML += message.join(", ");
  } else {
    e.preventDefault();
  }
});

const validateLength = (value, len) => {
  if (value.trim().length <= len) {
    return true;
  } else {
    return false;
  }
};
