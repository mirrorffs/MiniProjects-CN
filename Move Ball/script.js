
var ball = document.getElementById('ball');

ball.style.top = ball.offsetTop + "px";
ball.style.left = ball.offsetLeft + "px";


function getPos(pos) {
    console.log("getPos fired");
    return pos + "px";
}
function move(key){
    var top=parseInt(ball.style.top)
    var left=parseInt(ball.style.left)
    console.log('move forward');
    if(key=='w'||key=='W'){
        if(top>5){
            ball.style.top=getPos(top-10);
        }
    }
    if(key=='a'||key=='A'){
        if(left>5){
            ball.style.left=getPos(left-10);
        }
    }
    if(key=='s'||key=='S'){
        if(window.innerHeight-top>5){
            ball.style.top=getPos(top+10);
        }
    }
    if(key=='d'||key=='D'){
        if(window.innerHeight-left>5){
            ball.style.left=getPos(left+10);
        }
    }
}

window.addEventListener('keypress',function(event){
    var key=event.key;
    console.log(key);
    move(key);
})
