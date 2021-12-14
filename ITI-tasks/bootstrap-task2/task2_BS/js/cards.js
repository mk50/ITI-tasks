var cardList = document.getElementById("card1")
cardList.addEventListener("click" , function(e){
    for (i = 0 ; i < cardList.children.length ; i++){
        cardList.children[i].classList.remove("active");
    }
    e.target.classList.add("active");
});


$(function(){   
    $('#home').click(function(){
        $('#home').addClass("active")
        $('#contact').removeClass("active")
        $('#about').removeClass("active")
        $('#home1').css('display','block')
        $('#contact1').css('display','none')
        $('#about1').css('display','none')
    }).addClass("active")

    $('#contact').click(function(){
        $('#contact').addClass("active")
        $('#about').removeClass("active")
        $('#home').removeClass("active")
        $('#contact1').css('display','block')
        $('#about1').css('display','none')
        $('#home1').css('display','none')
    })

    $('#about').click(function(){
        $('#about').addClass("active")
        $('#home').removeClass("active")
        $('#contact').removeClass("active")
        $('#about1').css('display' , 'block')
        $('#home1').css('display','none')
        $('#contact1').css('display','none')
    })
})

$('#login').click(function () {
    var nametext = $('#user');
    var pass = $('#pass');
    $('.span1').text("my name is" + " " + nametext.val());
    $('.span2').text("my password is" + " " + pass.val());
    $('#info').css('display' , 'block');
    $('#mymodal').modal("hide");
});