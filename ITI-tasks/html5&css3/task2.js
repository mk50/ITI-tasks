window.addEventListener('load',function(){


function changecolor(){
    document.querySelector('input');
    document.getElementById("textcolorv");
    let red=document.getElementById("redr").value;
    let green=document.getElementById("greenr").value;
    let blue=document.getElementById("bluer").value;
    var color='rgb(' + red + ',' + green +',' + blue + ')';
    document.querySelector('input').style.color=color;
    document.getElementById("textcolorv").style.color=color;
}
document.getElementById("redr").addEventListener('input',changecolor);
document.getElementById("greenr").addEventListener('input',changecolor);
document.getElementById("bluer").addEventListener('input',changecolor);
});