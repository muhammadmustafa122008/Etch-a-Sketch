const container = document.querySelector(".grid");
const clear = document.querySelector(".clear");
const resize = document.querySelector(".resize");

let isDrawing = false;
// building the grid
function createGrid (n){
  container.innerHTML = "";
  const frag = document.createDocumentFragment();
  const size = Math.floor(container.clientWidth/n);

for (let i = 0 ; i<n*n ; i++ ) {
    const cell = document.createElement('div')
    cell.classList.add('cell')
    cell.style.width = `${size}px`;
    cell.style.height = `${size}px`;
    cell.style.flex = `0 0 ${size}px`;
    frag.appendChild(cell);
}
container.appendChild(frag);
}

// drawing logic

container.addEventListener('mousedown', (e) => {
   if(e.target.classList.contains('cell')){
    isDrawing = true;
    e.target.style.backgroundColor = 'black'
   }
});

container.addEventListener('mouseover', (e) => {
  if (!isDrawing) return; 
  if (e.target.classList.contains('cell')) {
    e.target.style.backgroundColor = 'black';
  }
});
window.addEventListener('mouseup', () => isDrawing = false);
// clearing the grid
clear.addEventListener("click",() =>{
    document.querySelectorAll('.cell').forEach((c) => (
    c.style.backgroundColor = 'white'
    )); 
} );
// resizing the grid 
 resize.addEventListener('click',() => {
 const answer = prompt("Enter a number (from 1 to 100): "); 
 const n = Number(answer);
 if(!n || n < 1 || n> 100 ) 
  return alert("Invalid input!");
createGrid(n)
});
createGrid(16)