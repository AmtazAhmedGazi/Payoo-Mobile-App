// login button functionality
document.getElementById("loginButton").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 12345678910;
  const pinNumber = 1234;
  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinNumberValue = document.getElementById("pin-number").value;
  const pinNumberValueConverted = parseInt(pinNumberValue);

  if (mobileNumberValueConverted !== mobileNumber) {
    alert("mobile number doesn't exist");
  }
  if (pinNumberValueConverted !== pinNumber) {
    alert("pin number doesn't exist");
  }
});
