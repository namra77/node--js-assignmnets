// --process.argv:

// This is a Node.js feature that captures command-line arguments.
// It returns an array where:
// The first element (process.argv[0]) is the path to the Node.js executable.
// The second element (process.argv[1]) is the path to the JavaScript file being executed.
// Any additional elements (e.g., process.argv[2]) are command-line arguments passed by the user.

//--- process.argv[2]:

// This fetches the third element from the process.argv array, which corresponds to the first custom argument passed.

var environment = process.argv[2];

// This logs the value of environment (i.e., the third command-line argument) to the console.
console.log(environment);


//-- days:
// This is an array that stores the weekdays in lowercase letters.
// Each element is a string representing a day of the workweek.
let days = ["monday", "tuesday ", "wednesday", "thursday", "friday"];



// --function isWeekDay(day):
// This defines a function named isWeekDay, which takes one argument: day.
function isWeekDay(day) {

// --day.toLowerCase():

// Converts the input day string to lowercase for case-insensitive comparison with the elements in the days array.
// days.indexOf(day.toLowerCase()) != -1:

// The indexOf method checks if the given day exists in the days array.
// If the day is found, indexOf returns the index (0 or greater). If not, it returns -1.


    if (days.indexOf(day.toLowerCase()) != -1) {


// If the day exists in the days array, the function returns true.
        return true;

    }

    else {
// If the day does not exist in the days array, the function returns false.
        return false;
    }
}

//-- isWeekDay(environment):
// This calls the isWeekDay function with the environment variable (from the command-line argument) as input.

//-- console.log:
// Logs the result of the isWeekDay function to the console: true if the input is a weekday, false otherwise.

console.log(isWeekDay(environment));