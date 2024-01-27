/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
// Function Declaration for Addition
function add(number1, number2) {
    return number1 + number2;
}

// Function Declaration for addNumbers
function addNumbers() {
    let num1 = parseInt(document.getElementById('add1').value);
    let num2 = parseInt(document.getElementById('add2').value);
    let sum = add(num1, num2);
    document.getElementById('sum').value = sum;
}

// Add event listener for addNumbers button
document.getElementById('addNumbers').addEventListener('click', addNumbers);

// Function Expression for Subtraction
const subtract = function(num1, num2) {
    return num1 - num2;
};

// Function Expression for subtractNumbers
const subtractNumbers = function() {
    let num1 = parseInt(document.getElementById('subtract1').value);
    let num2 = parseInt(document.getElementById('subtract2').value);
    let difference = subtract(num1, num2);
    document.getElementById('difference').value = difference;
};

// Add event listener for subtractNumbers button
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Function for Multiplication
const multiply = (num1, num2) => num1 * num2;

// Arrow Function for multiplyNumbers
const multiplyNumbers = () => {
    let num1 = parseInt(document.getElementById('factor1').value);
    let num2 = parseInt(document.getElementById('factor2').value);
    let product = multiply(num1, num2);
    document.getElementById('product').value = product;
};

// Add event listener for multiplyNumbers button
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

// Function Declaration for Division
function divide(num1, num2) {
    return num1 / num2;
}

// Function Declaration for divideNumbers
function divideNumbers() {
    let num1 = parseInt(document.getElementById('dividend').value);
    let num2 = parseInt(document.getElementById('divisor').value);
    let quotient = divide(num1, num2);
    document.getElementById('quotient').value = quotient;
}

// Add event listener for divideNumbers button
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

// Event listener for Get Total Due button
document.getElementById('getTotal').addEventListener('click', function() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let isMember = document.getElementById('member').checked;
    let totalDue = isMember ? subtotal * 0.8 : subtotal;
    document.getElementById('total').textContent = `$${totalDue.toFixed(2)}`;
});

// Array variable to hold numbers 1 through 13
const numbersArray = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

// Assign the value of the array variable to the HTML element with an ID of array
document.getElementById('array').textContent = numbersArray;

// Use the filter() array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of odds
const oddNumbers = numbersArray.filter(number => number % 2 !== 0);
document.getElementById('odds').textContent = oddNumbers;

// Use the filter() array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of evens
const evenNumbers = numbersArray.filter(number => number % 2 === 0);
document.getElementById('evens').textContent = evenNumbers;

// Use the reduce() array method to sum the array variable elements and assign the result to the HTML element with an ID of sumOfArray
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

// Use the map() array method to multiply each element in the array variable by 2 and assign the result to the HTML element with an ID of multiplied
const multipliedNumbers = numbersArray.map(number => number * 2);
document.getElementById('multiplied').textContent = multipliedNumbers;

// Use the map() and reduce() array methods to sum the array elements after multiplying each element by two. Assign the result to the HTML element with an ID of sumOfMultiplied
const sumOfMultiplied = multipliedNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
