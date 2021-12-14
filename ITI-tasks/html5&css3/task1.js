const media =document.querySelector('video');
var timers=document.getElementsByClassName("timer")[0];
  var divs=document.getElementsByTagName('div')[0];
  var spans=document.getElementsByTagName('span')[0]
var flag=0;

function onypdates() {
    let minutes = Math.floor(media.currentTime / 60);
    let seconds = Math.floor(media.currentTime - minutes * 60);
    let minuteValue;
    let secondValue;
  
    if (minutes < 10) {
      minuteValue = '0' + minutes;
    } else {
      minuteValue = minutes;
    }
  
    if (seconds < 10) {
      secondValue = '0' + seconds;
    } else {
      secondValue = seconds;
    }
  
    let mediaTime = minuteValue + ':' + secondValue;
    spans.innerText = mediaTime;
  
    let barLength = timers.clientWidth * (media.currentTime/media.duration);
    divs.style.width = barLength + 'px';
  }

function onclicks(){

if(flag==0){
    document.getElementsByTagName('video')[0].play();
    document.getElementById("btn1").value="pause";
    flag=1;
}
else{
    document.getElementsByTagName('video')[0].pause();
    document.getElementById("btn1").value="play";
}}

