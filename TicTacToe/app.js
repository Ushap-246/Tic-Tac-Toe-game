let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX, playerO

const winPatterns = [    //here we have used 2D array to store the winner pattern as discussed in the theory
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

};


boxes.forEach ((box) => {
    box.addEventListener('click', () =>{
        console.log("The box was clicked");
        if(turnO){
            box.innerText = "O";//if player O's turn we should make the value as false so that the player X will have the turn here
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;//here to make sure that if the player clicks on the button twice the value should not change

        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};


const showWinner = (winner) =>{
    msg.innerText = `Congratulations! the winner is ${winner}`;
    msgContainer.classList.remove("hide"); //here when the winner is declared we are removing the hide function
     disableBoxes();
};

const checkWinner = () => {
    for(pattern of winPatterns) {
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;

         if(pos1Val !="" && pos2Val != ""  && pos3Val !=""){
            if(pos1Val === pos2Val &&  pos2Val === pos3Val){
                console.log("WINNER", pos1Val);

                showWinner(pos1Val);
         }
    }
}

};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

  