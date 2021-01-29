window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
   // setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount=document.getElementById("loan-amount").value;
  const years=document.getElementById("loan-years").value;
  const rate=document.getElementById("loan-rate").value;
  document.getElementById("loan-amount").value="0";
  document.getElementById("loan-years").value="0";
  document.getElementById("loan-rate").value="0";
  let monthlyPayment= calculateMonthlyPayment(amount,years,rate);
  return monthlyPayment;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthlyPayment= setupIntialValues();
  updateMonthly(monthlyPayment);

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount,years,rate) {
  let P=amount;
  let i=(rate/100)/12;
  let n=years*12;
  let monthlyPayment=(P*i)/(1-(1+i)**(-n));
  return monthlyPayment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment= document.getElementById("monthly-payment");
  monthlyPayment.innerText=monthly;

}
