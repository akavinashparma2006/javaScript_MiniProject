let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

let started = false;
let level = 0;

document.addEventListener("keydown", function () {

    if (started == false) {
        console.log("game is started");

        started = true;

        levelUp();
    }

});

function gameFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {

    userseq=[];

    level++;

    h2.innerText = `Level ${level}`;

    // random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];

    let randBtn = document.querySelector(`.${randColor}`);
    gameseq.push(randColor);

    gameFlash(randBtn);
    

}


function checkAns(idx){
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length== gameseq.length){
        
            setTimeout(levelUp,1000);
        }
        
    } else{

        wrong();

        h2.innerText = `Game Over Place any key to start  your score was ${level*5}`;

        reset();

    }

}



function btnpress() {

    let btn = this;
    userFlash(btn);
    userColor=btn.getAttribute("id")

    userseq.push(userColor)
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}


function reset(){
    gameseq = [];
    userseq = [];
    started = false;
    level = 0;

}


function wrong(){
    let bodyelement =document.querySelector("body");
    bodyelement.classList.add("wrongflash");

    setTimeout(function () {
        bodyelement.classList.remove("wrongflash");
    }, 500);

}