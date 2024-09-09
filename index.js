
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function display(){
    var bval=this.innerHTML;
    makesound(bval);
    buttoneffect(bval);
});
document.querySelectorAll(".drum")[i].addEventListener("keydown",function (event){
    makesound(event.key);
    buttoneffect(event.key);
});
}
function makesound(bval){
    switch (bval) {
        case "w":
            var audio=new Audio("crash.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("kick-bass.mp3");
            audio.play();
            break; 
        case "s":
            var audio=new Audio("snare.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("tom-2.mp3");
            audio.play();
            break;   
        case "k":
            var audio=new Audio("tom-3.mp3");
            audio.play();
            break; 
        case "l":
            var audio=new Audio("tom-4.mp3");
            audio.play();
            break;               
        default:
            break;
    }
};

function buttoneffect(bval){
var buttonp=document.querySelector("."+bval);
buttonp.classList.add("pressed");
setTimeout(function(){
    buttonp.classList.remove("pressed");
},100);



};

