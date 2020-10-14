// creating a score board .
var game = {
    win: 0,
    lose: 0
}

var choices = ['rock', 'paper', 'scissors'];

var random1 = 0;
var random2 = 1;
var bot1 = choices[random1];
var bot2 = choices[random2];

if(bot1 === 'winner') {
    game[win] += 1;
}