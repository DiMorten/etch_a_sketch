
const container = document.querySelector('#container');
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function createBoard(gridSize) {
    
    for (i=0; i<gridSize; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        container.appendChild(rowDiv);
        for (j=0; j<gridSize; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.setAttribute('class', 'box');
            boxDiv.setAttribute('id', 'box_' + j.toString() + '_' + i.toString());
            
            boxDiv.addEventListener('mouseover', changeColor)
            boxDiv.addEventListener('mousedown', changeColor)

            rowDiv.appendChild(boxDiv);        
        }
    }

}

function changeColor(e) {
    
    if (e.type === 'mouseover' && !mouseDown) return    
        this.classList.add("box-mouseover");    
}

function clearBoard() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.classList.remove("box-mouseover"));
}

function deleteBoard() {
    while (container.firstChild) 
        container.removeChild(container.lastChild);
}

function promptBoardSize(msg_base, maxLimit) {
    let n = 0; 
    do {
        n++;
        msg = (n > 1) ? "You exceeded the maximum limit! \n" + msg_base : msg_base; 
        gridSize = prompt(msg, "16");
    }
    while (gridSize > maxLimit)
    return gridSize
}

function resetCallback(e) {
    clearBoard();
    gridSize = promptBoardSize("Define new grid size (Maximum limit 100).", 100);
    deleteBoard();
    createBoard(gridSize);
}
createBoard(16);


const button = document.querySelector('button');
button.addEventListener('click', resetCallback);

