let boxes = document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg=document.querySelector(".msg");
let msgPara=document.querySelector("#msg-para");

let playerO = true; //playerX,playerY
let count=0; //to track draw condition
const winPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () => {
    playerO = true;
    count=0;
    enableBox( );
    msg.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",( ) =>{
        if(playerO){
            box.innerText = "O";
            playerO=false;
        }
        else{
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner( );
        if(count === 9 && !isWinner ){
         gameDraw();   
        }
    });
    
});

const gameDraw = () => {
    msgPara.innerText = "game was a draw ,Try Again!!!";
    msg.classList.remove("hide");
    disbaleBox();
};

 const disbaleBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
 }

 const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = " ";
    }
 }


const showWinner = (winner) =>{
    msgPara.innerText = `congratulations!!! ,The Winner is ${winner}`;
    msg.classList.remove("hide");
    disbaleBox();
}

const checkWinner = () => {
    for (let pattern of winPattern){
        let pos1= boxes[pattern[0]].innerText; 
        let pos2= boxes[pattern[1]].innerText;
        let pos3= boxes[pattern[2]].innerText;

        if(pos1 != " " && pos2!="" && pos3 != " "){
            if(pos1 ===pos2 && pos2===pos3){
                 disbaleBox();
                showWinner( pos1);
                return true;
            }
        }
    }

};

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
