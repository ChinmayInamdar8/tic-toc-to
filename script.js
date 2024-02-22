let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
let winMsg = document.getElementById('deside_winner');
let newGame = document.querySelector('.new_game');

let turn = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];




boxes.forEach((box) =>
{
    box.addEventListener('click', () =>
    {
        if(turn)
        {
            box.innerText = 'O';
            turn = false;

        }
        else{
            box.innerText = 'X';
            turn = true;
        }
        box.disabled = true;

        checkwinner();

    });
});


const checkwinner = () =>
{
    for(pattern of winPatterns)
    {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!='' && pos2Val !="" && pos3Val !='')
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                console.log("Winner is :- " + pos1Val);
                winMsg.innerText += pos1Val;

                clearThings();
            }
        }
    }
};

const clearThings = () =>
{
    for(let box of boxes)
    {
        box.disabled = true;
    }
};


const resetGame = () =>
{
    turn = true;
    elableBoxes();
    winMsg.innerText = "Winner :-";
};


const elableBoxes = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
};


newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

