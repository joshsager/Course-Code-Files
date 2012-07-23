// C O M M E N T S
// This is a single line comment.  Comments are not exectued they are ignored.
/* This is a 
	multi
	line 
	comment
*/

// C O M M A N D S
// Commands are requsts written in a language (javascript) understood by the browser

// V A R I A B L E S
// This is a command.  Commands end with a semi colon
// Commands execute immediately
// This particular command is a Variable --myName-- and a Value --josh--
var myName = "Josh";
// The value "Josh" is stored in memory and can be retrieved through typing the command myName
// Variables can store letters, known as strings, or numbers, known as integers.

// Variable with a string -- note the quotes
var hobby = "Screen Printing";
// Variable with an integer -- note there are no quotes
var numberOfPosters = 5;

// Variables can also store an expression
var message = myName + " likes "+ hobby +" and has printed " + numberOfPosters + "this year.";
// adding variables and values is know as concatenation



// F U N C T I O N S
// A function is a group of commands
// You can make your own
function storeMyName(){
	var newName = "Sidney";
	var newHobby = "Scoring goals";
	var newMessage = newName +" likes " + newHobby;
	
	// The return gives back the work that your function is doing... You can see it in the console.
	return newMessage;
}
// Note commands execute immediately but NOT when they are in a function
// The commands will only execute when the function has been envoked or called

// Evoke or call a function
storeMyName();
// Until line 59, lines 50 - 54 did not execute. 
// The function call on line 59 triggered the commands on lines 51, 52, and 53 to execute 

// P A R A M E T E R S
// This is a fancy way to pass in variables to the function so you can get unique results
function storeMyNameBetter(nameOfAPerson, nameOfAHobby){
	var newMessage = nameOfAPerson +" likes " + nameOfAHobby;
	
	// The return gives back the work that your function is doing... You can see it in the console.
	return newMessage;
}




