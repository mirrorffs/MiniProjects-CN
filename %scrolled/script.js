var percentage=document.getElementById('percentage')
var vhHeight=window.innerHeight;
var pageHeight=document.documentElement.scrollHeight;

window.addEventListener('scroll',function(){
    percentage.innerText=Math.round((Math.round(this.scrollY)/(pageHeight-vhHeight))*100)
})