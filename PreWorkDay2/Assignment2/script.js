const button = document.querySelector("button");
const billAmountInput = document.querySelector("#billAmount");
const tipPercentageInput = document.querySelector("#tipPercentage");
const numOfPeopleInput = document.querySelector("#numOfPeople");
const output = document.querySelector(".output");
console.log(button);

button.addEventListener("click", function() {
  const billAmount = parseFloat(billAmountInput.value);
  const tipPercentage = parseFloat(tipPercentageInput.value);
  const numOfPeople = parseInt(numOfPeopleInput.value);
    
  let tip = (billAmount * (tipPercentage / 100)).toFixed(2);
  let totalAmount = billAmount + parseFloat(tip);
  let amountPerPerson = totalAmount / numOfPeople;
    
  output.innerHTML = 
    `<p>Tip Amount: $${tip}</p>
    <p>Amount per Person: $${amountPerPerson.toFixed(2)}</p>`;
  console.log("Bill amount = " + "$" + billAmount);
  console.log("Tip % = " + tipPercentage + "%");
  console.log("Number of people = " + numOfPeople);
  console.log("Tip amount = " + "$" + tip);
  console.log("Tip amount per person = " + "$" + amountPerPerson);
});