// Function to append characters to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to perform calculation
function calculate() {
    let display = document.getElementById('display');
    let equation = display.value;
    
    try {
        let result = eval(equation); // Using eval() for simplicity (not recommended for production due to security risks)
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
