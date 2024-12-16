// Get the display element
const display = document.getElementById("display");

// Function to append value to display
function appendToDisplay(value) {
  // If display is 0, replace it; otherwise, append
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "0";
}

// Function to delete last character
function deleteLastChar() {
  // If only one character left, reset to 0
  if (display.value.length === 1) {
    display.value = "0";
  } else {
    // Remove last character
    display.value = display.value.slice(0, -1);
  }
}

// Function to calculate the result
function calculate() {
  try {
    // Use eval carefully - only for learning purposes
    // In production, implement a safer calculation method
    display.value = eval(display.value);
  } catch (error) {
    // Handle any calculation errors
    display.value = "Error";
  }
}
