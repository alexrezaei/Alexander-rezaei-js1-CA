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
    subject.value === "" ||
    subject.value == null ||
    validateLength(subject.value, 10) === false
  ) {
    console.log(subject.value);
    message.push("Subject has to contain more than or 10 letters");
  }
  if (
    address.value === "" ||
    address.value == null ||
    validateLength(address.value, 24) === false
  ) {
    message.push("Address length needs to be atleast 25 characters");
  }
  if (email.value === "" || email.value == null || validateEmail === false) {
    message.push("Email is not correctly formated");
  }
  if (message.length > 0) {
    e.preventDefault();
    error.innerHTML += message.join(", ");
  } else {
    e.preventDefault();
    message.push("Message successfully sent");
    error.innerHTML += message.join(", ");
  }
});

const validateLength = (value, len) => {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
};

const validateEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  let paternMatches = re.test(email);
  if (paternMatches === true) {
    return true;
  } else {
    return false;
  }
};
