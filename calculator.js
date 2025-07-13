// Get the display input element by its ID
const display = document.getElementById("display");

// Append character (number/operator) to the display
function appendToDisplay(input) {
    display.value += input;
}

// Clear the display completely
function clearDisplay() {
    display.value = "";
}

// Delete the last character from the display
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate the expression in the display
function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression
    } catch (error) {
        display.value = "Error"; // Show error if eval fails
    }
}
