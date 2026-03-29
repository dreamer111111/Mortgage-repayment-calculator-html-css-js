const mortgageForm = document.getElementById("mortgage-form");

const clearAll = document.getElementById("clear-all");

const clearAllErrors = () => {
  const errorMessages = document.querySelectorAll(".error");
  errorMessages.forEach((msg) => (msg.hidden = true));

  const errorGroups = document.querySelectorAll(".has-error");
  errorGroups.forEach((group) => group.classList.remove("has-error"));
};

const showErrors = (inputElement, errorId) => {
  document.getElementById(errorId).hidden = false;
  const group =
    inputElement.closest(".input-group") || inputElement.closest(".type-group");
  group.classList.add("has-error");
};

const showOutput = (amount, term, interest, type) => {
  const r = interest / 100 / 12;
  const n = term * 12;
  const P = amount;
  let monthlyPayment = 0;
  if (type.value === "repayment") {
    const numerator = r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    monthlyPayment = P * (numerator / denominator);
  } else {
    monthlyPayment = P * r;
  }
  const totalRepayment = monthlyPayment * n;

  //    Formatted to GBP
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  document.getElementById("monthly-payment-amount").textContent =
    formatter.format(monthlyPayment);
  document.getElementById("total-repayment-amount").textContent =
    formatter.format(totalRepayment);

  document.getElementById("empty-state").hidden = true;
  document.getElementById("results-state").hidden = false;
};

const checkError = (amountInput, termInput, interestInput, typeInput) => {
  let isValid = true;
  if (!amountInput) {
    showErrors(document.getElementById("amount"), "amount-error");
    isValid = false;
  }
  if (!termInput) {
    showErrors(document.getElementById("term"), "year-error");
    isValid = false;
  }
  if (!interestInput) {
    showErrors(document.getElementById("interest"), "interest-error");
    isValid = false;
  }
  if (!typeInput) {
    document.getElementById("type-error").hidden = false;
    document.querySelector(".type-group").classList.add("has-error");
    isValid = false;
  }
  return isValid;
};

const handleSubmit = (e) => {
  e.preventDefault();
  clearAllErrors();
  const amountInput = Number(document.getElementById("amount").value);
  const termInput = Number(document.getElementById("term").value);
  const interestInput = Number(document.getElementById("interest").value);
  const typeInput = document.querySelector(
    'input[name="mortgage-type"]:checked',
  );

  if (checkError(amountInput, termInput, interestInput, typeInput)) {
    showOutput(amountInput, termInput, interestInput, typeInput);
  }
};

clearAll.addEventListener("click", clearAllErrors);
mortgageForm.addEventListener("submit", handleSubmit);
