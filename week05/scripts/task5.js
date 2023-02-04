
/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
// Step 4: Declare a variable to hold a message that will be displayed
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
const currentDay = new Date();
let weekDay;

weekDay = currentDay.getDay();

let message1;

if (weekDay <= 5) {
    message1 = "Hang in there!";
} else  {
    message1 = "Woohoo! It's the weekend";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message2;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (weekDay) {
    case 0:
        message2 = "Sunday";
        break;
    case 1:
        message2 = "Monday";
        break;
    case 2:
        message2 = "Tuesday";
        break;
    case 3:
        message2 = "Wednesday";
        break;
    case 4:
        message2 = "Thursday";
        break;
    case 5:
        message2 = "Friday";
        break;
    case 6:
        message2 = "Saturday";
        break;
    default:
        break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.getElementById("message1").innerHTML = message1;
document.getElementById("message2").innerHTML = message2;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
let templeList = []

function output(templeList) {
    templeList.forEach(temple => {
        let article = document.createElement("article");

        let templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        let templeLocation = document.createElement("h4");
        templeLocation.textContent = temple.location;
        
        let templeDedication = document.createElement("h4");
        templeDedication.textContent = temple.dedicated;

        let templeImage = document.createElement("img");
        templeImage.setAttribute("src", temple.imageUrl)
        templeImage.setAttribute("alt", temple.templeName)

        article.appendChild(templeName)
        article.appendChild(templeLocation)
        article.appendChild(templeDedication)
        article.appendChild(templeImage)

        document.getElementById("temples").append(article);
    });
};

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
let getTemples = async () => {
    let response = await fetch("https://byui-cse.github.io/cse121b-course/week05/temples.json");
    templeList = await response.json();
    // console.log(templeList);
    output(templeList);

};

getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
let reset = function () {
    document.getElementById("temples").innerHTML = "";
};
// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
let sortBy = function(){
    reset();
    const sortedList = templeList.reverse(compare);
    output(sortedList)
};

let compare = function(a,b){
    if (a.templeName < b.templeName) {
    return 1;
    }
    if (a.templeName > b.templeName) {
        return -1;
    }
    else {
        return 0;
    }
};

document.getElementById("sortBy").addEventListener("change", sortBy);

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

