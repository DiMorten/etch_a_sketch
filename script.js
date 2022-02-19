
const container = document.querySelector('#container');

function createGrid() {
    for (i=0; i<16; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');
        container.appendChild(rowDiv);
        for (j=0; j<16; j++) {
            const boxDiv = document.createElement('div');
            boxDiv.setAttribute('class', 'box');
            boxDiv.setAttribute('id', 'box_' + j.toString() + '_' + i.toString());
            
            rowDiv.appendChild(boxDiv);        
        }
    }
}

function boxMouseoverCallback(e) {    
    this.classList.add("box-mouseover");    
}

function boxMouseoutCallback(e) {    
    this.classList.remove("box-mouseover");    
}
createGrid();

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => box.addEventListener('mouseover', boxMouseoverCallback));
boxes.forEach(box => box.addEventListener('mouseout', boxMouseoutCallback));

