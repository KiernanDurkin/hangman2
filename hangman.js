var Words = require("./Words.js");
var Letters = require("./letters.js");
var inquirer = require("inquirer");
var Bank = require('./wordbank.js');

 
var guessedLetters = [];



game = {

		wordBank: Bank.wordbank,
		guessesRemaining:10,
		currentWord:null,

		startGame: function(arg){
			this.currentWord = new Words(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
			this.currentWord.getLetters();
			console.log(this.currentWord.showWord());
			this.askUser();

		},

		resetGuesses : function(){
			this.guessesRemaining = 10;
		},

		askUser : function(){
			var user = this;
			inquirer.prompt([
			{
					type:"input",
					name:"guess",
					message: "Please Select a Letter"
			}

				]).then(function(result){
						console.log("you guessed: " + result.guess);
					var letterGuessed = (result.guess).toUpperCase();
					 var guessed = false;
                    for(var i = 0; i<that.guessedLetters.length; i++){
                    if(letterGuessed === that.guessedLetters[i]){
                         guessed = true;
          }
}
			});
			}

};
game.startGame();