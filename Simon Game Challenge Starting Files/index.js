$(document).on("keydown", function(){
    startGame();
})

let gameStarted = false;

function startGame(){
    gameStarted = true;
    var btnSequence = [];

        var randomButton = $("div.btn")[Math.floor(Math.random() * 4)];
        btnSequence.push(randomButton);
        btnSequence.forEach(btn => {
            buttonAnimation(btn);
            playSound($(randomButton).attr("id"));
        })

}

function buttonAnimation(button) {
    button.classList.add("pressed");
    setTimeout(function () {
        button.classList.remove("pressed");
    }, 100);
}

function playSound(id) {
    var src = "sounds/" + id + ".mp3";
    new Audio(src).play();
}