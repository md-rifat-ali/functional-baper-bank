/*
document.getElementById("deposit-btn").addEventListener("click", function () {
  // get the deposit value
  const depositField = document.getElementById("deposit-field");
  const depositValueString = depositField.value;
  const depositValue = parseFloat(depositValueString);
  depositField.value = "";
  if (isNaN(depositValue) === true) {
    alert("Please provide a number");
    return;
  }

  //get the deposit total
  const depositTotalField = document.getElementById("deposit-total");
  const depositTotalValueString = depositTotalField.innerText;
  const depositTotal = parseFloat(depositTotalValueString);

  //get the grand total
  const depositGrandTotal = depositValue + depositTotal;
  depositTotalField.innerText = depositGrandTotal;

  //get the total balance
  const balanceTotalField = document.getElementById("balance-total");
  const balanceTotalValueString = balanceTotalField.innerText;
  const balanceTotal = parseFloat(balanceTotalValueString);
  const balanceGrandTotal = depositValue + balanceTotal;
  balanceTotalField.innerText = balanceGrandTotal;
});*/

//get input value
function getInputValue(elementId) {
  const inputField = document.getElementById(elementId);
  const inputValueString = inputField.value;
  const inputValue = parseFloat(inputValueString);
  inputField.value = "";
  return inputValue;
}

//get deposit and withdraw value
function getTextValue(elementId) {
  const textField = document.getElementById(elementId);
  const textValueString = textField.innerText;
  const textValue = parseFloat(textValueString);

  return textValue;
}

//get balance total
function getBalanceValue(elementId) {
  const balanceField = document.getElementById(elementId);
  const balanceValueString = balanceField.innerText;
  const balanceValue = parseFloat(balanceValueString);
  return balanceValue;
}

//set the value
function setValue(elementId, newValue) {
  const setElement = document.getElementById(elementId);
  setElement.innerText = newValue;
}

// deposit

document.getElementById("deposit-btn").addEventListener("click", function () {
  //get input value
  const depositValue = getInputValue("deposit-field");
  if (isNaN(depositValue) === true) {
    alert("Please provide a number");
    return;
  }
  //get deposit total value
  const depositTotal = getTextValue("deposit-total");
  //get grand total of deposit
  const grandTotalDeposit = depositValue + depositTotal;
  setValue("deposit-total", grandTotalDeposit);
  //grand total balance
  const balanceTotal = document.getElementById("balance-total");
  const total = depositValue + parseFloat(balanceTotal.innerText);
  setValue("balance-total", total);
});

// withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawValue = getInputValue("withdraw-field");
  if (isNaN(withdrawValue) === true) {
    alert("Please provide a number");
    return;
  }
  //get withdraw value
  const withdrawTotal = getTextValue("withdraw-total");

  //balance total
  const totalBalance = getBalanceValue("balance-total");
  if (totalBalance < withdrawValue) {
    alert("ato taka nai account a.");
    return;
  }

  //grand withdraw total
  const grandTotalWithdraw = withdrawValue + withdrawTotal;
  setValue("withdraw-total", grandTotalWithdraw);

  //total grand balance
  const totalGrandBalance = totalBalance - withdrawValue;
  setValue("balance-total", totalGrandBalance);
});
