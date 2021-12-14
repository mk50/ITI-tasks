function display(data){
    document.getElementById('output').value += data;
}

function erase(){
    document.getElementById('output').value="";
}

function solve(){
    var calc = document.getElementById('output').value;
    document.getElementById('output').value = eval(calc);
}
var bodee=document.getElementById("bod");
var inial;
var cont=document.getElementById("count");
 inial=cont.innerHTML;
 
 setInterval(function(){
    inial--;
     var imgbath=inial ;
     if(inial %2==0){
         document.getElementById("bod").style.backgroundImage("red");
     }
     
     if(inial>10){
         inial=0;
     }
     else if(inial<0){
         inial=10;
     }
     bodee.src=imgbath;

     document.getElementById("count").innerHTML=inial;

 },1000)

   