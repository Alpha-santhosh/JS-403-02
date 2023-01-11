var btn = document.querySelectorAll(".drum").length
// console.log(btn)
for(var i=0;i<btn;i++){
    // console.log(document.querySelectorAll(".drum")[i].innerHTML)
    document.querySelectorAll(".drum")[i].addEventListener("click",clicked)
    function clicked(){
        var btn_txt= this.innerHTML
        // console.log(btn_txt)
        anim(btn_txt)
        makesound(btn_txt)
    }
}

document.body.addEventListener("keydown",e=>{
    // console.log(e.key)
    makesound(e.key)
    anim(e.key)
})

function anim(key) {
    var active = document.querySelector("."+key)
    // console.log(active)
    active.classList.add("pressed")
    setTimeout(e=>{
        active.classList.remove("pressed")
    },100)
}

function makesound(key) {
    switch(key)
    {
        case "w":
            var w= new Audio("sounds/w.mp3");
            w.play();
            break;
        case "a":
            var a= new Audio('sounds/a.mp3');
            a.play();
            break;
        case "s":
            var s= new Audio('sounds/s.mp3');
            s.play();
            break;
        case "d":
            var d= new Audio('sounds/d.mp3');
            d.play();
            break;
        case "j":
            var j= new Audio('sounds/j.mp3');
            j.play();
            break;
        case "k":
            var k= new Audio('sounds/k.mp3');
            k.play();
            break;
        case "l":
            var l= new Audio('sounds/l.mp3');
            l.play();
            break;
        default: console.log(key);
    }
}