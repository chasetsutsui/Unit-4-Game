// global variables
var userPoints = 0;
var targetValue = 0;
var wins = 0;
var losses = 0;
var redGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var blueGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var redGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var blueGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

var audio = new Audio("http://peal.io/download/ivtnl");
var audio1 = new Audio("assets/Cash.wav");
var audio2 = new Audio("assets/Yay.wav");

// function to run every time a game starts, new target value, 0 user points, new value for each gem
function startGame() {
    var userPoints = 0;
    targetValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    $("#currentNumber").html(userPoints);
    $("#targetNumber").html(targetValue);
    redGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    blueGem1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    redGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    blueGem2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;



}

// everytime a gem is clicked these functions run, add to user userPoints, play audio, check to see if user has won or lost
$("#red1").click(function () {

    userPoints = userPoints + redGem1;
    console.log(userPoints);
    console.log(redGem1);
    audio1.currentTime = 0;
    audio1.play();

    $("#currentNumber").html(userPoints);
    if (userPoints > targetValue) {
        audio.currentTime = 0;
        audio.play();
        alert("you lose");
        losses++;
        $("#losses").html(losses);
        userPoints = 0;
        startGame();
    }
    else if (userPoints === targetValue) {
        wins++;
        $("#wins").html(wins);
        userPoints = 0;
        audio2.currentTime = 0;
        audio2.play();
        alert("You Win!!");
        startGame();

    }


});


$("#blue1").click(function () {
    userPoints = userPoints + blueGem1;
    $("#currentNumber").html(userPoints);
    console.log(userPoints);
    console.log(blueGem1);
    audio1.currentTime = 0;
    audio1.play();

    $("#currentNumber").html(userPoints);
    if (userPoints > targetValue) {
        audio.currentTime = 0;
        audio.play();
        alert("you lose");
        losses++;
        $("#losses").html(losses);
        userPoints = 0;

        startGame();
    }
    else if (userPoints === targetValue) {
        wins++;
        $("#wins").html(wins);
        userPoints = 0;
        audio2.currentTime = 0;
        audio2.play();
        alert("You Win!!");
        startGame();

    }


});

$("#red2").click(function () {

    userPoints = userPoints + redGem2;

    $("#currentNumber").html(userPoints);
    console.log(redGem2);
    audio1.currentTime = 0;
    audio1.play();

    $("#currentNumber").html(userPoints);
    if (userPoints > targetValue) {
        audio.currentTime = 0;
        audio.play();
        alert("you lose");
        losses++;
        $("#losses").html(losses);
        userPoints = 0;
        startGame();
    }
    else if (userPoints === targetValue) {
        wins++;
        $("#wins").html(wins);
        userPoints = 0;
        audio2.currentTime = 0;
        audio2.play();
        alert("You Win!!");
        startGame();

    }


});

$("#blue2").click(function () {
    userPoints = userPoints + blueGem2;
    $("#currentNumber").html(userPoints);
    console.log(blueGem2);
    audio1.currentTime = 0;
    audio1.play();

    $("#currentNumber").html(userPoints);
    if (userPoints > targetValue) {
        audio.currentTime = 0;
        audio.play();
        alert("you lose");
        losses++;
        $("#losses").html(losses);
        userPoints = 0;
        startGame();
    }
    else if (userPoints === targetValue) {
        wins++;
        $("#wins").html(wins);
        userPoints = 0;
        audio2.currentTime = 0;
        audio2.play();
        alert("You Win!!");
        startGame();

    }



});

startGame();