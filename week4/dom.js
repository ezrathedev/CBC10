// creating a paper rock scissors game in javascript!

var user = 'Ezra';
var bot = 'computer'
console.log(`hello ${user} get ready to play paper rock scissors!!`);
console.warn(`Warning!! the ${bot} is watching you!`); // this is here for fun mahahaha

// creating variables for the game for shorthand
var p = 'paper'; // value for paper.
var r = 'rock'; // value for rock.
var s = 'scissors'; // value for scissors.


var Number = Math.floor(Math.random() * 4); // gives me a random number between 0 - 3. 

var answer = Number; // this is here for the answer.

switch(answer) {
    case 0:
        console.log('you lose try again!');
        break
    case 1:
        console.log(p + ' paper beats rock!!');
        break;

    case 2:
        console.log(r + ' rock beats scissors!!');
        break;

    case 3:
        console.log(s + ' scissors beats paper!!');
        break;
}
console.log(answer);
