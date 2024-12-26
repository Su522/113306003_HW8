const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operator = document.getElementById("operator");
const calculateBtn = document.getElementById("calculate");
const resultDisplay = document.getElementById("result");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

calculateBtn.addEventListener("click", () => {
  const value1 = parseFloat(num1.value);
  const value2 = parseFloat(num2.value);
  const selectedOperator = operator.value;
  let result;

  if (isNaN(value1) || isNaN(value2)) {
    resultDisplay.textContent = "Error: Invalid input";
    return;
  }

  switch (selectedOperator) {
    case "+":
      result = add(value1, value2);
      break;
    case "-":
      result = subtract(value1, value2);
      break;
    case "*":
      result = multiply(value1, value2);
      break;
    case "/":
      result = divide(value1, value2);
      break;
    default:
      result = "Error: Invalid operator";
  }

  resultDisplay.textContent = Result = ${typeof result === "number" ? result.toFixed(2) : result};
});