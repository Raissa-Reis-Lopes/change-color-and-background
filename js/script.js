//Declaring background variables
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
const bg4 = document.querySelector(".bg-4");

//Declaring txt variables
const txt1 = document.querySelector(".txt-1");
const txt2 = document.querySelector(".txt-2");
const txt3 = document.querySelector(".txt-3");
const txt4 = document.querySelector(".txt-4");


const background = document.getElementById("bgText");
const title = document.getElementById("title");
const text = document.getElementById("text");


//Functions to change the background
bg1.addEventListener("click", function(){
    background.style.backgroundColor = "rgb(69, 0, 75)"; 
})

bg2.addEventListener("click", function(){
    background.style.backgroundColor = "rgb(0, 0, 0)"; 
})

bg3.addEventListener("click", function(){
    background.style.backgroundColor = "rgb(255, 255, 255)"; 
})

bg4.addEventListener("click", function(){
    background.style.backgroundColor = "rgb(2, 216, 84)"; 
})

txt1.addEventListener("click",function(){
    text.style.color = "rgb(74, 238, 211)";
    title.style.color = "rgb(74, 238, 211)";
})

txt2.addEventListener("click",function(){
    text.style.color = "rgb(255, 252, 252)";
    title.style.color = "rgb(255, 252, 252)";
})

txt3.addEventListener("click",function(){
    text.style.color = "rgb(255, 0, 234)";
    title.style.color = "rgb(255, 0, 234)";
})

txt4.addEventListener("click",function(){
    text.style.color = "black";
    title.style.color = "black";
})









