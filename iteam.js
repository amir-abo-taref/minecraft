export let chooseiteams = "",
  axe = document.querySelector("#axe"),
  pickaxe = document.querySelector("#pickaxe"),
  shovel = document.querySelector("#shovel"),
  pail = document.querySelector("#pail"),
  grass = document.querySelector(".grass"),
  lava = document.querySelector(".lava"),
  soil = document.querySelector(".soil"),
  stone = document.querySelector(".stone"),
  treeBranch = document.querySelector(".treeBranch"),
  treeTrunck = document.querySelector(".treeTrunck"),
  water = document.querySelector(".water"),
  smoke = document.querySelector(".smoke");

export function addmetrials() {
  axe.addEventListener("click", function () {
    setchoosingiteam("axe");
  });
  pickaxe.addEventListener("click", function () {
    setchoosingiteam("pickaxe");
  });
  shovel.addEventListener("click", function () {
    setchoosingiteam("shovel");
  });
  pail.addEventListener("click", function () {
    setchoosingiteam("pail");
  });
  grass.addEventListener("click", function () {
    setchoosingiteam("grass");
  });
  lava.addEventListener("click", function () {
    setchoosingiteam("lava");
  });
  soil.addEventListener("click", function () {
    setchoosingiteam("soil");
  });
  stone.addEventListener("click", function () {
    setchoosingiteam("stone");
  });
  treeBranch.addEventListener("click", function () {
    setchoosingiteam("treeBranch");
  });
  treeTrunck.addEventListener("click", function () {
    setchoosingiteam("treeTrunck");
  });
  water.addEventListener("click", function () {
    setchoosingiteam("water");
  });
  smoke.addEventListener("click", function () {
    setchoosingiteam("smoke");
  });
}
//make active //
function setchoosingiteam(type) {
  if (chooseiteams.length > 0) {
    
      let lastchoosingiteams = document.querySelector(`.${chooseiteams}`);
      let currendchoosingiteams = document.querySelector(`.${type}`);
      lastchoosingiteams.classList.remove("active");
      currendchoosingiteams.classList.add("active");
 
  } else {
   
      let currendchoosingiteams = document.querySelector(`.${type}`);
      currendchoosingiteams.classList.add("active");
    
  }
  chooseiteams = type;
  console.log(chooseiteams);
}
