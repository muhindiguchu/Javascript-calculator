const result = document.getElementById("result");
const buttons = document.getElementsByTagName("button");

let currentInput = "";
let operator = "";
let previousInput = "";

function calculate() {
  let total = 0;

  if (operator === "+") {
    total = parseFloat(previousInput) + parseFloat(currentInput);
  } else if (operator === "-") {
    total = parseFloat(previousInput) - parseFloat(currentInput);
  } else if (operator === "*") {
    total = parseFloat(previousInput) * parseFloat(currentInput);
  } else if (operator === "/") {
    total = parseFloat(previousInput) / parseFloat(currentInput);
  }

  currentInput = total.toString();
  operator = "";
  previousInput = "";
  result.value = currentInput;
}

// 
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const value = buttons[i].textContent;

    if (!isNaN(value) || value === ".") {
      
      currentInput += value;
      result.value = currentInput;
    } else if (value === "C") {
      
      currentInput = "";
      previousInput = "";
      operator = "";
      result.value = "";
    } else if (value === "=") {
      
      if (previousInput && currentInput && operator) {
        calculate();
      } else {
        result.value = "Error";
      }
    } else {
      
      if (currentInput) {
        if (previousInput) {
          calculate(); 
        }
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    }
  });
}
