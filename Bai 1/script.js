document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementsByClassName('container')[0];
    let resultContainer = document.getElementsByClassName('resultContainer')[0];

    let inputA = document.getElementById('inputA');
    let inputB = document.getElementById('inputB');

    let sum = document.getElementById('sum');
    let subtract = document.getElementById('subtract');
    let multiply = document.getElementById('multiply');
    let divide = document.getElementById('divide');
    let reset = document.getElementById('reset');

    let error = document.createElement('p');
    error.style.color = "red";
    container.append(error);

    let resultDisplay = document.createElement("h1");
    resultDisplay.textContent = "Ket qua la : "
    resultContainer.append(resultDisplay);

    function calculate(a, b, ope) {
        error.textContent = "";
        resultDisplay.textContent = "Ket qua la : ";

        if (a === "" || b === "") {
            error.textContent = "Vui long nhap day du du lieu";
            return;
        }

        if (!isNaN(a) && !isNaN(b)) {
            let result;

            if (ope === "+") {
                result = parseFloat(a) + parseFloat(b);
            } else if (ope === "-") {
                result = parseFloat(a) - parseFloat(b);
            } else if (ope === "*") {
                result = parseFloat(a) * parseFloat(b);
            } else if (ope === "/") {
                if (parseFloat(b) !== 0) {
                    result = parseFloat(a) / parseFloat(b);
                } else {
                    error.textContent = "khong the chia cho 0";
                    return;
                }
            }

            resultDisplay.textContent += result;
        } else {
            error.textContent = "Vui long nhap so hop le";
        }
    }

    function resetValue() {
        inputA.value = "";
        inputB.value = "";
        resultDisplay.textContent = "Ket qua la : ";
        error.textContent = "";
    }

    sum.addEventListener('click', function () {
        calculate(inputA.value, inputB.value, "+");
    });
    subtract.addEventListener('click', function () {
        calculate(inputA.value, inputB.value, "-");
    });
    multiply.addEventListener('click', function () {
        calculate(inputA.value, inputB.value, "*");
    });
    divide.addEventListener('click', function () {
        calculate(inputA.value, inputB.value, "/");
    });
    reset.addEventListener('click', resetValue);
});
