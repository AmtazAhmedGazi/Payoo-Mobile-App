const validPin = 1234;

// Add money
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const ammount = parseInt(document.getElementById("add-amount").value);

    const addPin = parseInt(document.getElementById("add-pin").value);
    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );

    if (accountNumber.length < 11) {
      alert("please provide valid account number");
      return;
    }
    if (addPin !== validPin) {
      alert("please provide valid oin number");
      return;
    }

    const totalNewAvailableBalance = ammount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });
