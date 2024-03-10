let bubbles=document.getElementsByClassName("bubble");
let curs=document.querySelector(".cursor");
console.log(curs.style);

console.log(bubbles);

function p(){
    console.log("working")
}

for(let i=0; i<bubbles.length; i++){
    bubbles[i].addEventListener("click",()=>{
        console.log("clicked");
        bubbles[i].style.display="none";
        setTimeout(()=>{
            bubbles[i].style.display="flex";
        }, 1000);
        // bubbles[i].style.display="block";
    })
}

let animationBlock=document.getElementById("background-wrap")
var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 100) {
      animationBlock.style.display = "none"
    } else {
      animationBlock.style.display = "block"
    }
  };
  
  window.addEventListener("scroll", myScrollFunc);
