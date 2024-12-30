function makeBubble(){
    var clutter = "";


for(var i = 1; i<=133; i++)
{
    var rn = Math.round(Math.random()*10);
   clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector('#pbtm').innerHTML = clutter;
}
var timer = 60;
function runTimer(){
   var timerint = setInterval(function(){
    if(timer > 0)
    {
        timer--;
    document.querySelector('#timerval').textContent = timer;
    }
    else{
        clearInterval(timerint);
        document.querySelector('#pbtm').innerHTML = `<h1>GAME OVER!</h1>`
    }
    
   },1000);
}
var hitrn;
function getNewHit(){
 hitrn= Math.round(Math.random()*10);
   document.querySelector('#hitval').textContent = hitrn;
}

var score = 0;
function increaseScore(){
    score +=10;
    document.querySelector('#scorevar').textContent = score;
}

document.querySelector('#pbtm')
.addEventListener('click',function(dets){
     var clickedNumber = Number(dets.target.textContent);
     if(clickedNumber === hitrn)
     {
        increaseScore();
        makeBubble();
        getNewHit();
     }
})

runTimer();
makeBubble();
getNewHit();