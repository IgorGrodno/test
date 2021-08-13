const calculateButton = document.getElementById("calculate_button");
const submitButton = document.getElementById("submit_button");
const inputStringField = document.getElementById("input_field_string");
const inputWordField = document.getElementById("input_field_word");
const matrixTextArea = document.getElementById("matrix");


calculateButton.addEventListener("click", CalculateButtonClickHandler);
submitButton.addEventListener("click", SubmitButtonClickHandler);

function CalculateButtonClickHandler() {}

function SubmitButtonClickHandler() {
    let matrix = MarixCreator(inputStringField.value);
    MatrixViev(matrix);
    inputStringField.value = "";
}

function MarixCreator(str) {
    const matrixSize = Math.ceil(Math.sqrt(str.length));
    let matrix = [];
    for (let i = 0; i < matrixSize; i++) {
        let tmpArr = [];
        for (let j = 0; j < matrixSize; j++) {
            if (str[(i * matrixSize) + j] !== undefined) {
                tmpArr.push(str[(i * matrixSize) + j]);
            } else {
                tmpArr.push("*");
            }
        }
        matrix.push(tmpArr);
    }
    return matrix;
}

function MatrixViev(matrix) {
    let htmlString = "";
    for (let i = 0; i < matrix.length; i++) {
        htmlString += matrix[i].join() + "<br/>";
    }
    matrixTextArea.innerHTML = htmlString;
}