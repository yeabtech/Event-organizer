var full=document.getElementById("full");
var fullimg=document.getElementById("fullimg");

function openfullimg(pic){
    full.style.display = "flex";
    fullimg.src= pic;
}

function closefullimg(){
    full.style.display = "none";
    
}