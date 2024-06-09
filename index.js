let nxt = document.querySelector(".next");

let x=1;

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



function conf(){
    document.querySelector("#step-4").classList.toggle("hidden");
    document.querySelector("#step-5").classList.toggle("hidden");
    document.querySelector(".pg-control").style.display = "none";
}

nxt.addEventListener("click",function(){
    document.querySelector("#step-"+x).classList.toggle("hidden");
    
    indicator(x,0);
    x=x+1;
    if(x>1){
        document.querySelector(".back").classList.remove("hidden")
    }
    document.querySelector("#step-"+x).classList.toggle("hidden");
    if(x===4){
        document.querySelector(".confirm").classList.remove("hidden");
        nxt.classList.add("hidden");
    }
    
});

function back(){

    document.querySelector("#step-"+x).classList.toggle("hidden");
    x=x-1
    document.querySelector("#step-"+x).classList.toggle("hidden");
    if(x<2){
        document.querySelector(".back").classList.add("hidden")
    }
    if(x!==4){
        document.querySelector(".confirm").classList.add("hidden");
        nxt.classList.remove("hidden");
    }
    indicator(0,x);
}
// back.addEventListener("click",function(){
//     let prev=y+1
//     document.querySelector("#step-"+prev).classList.toggle("hidden");
//     document.querySelector("#step-"+y).classList.toggle("hidden");
//     indicator(0,y);
// });


