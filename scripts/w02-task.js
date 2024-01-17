/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Patrick Mukula';

// Declare and instantiate a variable to hold the current year
const currentYear = new Date().getFullYear();

// Declare and instantiate a variable to hold the file path and file name of the image
const profilePicture = 'images/pictureofme.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

// Get the HTML element with the id of "food" and store it in a constant variable
const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

// Set the value of the element with id "food" to the value of the variable currentYear

//document.getElementById('year').textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

// Set the alt property of the image element
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
// Define an array of favorite foods
const favFoods = ['Pizza', 'Sushi', 'Ice Cream'];
foodElement.innerHTML = favFoods.join(', ');

// Declare and instantiate a variable to hold another single favorite food item
let newfavoriteFood = 'Tuner';

favFoods.push(newfavoriteFood);
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





