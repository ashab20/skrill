
//  * icon clicked function
function menu(){
    $('.bar').toggle().animate({opacity: '1'}, "slow");
    $('.cross').toggle();
    $('.mainMenu').slideToggle();
    $('.mainMenu ul li ul.send').css('display','block');

}

function langInOut(){
    $('.lang').slideToggle();
    if($('.fa-angle-down'))$('.fa-angle-down').toggleClass('fa-angle-up')
    else{$('.fa-angle-up').toggleClass('fa-angle-down');}
}


//* main menu
function send(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.send').show();
    $('.mainMenu ul li ul.spend,.mainMenu ul li ul.crypto, .mainMenu ul li ul.loyalty').hide()
    $(this).toggleClass('active');
}
function spend(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.spend').show();
    $('.mainMenu ul li ul.send,.mainMenu ul li ul.crypto, .mainMenu ul li ul.loyalty').hide()
    $(this).toggleClass('active');
}
function crypto(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.crypto').show();
    $('.mainMenu ul li ul.spend,.mainMenu ul li ul.send, .mainMenu ul li ul.loyalty').hide()
    $(this).toggleClass('active');
}
function loyalty(){
    $('.active').removeClass('active')
    $('.mainMenu ul li ul.loyalty').show();
    $('.mainMenu ul li ul.spend,.mainMenu ul li ul.crypto, .mainMenu ul li ul.send').hide()
    $(this).toggleClass('active');
}



// ? Slider
let owl = $('.owl-carousel').owlCarousel({
    margin:10,
    rtl: true,
    autoplay:true,
    autoplayTimeout:5000,
    items:4,
    loop:true,
    center:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'zero',
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.latesnews').owlCarousel({
    items:2,
    lazyLoad:true,
    loop:true,
    margin:10
});


// got help from teacher Mr. Shoriful Islam Sir
owl.on('changed.owl.carousel',function(property){
    var current = property.item.index;
    var src = $(property.target).find(".owl-item").eq(current).find(".item").attr('data-hash');
	if($('.btn-hero').hasClass(src)){
		$('.btn-hero').removeClass('active-btn');
		$("."+src).addClass('active-btn');
	}	
});



// ? button active class
// i have tried with data-index value of btn-hero the timeing is not matched
// let getClass = $('.btn-hero');

/*
$('.owl-carousel').ready(function(){
    for( i=0; i <= getClass.length; i++){
    let classes = getClass.eq(i)
    getClass.map(function(index,item){
    if(parseInt($(item).data('index')) == 0){
        setInterval(() => {
            $(this).toggleClass('active-btn')
        }, 5000);  
         
    }
    else if(parseInt($(item).data('index')) == 1){
        setInterval(() => {
            $(this).toggleClass('active-btn')
        }, 10000);   
             
    }
     else if(parseInt($(item).data('index')) == 2){      
        setInterval(() => {
            $(this).toggleClass('active-btn')
        }, 15000);   
               
    }
    else if(parseInt($(item).data('index')) == 3){      
        setInterval(() => {
            $(this).toggleClass('active-btn')
        }, 20000);  
                
    }
});
    
}

});*/


clearInterval()





  

