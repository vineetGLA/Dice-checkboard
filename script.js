let body=document.querySelector("body");
let container=document.createElement("div");
container.classList.add("container");
body.appendChild(container);
let start=1;

// creating a div element
function addingDiv(row,i,color){
    let div=document.createElement("p");
    div.classList.add(`box-${i}`);
    div.innerHTML=i;

    div.style.backgroundColor=`${color}`;
    div.style.color=color=='white'?'black':'white';
    div.style.padding = '10px 2px';
   div.style.display='flex';
   div.style.justifyContent='center';
   div.style.alignItems='center';
   div.style.fontSize='30px';
    div.style.fontWeight='bold';
    div.style.overflow='hidden';
    
    row.appendChild(div);
    div.style.letterSpacing='5px';
    
}


// adding a div element

for(let i=1;i<=10;i++){
 
    let startColor=i&1 ? 'black':'white';
    let row=document.createElement("div");
    row.style.display='grid';
    row.style.gridTemplateColumns='repeat(10,1fr)';
    row.style.width='100vw';
    row.classList.add(`row-${i}`);
  for(let j=1;j<=10;j++){

          addingDiv(row,(i-1)*10+j,startColor);
          startColor=startColor=='white'?'black':'white';
   
  }
    container.appendChild(row);
 
}

// adding control of dice
let controlBox=document.createElement("div");
controlBox.classList.add("controlBox");
controlBox.style.display='flex';
body.appendChild(controlBox);



//rolling dice
let dice=document.createElement("div");
dice.classList.add("dice");
dice.innerHTML="Roll Dice";
dice.style.backgroundColor='blue';
dice.style.color='yellow';
dice.style.padding='10px 20px';
dice.style.cursor='pointer';
controlBox.appendChild(dice);

//reset game
let reset=document.createElement("div");
reset.classList.add("reset");
reset.innerHTML="Reset Game";
reset.style.backgroundColor='green';
reset.style.padding='10px 20px';
reset.style.cursor='pointer';
controlBox.appendChild(reset);

//showing res

let res=document.createElement("div");
res.classList.add("res");
res.style.padding='10px 20px'
controlBox.appendChild(res);



function showingRes(number){

res.innerHTML=`Dice-Result=${number}`;
}

//getting random number [1-6]

function getRandomNumber(){
    return Math.floor(Math.random()*6)+1;
}


//adding event listener to dice

dice.addEventListener("click",function(){
    let number=getRandomNumber();
    showingRes(number);
  
    if(start+number<=100){
        start+=number;
    let redBox=document.querySelector(".redBox");
    redBox.remove();
   
    let currentBox=document.querySelector(`.box-${start}`);
  
     currentBox.appendChild(redBox);
   if(start==100){
    alert("Game Over");
   }
    }
  
  
   
});


//red box
let p=document.createElement("div");
p.style.backgroundColor='red';
p.style.height='20px';
p.style.width='40px';
p.classList.add("redBox");



let redBox=document.querySelector(".box-1");
redBox.appendChild(p);



//reset game
reset.addEventListener("click",function(){
    start=1;
    let redBox=document.querySelector(".redBox");
    redBox.remove();
    let currentBox=document.querySelector('.box-1');
    currentBox.appendChild(redBox);
})







