//The player will have to guess the answer, just like in Hangman. 
//This time, though, the player will guess with numbers instead of letters. 
//BEGIN JQUERY 
$(document).ready(function(){

/* DECLARE VARIABLES */
let generatedNumber = 0;
let wins = 0;
let losses = 0;
let score = 0;
let message ="";

let crystalOne = 0;
let crystalTwo = 0;
let crystalThree = 0;
let crystalFour = 0;
const wonMessage = "You Won !!";
const lostMessage = "You Lost !!";

// Generate number for each of the crystals
function crystalValues() {
	crystalOne = Math.floor(Math.random() * (13 - 1) + 1);
	crystalTwo = Math.floor(Math.random() * (13 - 1) + 1);
	crystalThree = Math.floor(Math.random() * (13 - 1) + 1);
	crystalFour = Math.floor(Math.random() * (13 - 1) + 1);
}

// Generates random number 19 -120
function generateNumber() {
	generatedNumber = Math.floor(Math.random() * (121 - 19) + 19);
}

function userWon() {
// User win score diplays 1
	wins++;
	$("#wins").text(wins);
// Message pop-up you won 
	message = wonMessage;
	$("#message").text(message);
// Total score resets to 0
	score = 0;
	$("#yourScore").text(score);
// Another random number is generated
	generateNumber();
	$("#randomNumber").text(generatedNumber);
// Generate new crystal value 
	crystalValues();
}

function userLost() {
// User lost score goes up by 1
	losses++;
	$("#losses").text(losses);
// Message pops-up you lost
	message = lostMessage;
	$("#message").text(message);
// Total score resets to 0
	score = 0;
	$("#yourScore").text(score);
// Another random number is generated 
	generateNumber();
	$("#randomNumber").text(generatedNumber);
// Generates new crystal value
	crystalValues();
}

function startGame() {
// Generate random number
generateNumber();
// Win goes to 0
// Lossses goes to 0
// Crystals generates values
crystalValues();
// Score is set to 0
// Message is set to blank
}

startGame();

// Display default values
$("#wins").text(wins);
$("#losses").text(losses);
$("#yourScore").text(score);
$("#message").text(message);
// Displaying the random number
$("#randomNumber").text(generatedNumber);
				

/* TEST FUNCTION 
crystalValues();
console.log(crystalOne);
console.log(crystalTwo);
console.log(crystalThree);
console.log(crystalFour); */

$("#develop").click(function(){
    score = score + crystalOne;
    $("#yourScore").text(score);
    if (score === generatedNumber) {
    	userWon();
    }
    else if (score > generatedNumber) {
    	userLost();
    }
});

$("#empire").click(function(){
    score = score + crystalTwo;
    $("#yourScore").text(score);
    if (score === generatedNumber) {
    	userWon();
    }
    else if (score > generatedNumber) {
    	userLost();
    }
});

$("#codepen").click(function(){
    score = score + crystalThree;
    $("#yourScore").text(score);
    if (score === generatedNumber) {
    	userWon();
    }
    else if (score > generatedNumber) {
    	userLost();
    }
});

$("#order").click(function(){
    score = score + crystalFour;
    $("#yourScore").text(score);
    if (score === generatedNumber) {
    	userWon();
    }
    else if (score > generatedNumber) {
    	userLost();
    }
});






//There will be four crystals displayed as buttons on the page.
//The player will be shown a random number at the start of the game.

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


//Game will hide this amount until the player clicks a crystal.
//When they do click one, update the player's score counter.


//The player wins if their total score matches the random number from the beginning of the game.
//The player loses if their score goes above the random number.

//The game restarts whenever the player wins or loses.

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



/*Option 1 Game design notes
The random number shown at the start of the game should be between 19 - 120.
Each crystal should have a random hidden value between 1 - 12.*/

//JQUERY ENDS !!!
});