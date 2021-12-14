window.addEventListener('load', function () {
    ptime = document.getElementsByTagName("p")[0];
    ptime.innerText = "00:00"
    starbutton = document.getElementsByTagName("button")[0];
    stopBtn = document.getElementsByTagName("button")[1];
    seconds = 0;
    minutes = 0;
    starbutton.onclick = function () {
        starbutton.disabled = true;
        timerid = setInterval(function () {
            seconds++;
            
            ptime.innerText = "0" + minutes + " : " + "0" + seconds;
            if (seconds>9) {
                ptime.innerText = "0" + minutes + " : " + seconds;

            }

            if (seconds > 59) {
                seconds = 0;
                minutes++;


            }



        }, 1000)


    }//start
    stopBtn.onclick = function () {
        clearInterval(timerid);
        starbutton.disabled = false;
    }




})//load