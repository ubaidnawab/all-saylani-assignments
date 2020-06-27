// alert("i am working");

let boxIds = ['color-box1','color-box2','color-box3','color-box4','color-box5','color-box6'];
var arrLenght = boxIds.length;
function getRamdomBox(max,min){
    let a = max -min +1;
    let b = Math.random()*a;
   var result = Math.floor(b)+min;
    return result;
}
let btn = document.querySelector("button");
var h3 = document.querySelector("h3");
// var  id = document.getElementById();

btn.addEventListener('click',()=>{

    let index = getRamdomBox(0,arrLenght-1);
    h3.textContent = boxIds[index];

})