document.getElementById("login-btn").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const emailInputText = emailField.value;
  //  get password value
  const passwordField = document.getElementById("password-field");
  const passwordInputText = passwordField.value;
  if (emailInputText === "rifat@gmail.com" && passwordInputText === "rifat") {
    window.location.href = "login.html";
  } else {
    alert("bap er bank a curi korte esecho???  ");
  }
});
