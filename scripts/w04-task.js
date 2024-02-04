/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Patrick Mukula",
    photo: "images/pictureofme.jpg",
    favoriteFoods: [
        'Suchi',
        'Salad',
        'Pumpkin',
        'Beef'
    ],
    hobbies: [
        'Listen to music',
        'play basketball',
        'go to the beach'
    ],
    placesLived: [],

};

/* Populate Profile Object with placesLive objects */

let newPlace = { place: "Luanda", length: "5 years" };
myProfile.placesLived.push(newPlace);
myProfile.placesLived.push({ place: "Kinshasa", length: "20 years" });
myProfile.placesLived.push({ place: "Cape Town", length: "3 years" })
myProfile.placesLived.push({ place: "Windhoek", length: "1 years" })

/* DOM Manipulation - Output */

// Assign the value of the name property of the myProfile object to the HTML element with an ID of name.
document.getElementById("name").textContent = myProfile.name;

// Assign the value of the photo property as the src attribute of the HTML <img> with an ID of photo.
document.getElementById("photo").src = myProfile.photo;

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo.
document.getElementById("photo").alt = myProfile.name;

// For each favorite food in the favoriteFoods property,
myProfile.favoriteFoods.forEach(function(food) {

  // create an HTML <li> element,
  let li = document.createElement("li");

  // place the value of the favoriteFoods array element into the textContent of this new li element, and then
  li.textContent = food;

  // append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods.
  document.getElementById("favorite-foods").appendChild(li);
});

// Repeat the previous process of creating a list of items for each hobby in the hobbies property of the object and appending each item to the HTML <ul> element with an ID of hobbies.
myProfile.hobbies.forEach(function(hobby) {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.getElementById("hobbies").appendChild(li);
});

// For each object in the placesLived property:
myProfile.placesLived.forEach(function(place) {

  // Create an HTML <dt> element and put its place property in the <dt> element.
  let dt = document.createElement("dt");
  dt.textContent = place.place;

  // Create an HTML <dd> element and put its length property in the <dd> element
  let dd = document.createElement("dd");
  dd.textContent = place.length;

  // Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived.
  document.getElementById("places-lived").appendChild(dt);
  document.getElementById("places-lived").appendChild(dd);
});
