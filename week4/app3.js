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

console.log(bot1) // this should return rock, paper , or scissors

switch(bot1 === bot2) {
    case bot1 < bot2:
        game.lose = game.lose += 1;
        break
    
    case bot1 > bot2:
        game.win = game.win += 1;
        break

    case bot1 === bot2:
        console.log('tie game');
        break
}

var result = '';

if (game.win > 0){
    if(true){
        result = bot1 + " beats " + bot2;
    }
    console.log(result)
} else if (game.lose > 0) {
        result = bot2 + ' beats ' + bot1;
}
console.log(result)