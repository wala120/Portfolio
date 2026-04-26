// typing
const text = "Hi, I'm Wala Abdulaziz";
let i = 0;

function type(){
const el = document.getElementById("typing");
if(!el) return;

if(i < text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(type,70);
}
}
window.onload = type;


// lightbox
const imgs = document.querySelectorAll(".project img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

imgs.forEach(img=>{
img.onclick=()=>{
lightbox.style.display="flex";
lightboxImg.src=img.src;
}
});

lightbox.onclick=()=>{
lightbox.style.display="none";
}


// scroll top
const topBtn = document.getElementById("topBtn");

window.onscroll=()=>{
topBtn.style.display = window.scrollY>300?"block":"none";
};

topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"});
};


// menu
const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

menu.onclick=()=>{
nav.classList.toggle("active");
};