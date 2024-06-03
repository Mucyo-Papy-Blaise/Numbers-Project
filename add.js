const myText = document.getElementById("myText");
const Reduce = document.getElementById("Reduce");
const Reset = document.getElementById("Reset");
const Add = document.getElementById("Add");
let num = 0;

function reduce(){
    num--;
    myText.textContent = num;
}
const add=()=>{
    num++;
    myText.textContent = num;
}
const reset=()=>{
    num = 0;
    myText.textContent = num;
}