var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');
var interval
for(var i=0; i<navMenuAnchorTags.length ;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault()
        var targetSectionId=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionId);
        console.log(targetSection);
        interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect()
            if(targetSectionCoordinates.top<0){
                clearInterval(interval);
                return
            }
            window.scrollBy(0,50)
        },1)
    });
}

var progressBars=document.querySelectorAll('.skill-progress > div');

function initialiseBar(bar){
    bar.setAttribute("data-visited",false);
    bar.style.width=0+'%';
}
for(var bar of progressBars){
    initialiseBar(bar);
}

function fillBar(bar){
    var targetWidth=bar.getAttribute('data-bar-width');
    var currentWidth=0;
    var interval=setInterval(function(){
        if(currentWidth>=targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width=currentWidth+'%';
    },5)
}

function checkScroll(){
    for(let bar of progressBars){
        var barCoordinates=bar.getBoundingClientRect();
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        }else if(barCoordinates.top > window.innerHeight){
            bar.setAttribute("data-visited",false);
            initialiseBar(bar);
        }
    }
}
window.addEventListener('scroll',checkScroll);

