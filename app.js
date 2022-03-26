const greetTag = document.querySelector("#greet");
const toggleclick = document.querySelector("#toggle");
toggleclick.onclick = () => {
    greetTag.classList.toggle("active");
};
const dissclick = document.querySelector("#diss");
 dissclick.onclick = () => {
    greetTag.classList.toggle("active1");
 }
 const sizeclick = document.querySelector("#size");
 sizeclick.onclick = () => {
   greetTag.classList.toggle("active2")
 }
 const circleclick = document.querySelector("#circle");
 circleclick.onclick = () => {
   greetTag.classList.toggle("active3");
 }
 const changeclick = document.querySelector("#change");
 changeclick.onclick = () => {
   greetTag.innerHTML = 'tenology school';
 }