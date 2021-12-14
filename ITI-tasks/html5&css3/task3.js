window.addEventListener('load',function(){
  var mybutton=document.getElementById("sendinfo");
  mybutton.onclick=function(){
    document.getElementById("cont").style.display="none";
    document.getElementById("child").style.display="block";
    var myname=document.getElementById("names");
    var mynumber=document.getElementById("numbers");
    var myemail=document.getElementById("emails");
    var mydistination=document.getElementById("dist");
    var mylication=document.getElementById("locations");
    var mydatees=document.getElementById("datesa");
    document.getElementById("span1").innerText="my name is : " +myname.value;
    document.getElementById("span2").innerText="my number is : " +mynumber.value;
    document.getElementById("span3").innerText="my email is : " +myemail.value;
    document.getElementById("span4").innerText="my distination is : " +mydistination.value;
    document.getElementById("span5").innerText="my location is : " +mylication.value;
    document.getElementById("span6").innerText="my date is : " +mydatees.value;
    var myselectionvalue=document.getElementById("trip");
    if(myselectionvalue.value=="single trip"){  
      document.getElementById("span7").innerText="my trip is : " + myselectionvalue.value;
    }
    
    else if(myselectionvalue.value=="round trip"){
    document.getElementById("span7").innerText="my trip is : " + myselectionvalue.value;
    }
    else{
      alert("please select your trip");
      document.getElementById("child").style.display="none";
      document.getElementById("cont").style.display="block";
      
    }
    
    var information={name:myname.value,number:mynumber.value,email:myemail.value,distnation:mydistination.value,location:mylication.value,dates:mydatees.value,select:myselectionvalue.value};
    localStorage.setItem("reservation",JSON.stringify( information));
    
  }
  JSON.parse(localStorage.getItem("reservation"));
  var mypricecheck=document.getElementById("checkprice");
  mypricecheck.onclick=function(){

    var my_select=document.getElementById("trip");
    if(my_select.value=="single trip"){
      document.getElementById("te").style.display="block";
      document.getElementById("te").innerText="the price is : 200 pound ";

    }
    else if(my_select.value=="round trip"){
      document.getElementById("te").style.display="block";
      document.getElementById("te").innerText="the price is : 400 pound "; 
    }
   else{
     alert("check your price befor you send your info..");
     document.getElementById("te").style.display="none";
   } 

  }

  
  
});
