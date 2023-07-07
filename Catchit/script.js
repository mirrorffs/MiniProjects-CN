var box = document.getElementById('box');
box.style.top=Math.floor(Math.random()*50).toString()+"px";
box.style.left=Math.floor(Math.random()*50).toString()+"px";

box.addEventListener('mousemove',function(){
    let vhWidth=window.innerWidth;
    let vhHeight=window.innerHeight;
    let boxHeight=box.clientHeight;
    let boxWidth=box.clientWidth;

    box.style.top=Math.floor(Math.random()*(vhHeight-boxHeight)).toString()+"px";
    box.style.left=Math.floor(Math.random()*(vhWidth-boxWidth)).toString()+"px";
})