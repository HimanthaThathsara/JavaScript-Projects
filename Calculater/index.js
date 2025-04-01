let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let operand1 = "";
let operand2 = "";

function inputNumber(num) {
  if (operator === "") {
    operand1 += num;
    display.innerText = operand1;
  } else {
    operand2 += num;
    display.innerText = operand2;
  }
}

function inputOperator(op) {
  if (operand1 === "") return;
  operator = op;
  display.innerText = op;
}

function clearDisplay() {
  currentInput = "";
  operator = "";
  operand1 = "";
  operand2 = "";
  display.innerText = "0";
}

function deleteLast() {
  if (operator === "") {
    operand1 = operand1.slice(0, -1);
    display.innerText = operand1 || "0";
  } else if (operand2 !== "") {
    operand2 = operand2.slice(0, -1);
    display.innerText = operand2 || "0";
  }
}

function calculateResult() {
  if (operand1 === "" || operand2 === "") return;
  let result = 0;
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
  }

  display.innerText = result;
  currentInput = result;
  operand1 = result.toString();
  operator = "";
  operand2 = "";
}
