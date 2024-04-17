document.addEventListener('DOMContentLoaded', function () {
    let container = document.getElementsByClassName("container")[0];

    let minuteInput = document.getElementById("minuteInput");
    let secondInput = document.getElementById("secondInput");

    let minuteDisplay = document.getElementById("minuteDisplay");
    let secondDisplay = document.getElementById("secondDisplay");

    let startButton = document.getElementById("startButton");
    let resetButton = document.getElementById("resetButton");

    let error = document.createElement("p");
    error.style.color = "#252531";
    error.style.fontWeight = "bold";
    container.appendChild(error);

    let audio = new Audio("/assets/y2mate.com - Dậy đi ông cháu ơi.mp3")

    let intervalId;

    function getTime() {
        minuteValue = parseInt(minuteInput.value);
        secondValue = parseInt(secondInput.value);

        return [minuteValue, secondValue];
    }

    function setTime(minuteValue, secondValue) {
        if (minuteValue === "" || secondValue === "") {
            error.innerText = "Vui long nhap du lieu truoc";
            return;
        }
        if (isNaN(minuteValue) || isNaN(secondValue) || minuteValue < 0 || secondValue < 0 || secondValue >= 60) {
            error.innerText = "Vui long nhap du lieu hop le";
            return;
        } else {
            minuteValue = minuteValue < 10 ? "0" + minuteValue : minuteValue;
            secondValue = secondValue < 10 ? "0" + secondValue : secondValue;

            minuteDisplay.textContent = minuteValue;
            secondDisplay.textContent = secondValue;
        }
    }

    function counting() {

        let [minuteValue, secondValue] = getTime();
        intervalId = setInterval(function () {
            if (secondValue == 0) {
                if (minuteValue == 0) {
                    clearInterval(intervalId);
                    audio.play();
                    alert("Day di ong chau oi");
                    reset();
                    return;
                }
                minuteValue--;
                secondValue = 59;
            } else {
                secondValue--;
            }
            setTime(minuteValue, secondValue);
        }, 1000);
    }

    function reset() {
        audio.pause();
        clearInterval(intervalId);
        setTime(0, 0);
        minuteInput.value = "";
        secondInput.value = "";
        error.innerText = "";

    }

    startButton.addEventListener("click", function () {
        clearInterval(intervalId);
        if (error) {
            error.innerText = "";
        }

        let [minuteValue, secondValue] = getTime();
        setTime(minuteValue, secondValue);
        counting();
    });
    resetButton.addEventListener("click", function () {
        reset();
    });
});
