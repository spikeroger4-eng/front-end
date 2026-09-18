let n = prompt("Enter a number:");
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

document.write("Factorial of " + n + " = " + factorial);