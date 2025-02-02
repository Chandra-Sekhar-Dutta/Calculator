# Modern Calculator

A beautifully designed, interactive calculator with dynamic background animations. This calculator is built using **HTML**, **CSS**, and **JavaScript**, offering an elegant interface and functionality for basic arithmetic operations.

## Features

- **Real-time calculations**: Perform addition, subtraction, multiplication, division, and percentage calculations.
- **Clear and delete options**: Easily clear the input field or delete the last character.
- **Dynamic background effects**: Visual feedback for success and error states through changing background colors.
- **Responsive design**: Ensures usability across devices of varying screen sizes.
- **Error handling**: Detects invalid input and displays helpful messages.

## Technologies Used

- **HTML**: Structure of the calculator interface.
- **CSS**: Styling for the calculator and ripple background animations.
- **JavaScript**: Core logic for handling button clicks, calculations, and animations.

## Installation

1. **Clone the repository**:
   ```bash
   git clone "https://github.com/Chandra-Sekhar-Dutta/Calculator.git"
   cd "https://github.com/Chandra-Sekhar-Dutta/Calculator.git"
Open the index.html file in your browser:
You can double-click the file or use a live server extension in your code editor.
Usage
Launch the calculator by opening the index.html file in a browser.
Perform calculations using the buttons:
AC: Clears the input field.
DEL: Deletes the last character from the input field.
%: Calculates the percentage based on the last number in the expression.
=: Computes the result of the entered mathematical expression.
Observe the dynamic feedback:
Teal background for valid results.
Orange background for invalid inputs or errors like division by zero.
File Structure
graphql
Copy code
## Modern Calculator
- index.html         # Main HTML structure
- Calc.css           # Styling for the calculator and animations
- Calc.js            # JavaScript for calculator logic
- README.md          # Documentation file
How It Works
JavaScript Features
Input Handling:

Numbers and operators are appended to the display as buttons are clicked.
Special buttons (AC, DEL) allow managing the input field.
Dynamic Percentage Calculation:

Computes the percentage of the last number in the expression.
Evaluation of Expressions:

Mathematical expressions are evaluated using the eval() function.
Handles basic operations like +, -, *, /, and %.
Error Handling:

Displays "Invalid Input" for unsupported expressions.
Handles division by zero gracefully by displaying "Infinity."
Dynamic Background:

Changes to teal for successful calculations.
Changes to orange for errors or invalid inputs.
CSS Features
Ripple Background Animation:
Adds a visually pleasing animated ripple effect to the page.
Button Effects:
Hover and active states give buttons a 3D effect and make them interactive.
Contributing
Contributions are welcome! Feel free to fork the project, create a branch, and submit a pull request.
