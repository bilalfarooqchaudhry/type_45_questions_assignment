/*import inquirer from "inquirer";

const min=1
const max=10
const randomintg=Math.floor(Math.random()*(max-min)+min)
function startgame(){
    inquirer.prompt ([
        {
         type: "input",
         name:"Guess",
         message:`Guess the number between ${min} and ${max}`,
         validate: (value:any) =>{
                const userinput:number=parseInt(value);
                if (isNaN (userinput)|| userinput <min || userinput > max){
                return 'please enter a valid number b/w 1 and 10';
                } 
                return true; 
            }
        }
     ])
     .then((answers) => {
        const userGuess: number = parseInt(answers.guess);

        if (userGuess === randomintg) {
            console.log(`Congratulations! You guessed the number ${randomintg} correctly!`);
        } else {
              if (userGuess < randomintg) {
                console.log('Too low! Try again.');
               } else {
                console.log('Too high! Try again.');
               }
            } 
            startGame();
        }
       });
}

console.log('Welcome to the Number Guessing Game!');
startGame();*/

import inquirer from "inquirer";

const min = 1;
const max = 10;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

function startGame() {
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: `Guess the number between ${min} and ${max}:`,
            validate: (value: any) => {
                const userInput: number = parseInt(value);
                if (isNaN(userInput) || userInput < min || userInput > max) {
                    return 'Please enter a valid number between 1 and 10.';
                }
                return true;
            }
        }
    ])
    .then((answers) => {
        const userGuess: number = parseInt(answers.guess);

        if (userGuess === randomInt) {
            console.log(`Congratulations! You guessed the number ${randomInt} correctly!`);
        } else {
            if (userGuess < randomInt) {
                console.log('Too low! Try again.');
            } else {
                console.log('Too high! Try again.');
            }
            startGame();
        }
    });
}

console.log('Welcome to the Number Guessing Game!');
startGame();