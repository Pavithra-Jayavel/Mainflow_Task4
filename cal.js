// Function to append clicked button value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete last character
function deleteChar() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let result = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(result);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}