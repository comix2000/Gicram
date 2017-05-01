$(document).ready(function() {
    
    //$('.section-intro h1').delay(4000).fadeIn(1000);
    $('.titleintro').textillate({ 
      in: { effect: 'async'
          }
    });
    
/*
------------------------------
--------FORCED--SCROLL--------
------------------------------
*/
      (function() {
      var delay = false;

      $(document).on('mousewheel DOMMouseScroll', function(event) {
        if($(window).scrollTop() < 6*h){
          event.preventDefault();
          if (delay) return;

          delay = true;
          setTimeout(function() {
              delay = false
          }, 2000)

          var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

          var section = document.getElementsByTagName('section');
          if (wd < 0) {
              for (var i = 0; i < section.length; i++) {
                  var t = section[i].getClientRects()[0].top;
                  if (t >= 40) break;
              }
          } else {
              for (var i = section.length - 1; i >= 0; i--) {
                  var t = section[i].getClientRects()[0].top;
                  if (t < -20) break;
              }
          }
          $('html,body').animate({
              scrollTop: section[i].offsetTop
          });
        }
      });
  })();
    
/*
------------------------------
---------SCROLL-EVENTS--------
------------------------------
*/
var h=0;
var scroll =0;
    
//HEADER EVENT ON SCROLL    
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
    
    $(window).scroll(function(event) {  
        
         didScroll = true;
        
        h = $(window).height();
        scroll = $(window).scrollTop();
        
        if (scroll >=h) {
        
            new Vivus('marteau', { start: 'autostart', type: 'delayed', duration: 100});
        }
        if (scroll >= h*2){
            
            $('.slider-infos').animate({
                marginTop:'0',
                opacity:'1'
            },1000);
            $('.slides:first-child .slide-image').animate({
                width: '100%'
            }, 500,"easeInCubic");
            
            $('.arrows').delay(1500).fadeIn();
            
            
            //ARROWS EVENTS
            $('.slides:first-child .next').click(function(){
            $('.slides:first-child').animate({ width:'0', opacity:'0'},500,"easeInCubic");
        
            $('.slides:nth-child(2)').delay(1000).animate({
            width: '70vw', opacity:'0'
            }, 500, "easeInCubic");
            });
        }
        
        if (scroll >= h*3){
             new Vivus('bouche', { start: 'autostart', type: 'delayed', duration: 100});
        }
        
        if (scroll >= h*5){
             new Vivus('oeil', { start: 'autostart', type: 'delayed', duration: 100});
        }
    });
    
    setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
    
    function hasScrolled() {
    var st = $(this).scrollTop();
    
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight){

        $('header').removeClass('nav-down').addClass('nav-up');
        $('#logo').removeClass('logo-down').addClass('logo-up');
        $('ul.first-menu').removeClass('first-menu-down').addClass('first-menu-up');
        $('#second-menu').removeClass('second-menu-down').addClass('second-menu-up');

    } else {
        if(st + $(window).height() < $(document).height()) {
            /*$('header').removeClass('nav-up').addClass('nav-down');
            $('#logo').removeClass('logo-up').addClass('logo-down');*/
            $('ul.first-menu').removeClass('first-menu-up').addClass('first-menu-down');
            $('#second-menu').removeClass('second-menu-up').addClass('second-menu-down');
         
            
            
        }
    }
    
    lastScrollTop = st;
}
    
        
/*
------------------------------
-------------SLIDER-----------
------------------------------
*/

});