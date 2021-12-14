window.addEventListener('load',function(){
    var canvas = document.getElementById("canv1")
var c = canvas.getContext("2d");

var startX = 0;
var startY = 0;
var endX = 400;
var endY = 300;
var amount = 0;
setInterval(function() {
  amount += 0.01; // change to alter duration
  if (amount > 1) amount = 1;
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.strokeStyle = "red";
  c.lineWidth = 5;
  c.moveTo(startX, startY);
  // lerp : a  + (b - a) * f
  c.lineTo(startX + (endX - startX) * amount, startY + (endY - startY) * amount);

  c.stroke();
  if((endX-startX)*amount==400 && (endY-startY)*amount==300){
    alert("animation end")
    
}  
  
}, 40);


    
   
});