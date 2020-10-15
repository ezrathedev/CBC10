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

console.log('bot1: ',bot1); // this should return rock, paper , or scissors
console.log('bot2: ',bot2);
// switch(bot1 === bot2) {
//     case bot1 < bot2:
//         game.lose = game.lose += 1;
//         break
    
//     case bot1 >= bot2:
//         game.win = game.win += 1;
//         break

//     case bot1 === bot2:
//         console.log('tie game');
//         break
// }
// if(bot1 === 1 & bot2 === 3){
//     game.win += 1;
//     console.log(game);
// }

if (bot1 === choices[0] & bot2 === choices[0]){
    console.log('tied game both pick rock'); // both choose rock
} else if (bot1 === choices[1] &  bot2 === choices[1]) {
    console.log('tied game both pick paper'); // both choose paper
} else if(bot1 === choices[2] &  bot2 === choices[2]) {
    console.log('tied game both pick scissors'); // both pick scissors
} else if (bot1 === choices[1] &  bot2 === choices[0]){
    console.log('paper beats rock');  
    game.win += 1;
    result += 1
} else if(bot1 === choices[2] &  bot2 === choices[1]){
    console.log('scissors beats paper');
}else if (bot1 === choices[0] &  bot2 === choices[2]){
    console.log('rock beats scissors')  
} 
var result = '';

if(game.win > game.lose){
    result = bot1 + " beats " + bot2;
}else if(game.win === game.lose){
    console.log('tied game');
} else if (game.lose > game.win) {
    result += bot2 + ' beats ' + bot1;
}
console.log(result);