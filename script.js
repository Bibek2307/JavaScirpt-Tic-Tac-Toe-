let boxes =document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let msg=document.querySelector("#msg");
let win=document.querySelector(".winner");
let newgame=document.querySelector(".new");

let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enalbleBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newgame.addEventListener("click",()=>{
    turnO=true;
    win.classList.add("hide");
    enalbleBoxes();
})

reset.addEventListener("click",()=>{
    turnO=true;
    enalbleBoxes();
    win.classList.add("hide");
})

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    win.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});

const checkwinner = ()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
            }
        }
    }
};