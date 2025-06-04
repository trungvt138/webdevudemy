var buttonColors = ["red", "green", "blue", "yellow"];
var buttonPattern = [];
var userClickedPattern = [];
var gameStarted = false;
var level = 0;
var highestLevel = 0;

$(document).on("keydown", function() {
    if (!gameStarted) {
        $("body").removeClass("game-over");
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
})

$(".btn").on("click", function() {
    if (gameStarted) {
        var userChosenColor = $(this).attr("id");
        animateButtonPressed(userChosenColor);

        if (!checkAnswer(userChosenColor)) {
            startOver();
        } else {
            playSound(userChosenColor);
        }
    }
})

function checkAnswer(userChosenColor) {
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    console.log(userClickedPattern[userClickedPattern.length - 1]);
    console.log(buttonPattern[userClickedPattern.length - 1]);
    if (userClickedPattern[userClickedPattern.length - 1] === buttonPattern[userClickedPattern.length - 1]) {
        if (userClickedPattern.length === buttonPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);

        }
        return true;
    }
    else {
        if (highestLevel < level) {
            highestLevel = level;
        }
        $("#level-title").text("Wrong Color! Press Any Key To Start Over!").append("<h2 id=\"level-title\">Highest Level: " + highestLevel + "</h2>");
        $("h2").css("font-size", "1.5rem");
        new Audio("sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        return false;
    }
}

function nextSequence() {
    level++;
    userClickedPattern = [];
    var randomChosenColor = buttonColors[Math.floor(Math.random() * buttonColors.length)];
    buttonPattern.push(randomChosenColor);
    playSound(randomChosenColor);
    $("#level-title").text("Level " + level);
    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animateButtonPressed(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(currentColor) {
    new Audio("sounds/"+currentColor+".mp3").play();
}

function startOver() {
    level = 0;
    buttonPattern = [];
    // $("h2").remove();
    gameStarted = false;
}

