function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

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
