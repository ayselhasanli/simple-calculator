var buttons = document.getElementsByTagName("button");
var result = document.getElementById("result");
var resetBtn = document.getElementById("resetButton")
var deleteBtn = document.getElementById("deleteButton")
var numberBtn = document.getElementsByClassName("num-button")
var operations = ["=", "-", "*", "/", ".", "-/+", "+"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var isPositiveBtn = document.getElementById("isPositive")
var operationButtons = document.getElementsByClassName("operation-button")


/*Calculate*/
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = calculate
}

function calculate() {
    let value = this.innerHTML

    if (value === "=" && result.value !== "") {
        try {
            result.value = eval(result.value)
        } catch (e) {
            result.value = "0"
        }
    }
    if (value !== "=") {
        result.value += value
    }

    // if (!operations.includes(result.value.charAt(result.value.length-1))){
    //     numbers.includes(value) ? result.value += value : result.value
    // }
    // console.log(result.value, result.value.charAt(result.value.length-1))
    // if (!isNaN(result.value)){
    //     result.value += value
    // }

    // if (operations.includes(value) && result.value.length > 0) {
    //    return result.value
    // } else if (value !== "="){
    //     result.value += value
    // }
    // if (operations.includes(value) &&  result.value.length > 0) {
    //     for (let i = 0; i < operations.length; i++ ){
    //         operations[i] === value
    //     }
    // } else {
    //     result.value += value
    // }

    // for (let i = 0; i < operationButtons.length; i++) {
    //     operationButtons[i].onclick = calculate2(operationButtons[i])
    // }
    //
    // function calculate2(button) {
    //
    //     switch (button) {
    //         case button.innerText = "*":
    //             console.log("its *")
    //     }
    // }
}

/*Clear Form*/
function resetValue() {
    result.value = " ";
}

resetBtn.onclick = resetValue


/* + or - number*/
isPositiveBtn.onclick = isPositive = () => {
    result.value = result.value * -1
}

/*Delete last character*/
function deleteLeft() {
    result.value = result.value.substring(0, result.value.length - 1)
}

deleteBtn.onclick = deleteLeft



