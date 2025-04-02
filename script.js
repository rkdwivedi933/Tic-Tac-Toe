const reset = document.querySelector(".Reset-Game");
reset.addEventListener("click",function(){
    resetBoard();
    
    
})
const cells = document.getElementsByClassName("cell");


let currentPlayer = 'X';
let winPattern = [
    [0,1,2], [3,4,5],[6,7,8],
    [0,4,8],[2,4,6],
    [0,3,6],[1,4,7],[2,5,8]
]

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function() {
        if (this.textContent === '') { 
            this.textContent = currentPlayer;
            
            if(checkWinner ()){
                alert(`Player ${currentPlayer} wins!`);
                console.log(currentPlayer,"win")
                
            }
            if (currentPlayer === 'X') { 
                currentPlayer = 'O'; 
            } else if (currentPlayer === 'O') {  
                currentPlayer = 'X'; 
            }
           
        }
    });
}

function checkWinner() {
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        if (
            cells[a].textContent === currentPlayer &&
            cells[b].textContent === currentPlayer &&
            cells[c].textContent === currentPlayer
        ) {
            return true; 
        }
    }
    return false;
}
function resetBoard(){
    for(let i = 0; i<cells.length; i++){
        cells[i].textContent = '';

    }
    currentPlayer = 'x'
}