//! All in all it looked good, there where a few missed semi colons and a few minor syntax errors. There where two logic errors one in the determination of who won the game and another in appending to the result variable. 
// creating a score board .
var game = {
    win: 0,
    lose: 0
}

var choices = ['rock', 'paper', 'scissors'];

var random1 = Math.floor(Math.random() * 3);
var random2 = Math.floor(Math.random() * 3); // picks a number between 0 - 2
var bot1 = choices[random1];
var bot2 = choices[random2];

console.log(bot1); // this should return rock, paper , or scissors //! Missing semicolon

//! You are comparing one of the three strings 'rock', 'paper', or 'scissors' against one another. This isn't what we want to do, I'm not sure how Javascript deciphers 'paper' being greater than scissors but it is. However the behavior we want is to evaluate first the bot1's choice. Nested inside of that we want to find the opponent (bot2). Inside of the nested if stmts we can determine whom the winner was. We consider a bot1 a win in the game object and bot1 losing as a loss in the game object. You also cannot pass an expression into a switch as you've done on line 17, 18, 23, 28 only a variable holding a value. Remember switches can only check for equality against multiple cases. I added an example to demo all of this. 
// switch(bot1 === bot2) {
//     case bot1 < bot2: 
//         // game.lose = game.lose += 1; //? This appears to be working properly, however += already reassigns so you could shorten it to either of the 3 options listed below.
//         game.lose += 1; // || game.lose++ || game.lose = 1; //? We can just assign it to one since the game isn't persistent. 
//         break; //? Missing semicolon
    
//     case bot1 > bot2:
//         // game.win = game.win += 1;
//         game.win += 1; // || game.win++ || game.win = 1;
//         break; //? Missing semicolon

//     case bot1 === bot2:
//         console.log('tie game');
//         break; //? Missing semicolon
// }

//? An example using a little bit of everything.
switch(bot1) {
    case 'rock':
        //? If / else if
        if(bot2 === 'scissors') {
            game.win++;
        } else if(bot2 === 'paper') {
            game.lose++;
        }
        break;
    case 'paper':
        //? Ternary (probably wouldn't use this as the else clause is useless)
        (bot2 === 'rock') ? game.win++ : null;
        (bot2 === 'scissors') ? game.lose++ : null;
        break;
    //? If bot1 didn't chose 'rock' or 'paper' it must've chosen scissors so we can just use a default instead of checking if its scissors b/c by this point we know that it must be 'scissors'
    default:
        //? Switch stmt
        switch(bot2) {
            case 'paper':
                game.win++;
                break;
            case 'rock':
                game.lose++;
                break;
        }
        break; //? You don't have to end defaults w/ a break; but I just like to.
}

var result = '';

if (game.win > 0){
    // if(true){ //? This will always execute therefore this 'if' is kinda unnecessary.
        // result = bot1 + " beats " + bot2; //? You don't want to assign you want to append w/ +=
        result += bot1 + " beats " + bot2;
    // }
    // console.log(result) //? We want to wait to console.log() the result at the end. Kinda like a catch all.
} else if (game.lose > 0) {
        // result = bot2 + ' beats ' + bot1;
        result += bot2 + ' beats ' + bot1;
} else { //! You were missing this else stmt to notify the user of a draw.
    result += 'tie game';
}
console.log(result)