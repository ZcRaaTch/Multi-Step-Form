let nxt = document.querySelectorAll(".next");
let back= document.querySelectorAll(".back");
let confirm = document.querySelector(".confirm");

let x=0;
let y=0;

function indicator(val1=0, val2=0){
    if(val1){
        document.querySelector(`[value="${val1}"]`).classList.toggle("indicator");
        document.querySelector(`[value="${val1+1}"]`).classList.toggle("indicator");
    }
    if(val2){
        document.querySelector(`[value="${val2+1}"]`).classList.toggle("indicator");
        document.querySelector(`[value="${val2}"]`).classList.toggle("indicator");
    }
    
}

nxt.forEach(btn =>{
    btn.addEventListener("click",function(){
        x=parseInt(btn.value);
        document.querySelector("#step-"+x).classList.toggle("hidden");
        indicator(x,0);
        x=x+1;
        document.querySelector("#step-"+x).classList.toggle("hidden");
        
    });
});

back.forEach(btn => {
    btn.addEventListener("click",function(){
        y =parseInt(btn.value);
        let prev=y+1
        document.querySelector("#step-"+prev).classList.toggle("hidden");
        document.querySelector("#step-"+y).classList.toggle("hidden");
        indicator(0,y);
    });
});

confirm.addEventListener("click",function(){
    document.querySelector("#step-4").classList.toggle("hidden");
    document.querySelector("#step-5").classList.toggle("hidden");
});