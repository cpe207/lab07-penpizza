const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () =>{
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
};

lastNameInput.onkeyup = () =>{
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");
};

emailInput.onkeyup = () =>{
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");
};

passwordInput.onkeyup = () =>{
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
};

submitBtn.onclick = () =>{
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;
//first name
  if(firstNameInput.value === ""){
    firstNameInput.classList.add("is-invalid");
  }else{
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  };
//last name
  if(lastNameInput.value === ""){
    lastNameInput.classList.add("is-invalid");
  }else{
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  };
//email
  if(!validateEmail(emailInput.value)){
    emailInput.classList.add("is-invalid");
  }else{
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  };
//password
  if(passwordInput.value.length < 6){
   passwordInput.classList.add("is-invalid");
  }else{
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  };
//alert
  if(isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk){
    alert("Registered successfully");
  };
};