/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * Use camel case where needed.
 * Initialise the variable primary colours to the values: Blue, Black, Burgundy.
 * Then initialise the value secondary colours to the values: Grey, Yellow, Orange.
 * Then console log the concatenated arrays with the primary colours then the secondary colours.
 * Write a single line comment of what will be displayed
 *  
 */

var primaryColours = ["Blue", "Black", "Burgundy"];
var secondaryColours = ["Grey", "Yellow", "Orange"];
console.log(primaryColours.concat(secondaryColours));
// [ 'Blue', 'Black', 'Burgundy', 'Grey', 'Yellow', 'Orange' ]



/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * initialise the variable family members age to a 2-Dimensional array containing the values below:
 * 
 *          column[0]   column[1]
 * Row 1    Mom         60
 * Row 2    Dad         64
 * Row 3    Sister      35
 * Row 4    I           32
 * 
 * then use console.table() to show the information in a table.
 * 
 * Then based on the values stored in the schedule 2D array, console log out the following sentence (use backticks):
 * My _Sister_ is _35_ years old.
 * 
 */

var familyMembersAge = [
    ["Mom", "60"],
    ["Dad", "64"],
    ["Sister", "35"],
    ["I", "32"]
];
console.table(familyMembersAge);
console.log(`My ${familyMembersAge[2][0]} is ${familyMembersAge[2][1]} years old.`);
// My Sister is 35 years old.