import { chooseiteams, addmetrials,grass,soil,water,lava,pail,smoke,treeBranch,treeTrunck,stone } from "./iteam.js";
const wordGrid =document.querySelector(".world-matrix");
const worldMatrix = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 6, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0],
  [0, 6, 6, 6, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 6, 6, 6, 0],
  [6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6],
  [0, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0],
  [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
  [0, 0, 5, 0, 0, 4, 4, 0, 0, 0, 5, 5, 0, 0, 0, 4, 4, 0, 0, 0, 5, 0, 0],
  [0, 0, 5, 0, 4, 4, 4, 7, 7, 7, 5, 5, 7, 7, 7, 4, 4, 4, 0, 0, 5, 0, 0],
  [0, 0, 5, 4, 4, 4, 4, 7, 7, 7, 5, 5, 7, 7, 7, 4, 4, 4, 4, 0, 5, 0, 0],
  [3, 3, 3, 3, 3, 3, 3, 7, 7, 7, 5, 5, 7, 7, 7, 3, 3, 3, 3, 3, 3, 3, 3],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
  [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
];
initWorldMatrix(worldMatrix);
function initWorldMatrix(matrix) {
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
     
      screateelement(matrix, row, col);
    }
  }
  addmetrials();

}

function screateelement(matrix, row, col) {
  

    switch(matrix[row][col]) {
    case 0:
      createelement('empty',row,col);
      break;
    case 1:
      createelement('smoke',row,col);
      break;
    case 2:
      createelement('soil',row,col);
      break;
    case 3:
      createelement('grass',row,col);
      break;
    case 4:
      createelement('stone',row,col);
      break;
    case 5:
      createelement('treeTrunck',row,col);
      break;
    case 6:
      createelement('treeBranch',row,col);
      break;
    case 7:
      createelement('water',row,col)
      break;
    case 8:
      createelement('lava',row,col)
      break;
  }
}

function createelement(type,row,col) {
  let box = document.createElement("div");
  box.classList.add(type);
  box.style.gridRowStart = row;
  box.style.gridColumnStart = col;
  box.addEventListener("click",  (e)=> {
    handleClick(e);
  });
  wordGrid.appendChild(box);
  
}

function handleClick(e) {
  console.log('click');
  switch (chooseiteams) {
    case "axe":
      useaxe(e);
      break;
    case "pickaxe":
      usepickaxe(e);
      break;
    case "shovel":
      useshovel(e);
      break;
    case "pail":
      usepail(e);
      break;
    case "grass":
       if(e.target.classList.contains("empty")&&grass.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         grass.innerHTML--}
      
      break;
    case "lava":
       if(e.target.classList.contains("empty")&&lava.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         lava.innerHTML--}
      break;
    case "soil":
       if(e.target.classList.contains("empty")&&soil.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         soil.innerHTML--}
      break;
    case "stone":
       if(e.target.classList.contains("empty")&&stone.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         stone.innerHTML--}
      break;
    case "treeBranch":
       if(e.target.classList.contains("empty")&&treeBranch.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         treeBranch.innerHTML--}
      break;
    case "treeTrunck":
       if(e.target.classList.contains("empty")&&treeTrunck.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         treeTrunck.innerHTML--}
      break;
    case "water":
       if(e.target.classList.contains("empty")&&water.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         water.innerHTML--}
      break;
    case "smoke":
       if(e.target.classList.contains("empty")&&smoke.innerHTML>0){
         e.target.classList.add(chooseiteams)        
         smoke.innerHTML--}
      break;
  }
}
function useaxe(e) {
  console.log(e);
  if(e.target.classList.contains('treeTrunck')){
    const wood = document.querySelector('.treeTrunck');
    e.target.classList.remove('treeTrunck');
    e.target.classList.add("empty");
    wood.textContent=parseInt(wood.textContent)+1+"";
  }
  if(e.target.classList.contains('treeBranch')){
    const leaves = document.querySelector('.treeBranch');
    e.target.classList.remove('treeBranch');
    e.target.classList.add("empty");
    leaves.textContent=parseInt(leaves.textContent)+1+"";
  }
  else{
    document.querySelector('.axe').style.backgroundColor = "red";
  }
}
function  usepickaxe(e) {
  if(e.target.classList.contains('stone')){
    const stone = document.querySelector('.stone');
    e.target.classList.remove('stone');
    e.target.classList.add("empty");
    stone.textContent=parseInt(stone.textContent)+1+"";
  }
}
function  useshovel(e) {
  if(e.target.classList.contains('grass')){
    const grass = document.querySelector('.grass');
    e.target.classList.remove('grass');
    e.target.classList.add("empty");
    grass.textContent=parseInt(grass.textContent)+1+"";
  }
  if(e.target.classList.contains('soil')){
    const soil = document.querySelector('.soil');
    e.target.classList.remove('soil');
    e.target.classList.add("empty");
    soil.textContent=parseInt(soil.textContent)+1+"";
  }
}
function  usepail(e) {
  if(e.target.classList.contains('water')){
    const water = document.querySelector('.water');
    e.target.classList.remove('water');
    e.target.classList.add("empty");
    water.textContent=parseInt(water.textContent)+1+"";
  }
  if(e.target.classList.contains('lava')){
    const smoke = document.querySelector('.lava');
    e.target.classList.remove('lava');
    e.target.classList.add("empty");
    smoke.textContent=parseInt(smoke.textContent)+1+"";
  }
}


 



