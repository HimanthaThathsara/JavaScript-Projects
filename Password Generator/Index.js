function getElement(name) {
  return document.querySelector(".password-generator-full-box " + name);
}

const passwordOutput = getElement("#password-show-box");
const copyButton = getElement("#copy-button");
const LengthSizeOutput = getElement("#length-size");
const LengthSizeInput = getElement("#password-length-input-ranger");
const uppercaseCheckbox = getElement("#uppercase-checkbox");
const lowercaseCheckbox = getElement("#lowercase-checkbox");
const numbersCheckbox = getElement("#numbers-checkbox");
const specialCheckbox = getElement("#special-checkbox");
const generateButton = getElement("#generate-button");

LengthSizeInput.addEventListener("input", function (e) {
  LengthSizeOutput.innerText = e.target.value;
});

generateButton.addEventListener("click", () => {
  const length = LengthSizeInput.value;

  if (!lowercaseCheckbox.checked && !uppercaseCheckbox.checked && !numbersCheckbox.checked && !specialCheckbox.checked) {
    alert("Select at least one character type");
    return;
  }

  let specialCharactersArray = ["_", "@", "%", "$", "&"];
  let password = "";
  let charTypes = [];

  if (numbersCheckbox.checked) charTypes.push('number');
  if (uppercaseCheckbox.checked) charTypes.push('uppercase');
  if (lowercaseCheckbox.checked) charTypes.push('lowercase');
  if (specialCheckbox.checked) charTypes.push('special');

  for (let i = 0; i < length; i++) {
    let charType = charTypes[Math.floor(Math.random() * charTypes.length)];

    if (charType === 'number') {
      password += String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    } else if (charType === 'uppercase') {
      password += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    } else if (charType === 'lowercase') {
      password += String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    } else if (charType === 'special') {
      password += specialCharactersArray[Math.floor(Math.random() * specialCharactersArray.length)];
    }
  }

  passwordOutput.value = password;
});

copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(passwordOutput.value)
});
