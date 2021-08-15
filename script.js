const calculateButton = document.getElementById("calculate_button");
const submitButton = document.getElementById("submit_button");
const inputStringField = document.getElementById("input_field_string");
const inputWordField = document.getElementById("input_field_word");
const matrixTextArea = document.getElementById("matrix");
const solutionTextArea = document.getElementById("solution");


calculateButton.addEventListener("click", CalculateButtonClickHandler);
submitButton.addEventListener("click", SubmitButtonClickHandler);

function CalculateButtonClickHandler() {
    let flag = true;
    if (inputStringField.value === "") {
        flag = false;
        alert("input string is empty");
    }
    if (inputWordField.value === "") {
        flag = false;
        alert("input word is empty");
    }
    if (flag === true) {
        SolutionViever(LettersChainFinder(inputStringField.value, inputWordField.value));
    }
}

function CellPairFiender(matrix, firstLetter, secondLetter) {

    let result = false;

    const firstIndex = GetLetterIndex(matrix, firstLetter);
    const secondIndex = GetLetterIndex(matrix, secondLetter);

    if ((firstIndex.indexExist === true) && (secondIndex.indexExist === true)) {
        if ((firstIndex.i === secondIndex.i + 1) && (firstIndex.j === secondIndex.j)) {
            result = true;
        }
        if ((firstIndex.i === secondIndex.i - 1) && (firstIndex.j === secondIndex.j)) {
            result = true;
        }
        if ((firstIndex.j === secondIndex.j + 1) && (firstIndex.i === secondIndex.i)) {
            result = true;
        }
        if ((firstIndex.j === secondIndex.j - 1) && (firstIndex.i === secondIndex.i)) {
            result = true;
        }
    }

    return result;
}

function SubmitButtonClickHandler() {
    let matrix = MarixCreator(inputStringField.value);
    MatrixViev(matrix);
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

function SolutionViever(resultObj) {
    let htmlString = "";
    if (resultObj.solutionExist === false) {
        htmlString += "no solution";
    } else {
        const tmpArr = [];
        for (let i = 0; i < resultObj.solution.length; i++) {
            tmpArr.push("[" + resultObj.solution[i].i + "," + resultObj.solution[i].j + "]");
        }
        htmlString += tmpArr.join("->");
    }
    solutionTextArea.innerHTML = htmlString;
}


function GetLetterIndex(matrix, letter) {
    let result = { indexExist: false };

    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === letter) {
                result.indexExist = true;
                result.i = i;
                result.j = j;
            }
        }
    }

    return result;
}

function LettersChainFinder(str, word) {
    const result = {
        solutionExist: true,
        solution: []
    }

    const matrix = MarixCreator(str);

    result.solution.push(GetLetterIndex(matrix, word[0]));

    for (let i = 0; i < word.length - 1; i++) {
        if ((CellPairFiender(matrix, word[i], word[i + 1])) === true) {
            result.solution.push(GetLetterIndex(matrix, word[i + 1]));
        } else {
            result.solutionExist = false;
        }
    }

    return result;
}