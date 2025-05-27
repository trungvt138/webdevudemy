var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "a":
                new Audio("sounds/tom-2.mp3").play();
                break;

            case "w":
                new Audio("sounds/tom-1.mp3").play();
                break;

            case "s":
                new Audio("sounds/tom-3.mp3").play();
                break;

            case "d":
                new Audio("sounds/tom-4.mp3").play();
                break;

            case "j":
                new Audio("sounds/crash.mp3").play();
                break;

            case "k":
                new Audio("sounds/kick-bass.mp3").play();
                break;

            case "l":
                new Audio("sounds/snare.mp3").play();
                break;
        }
    })
}

// const audio = new Audio('sounds/tom-1.mp3');
// audio.play();