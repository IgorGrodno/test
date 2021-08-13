const calculateButton = document.getElementById("calculate_button");
const inputStringField = document.getElementById("input_field_string");
const inputWordField = document.getElementById("input_field_word");

calculateButton.addEventListener("click", CalculateButtonClickHandler);
inputStringField.addEventListener("input", InputStringFieldInputHandler);

function CalculateButtonClickHandler() {}

function InputStringFieldInputHandler() {}

function MarixCreator(str) {
  const matrixSize = Math.ceil(Math.sqrt(str.length));
  let matrix = [];
  for (let i = 0; i < matrixSize; i++) {
    let tmpArr = [];
    for (let j = 0; j < matrixSize; i++) {
      if (str[i + j] !== undefined) {
        tmpArr.push(str[i + j]);
      } else {
        tmpArr.push("*");
      }
    }
    matrix.push(tmpArr);
  }
}
