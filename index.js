
noOfDrums = document.querySelectorAll(".drum");

// On clicking with the mouse
for (let i = 0; i < noOfDrums.length; i++) {
    let drums = document.querySelectorAll(".drum")[i];
    drums.addEventListener('click', function() {
        letters = this.innerHTML;
        makeSound(letters);
        buttonAnimation(letters);
    });
}

//on pressing key on keyboard
document.addEventListener('keypress', function(event){
    keyboardLetters = event.key;
    makeSound(keyboardLetters);
    buttonAnimation(keyboardLetters);
})


// function to play sound
function makeSound(key){
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
        let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;  
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;


        case "l":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;


        default:
            console.log(letters);
            break;
    }
}

// Animation when pressed or click

function buttonAnimation(key){
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

