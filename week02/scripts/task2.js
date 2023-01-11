/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
let myName = "M. Abdul Mahlangu";
document.querySelector("#name").innerHTML = myName;

// Step 3: declare and instantiate a variable to hold the current year
// Step 4: place the value of the current year variable into the HTML file
// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
let currentDate = new Date();
let currentYear;
currentYear = currentDate.getFullYear();
document.querySelector("#year").innerHTML = currentYear;

let mainImage = "images/myImage.png"
document.querySelector("img").setAttribute("src", mainImage);


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
// Step 2: place the values of the favorite foods variable into the HTML file
// Step 3: declare and instantiate a variable to hold another favorite food
// Step 4: add the variable holding another favorite food to the favorite food array
// Step 5: repeat Step 2
// Step 6: remove the first element in the favorite foods array
// Step 7: repeat Step 2
// Step 8: remove the last element in the favorite foods array
// Step 7: repeat Step 2
let favoriteFoods = ["Pizza", "Pasta", "Meatballs", "Rice", "Salad"]
document.querySelector("#food").innerHTML = favoriteFoods;

let favoriteFoods2 = "Fried fish"
favoriteFoods.push(favoriteFoods2);
document.querySelector("#food").innerHTML = favoriteFoods;

favoriteFoods.shift()
document.querySelector("#food").innerHTML = favoriteFoods;

favoriteFoods.pop()
document.querySelector("#food").innerHTML = favoriteFoods;
