const colors = ["red", "yellow", "green", "blue"];
let heading = document.querySelector(".heading");
let arr = [];
var start = false;
var level=0;
var highScore=0;

function addColor() {
    if (start) {
        const chosenColor = colors[Math.floor(Math.random()*4)];
        arr.push(chosenColor);
        level++;
        heading.innerText = `Level ${level}`;
        if (level>highScore){
            document.querySelector("#highscore").innerText = `highscore=${highScore}`;
            highScore=level;
        }
    }
    console.log(arr);
}
function startGame() {
    window.addEventListener("keypress", ()=>{
        level = 0;
        arr=[];
        start=true;
        addColor();
    });
}
startGame();

document.querySelectorAll(".box").forEach((x)=>{
    x.addEventListener("click", ()=>{
        if (x.getAttribute("id").toString()==arr[level-1]) {
            addColor();
            x.classList.add("clicked");
            setTimeout(()=>{
                x.classList.remove("clicked");
            }, 0.5);
        }
        else {
            start=false;
            heading.innerText = "game end! press key to start again";
            startGame();
        }
    });
});
