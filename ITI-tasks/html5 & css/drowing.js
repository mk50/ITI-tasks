window.addEventListener('load',function(){


var mycanvas=document.getElementById("can");
var ctr=mycanvas.getContext("2d");
ctr.beginPath();
ctr.moveTo(300, 100);
ctr.lineTo(300, 300);
ctr.lineTo(110, 300);
ctr.closePath();

// the outline
ctr.lineWidth = 10;
ctr.strokeStyle ="red";
ctr.stroke();

// the fill color
ctr.fillStyle = "red";
ctr.fill();
});