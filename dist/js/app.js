function menu(){
    $('.bar').toggle();
    $('.cross').toggle();
    $('.mainMenu').toggle()
}

function langInOut(){
    $('.lang').toggle().css('display:block')
    if($('.fa-angle-down'))$('.fa-angle-down').toggleClass('fa-angle-up')
    else{$('.fa-angle-up').toggleClass('fa-angle-down');}
}


// main menu
function send(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.send').toggle();
    $('.mainMenu ul li ul.spend,.mainMenu ul li ul.crypto, .mainMenu ul li ul.loyalty').hide()
    $(this).toggleClass('active');
}
function spend(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.spend').toggle();
    $('.mainMenu ul li ul.send,.mainMenu ul li ul.crypto, .mainMenu ul li ul.loyalty').hide()
    $(this).toggleClass('active');
}
function crypto(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.crypto').toggle();
    $('.mainMenu ul li ul.spend,.mainMenu ul li ul.send, .mainMenu ul li ul.loyalty').hide()
    $(this).toggleClass('active');
}
function loyalty(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.loyalty').toggle();
    $('.mainMenu ul li ul.spend,.mainMenu ul li ul.crypto, .mainMenu ul li ul.send').hide()
    $(this).toggleClass('active');
}
