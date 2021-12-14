var canvas;
var context;
var ga = 0.0;
var timerId = 0;
var timerId1 = 0;

function init()
{
    canvas = document.getElementById("canv2");
    context = canvas.getContext("2d");

    timerId = setInterval("fadeOut()", 300);
    console.log(timerId);

}

function fadeOut()
{
    context.clearRect(0,0, canvas.width,canvas.height);
    context.globalAlpha = ga;
    var photo = new Image();
    photo .onload = function()
    {
        context.drawImage(photo , 0, 0, 450, 500);
    };
    photo .src = "../html&css/imy.jpg";

    ga = ga - 0.1;

    if (ga < 0)
    {
        fadeOut();
        goingUp = false;
        clearInterval(timerId);

    }
}

function fadeIn()
{
    context.clearRect(0,0, canvas.width,canvas.height);
    context.globalAlpha = ga;

    var photo = new Image();
    photo .onload = function()
    {
        context.drawImage(photo , 0, 0, 450, 500);
    };
    photo .src = "../html&css/imy.jpg";

    ga = ga + 0.1;

    if (ga > 0.1)
    {

        goingUp = false;
        clearInterval(timerId);
    }
}