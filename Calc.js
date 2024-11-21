const Numbers = document.querySelectorAll(".button.number")
const Operators = document.querySelectorAll(".button.operator")
const Equals = document.getElementById("equal")
const AC = document.getElementById("clear")
const Del = document.getElementById("delete")
const display = document.getElementById("display")
const container = document.querySelector(".container");

function Action() {
    Numbers.forEach((button) => {
        button.addEventListener("click", () => {
            display.value += button.textContent
        })
    })
}

function Clear() {

    AC.addEventListener("click", () => {

        if (display.value.trim() === "") {
            return
        } else {
            display.value = ""
        }
    })
}

function Delete() {
    Del.addEventListener("click", () => {

        if (display.value.trim() === "") {
            return
        } else {
            display.value = display.value.slice(0, -1)
        }
    })
}

function Operations() {
    Operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            const operatorValue = operator.textContent;

            if (operatorValue === "×") {
                display.value += "*";
            } else if (operatorValue === "÷") {
                display.value += "/";
            } else if (operatorValue === "%") {
                // Calculate percentage based on the last number in the expression
                const currentValue = display.value;
                const lastNumberMatch = currentValue.match(/(\d+(\.\d+)?)(?!.*\d)/); // Match whole or decimal numbers
                if (lastNumberMatch) {
                    const lastNumber = lastNumberMatch[0];
                    const percentageValue = Number(lastNumber) / 100;
                    display.value = currentValue.replace(/(\d+(\.\d+)?)(?!.*\d)/, percentageValue); // Replace last number
                }
            } else {
                display.value += operatorValue;
            }
        });
    });
}



function FindSolution() {
    Equals.addEventListener("click", () => {
        try {
            if (display.value != "") {
                display.value = eval(display.value)
            } else {
                display.value = "No Input"
                setTimeout(() => {
                    display.value = ""
                }, 2000)
            }
        } catch {
            display.value = "Invalid Input"
            setTimeout(() => {
                display.value = ""
            }, 2000)
        }
    })
}

// safer options than eval()

// function FindSolution() {
//     Equals.addEventListener("click", () => {
//         try {
//             if (display.value.trim() !== "") {
//                 // Evaluate the expression safely
//                 const result = calculateExpression(display.value);
//                 display.value = result;
//             } else {
//                 display.value = "No Input";
//                 setTimeout(() => {
//                     display.value = "";
//                 }, 2000);
//             }
//         } catch (error) {
//             display.value = "Invalid Input";
//             setTimeout(() => {
//                 display.value = "";
//             }, 2000);
//         }
//     });
// }

// /**
//  * Function to safely evaluate a mathematical expression.
//  * Supports +, -, *, /, %, and parentheses.
//  */
// function calculateExpression(expression) {
//     // Remove any invalid characters for safety
//     const sanitizedExpression = expression.replace(/[^0-9+\-*/().%]/g, "");

//     // Parse and evaluate the expression using the Function constructor
//     const result = new Function(`return (${sanitizedExpression})`)();

//     if (isNaN(result) || !isFinite(result)) {
//         throw new Error("Invalid calculation");
//     }

//     return result;
// }


function ChangeBAckground() {
    Equals.addEventListener("click", () => {
        const container = document.querySelector(".container"); // Ensure you target the correct container element

        if (display.value === "No Input" || display.value === "Invalid Input") {
            container.classList.add("bg-orange"); // Add red background with animation
            setTimeout(() => {
                container.classList.remove("bg-orange");
            }, 2000);
        } else {
            container.classList.add("bg-teal"); // Add green background with animation
            setTimeout(() => {
                container.classList.remove("bg-teal");
            }, 2000);
        }
    });
}



Action()
Clear()
Delete()
Operations()
FindSolution()
ChangeBAckground()