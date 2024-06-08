let nxt = document.querySelectorAll(".next");
let back= document.querySelectorAll(".back");
let confirm = document.querySelector(".confirm");

nxt.forEach(btn =>{
    btn.addEventListener("click",function(){
        let v=btn.value;
        v=parseInt(v);
        document.querySelector("#step-"+v).classList.toggle("hidden");
        v=v+1;
        let i="#step-"+v;
        document.querySelector(""+i).classList.toggle("hidden");
    });
});

back.forEach(btn => {
    btn.addEventListener("click",function(){
        let v =parseInt(btn.value);
        let prev=v+1
        document.querySelector("#step-"+prev).classList.toggle("hidden");
        document.querySelector("#step-"+v).classList.toggle("hidden");
    });
});

confirm.addEventListener("click",function(){
    document.querySelector("#step-4").classList.toggle("hidden");
    document.querySelector("#step-5").classList.toggle("hidden");
});