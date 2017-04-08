$(function(){
    'use strict';
    
    //zmienne:
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    
    //powiększenie szerokości slidera
    slideShow.css('width', slideCount*100 + '%');
    
    console.log(slideIndex);
    
    //dodaj margines i szerokość
    slideShow.find('single-slide').each(function(index){
        
        /* // sposón Łukasza
        $(this).css({"width": slideWidth + "%", "left": index * slideWidth + "%"
        */
        $('this').css({'margin-left': slideWidth * index + '%', 'width': 100 / index + '%'
        });
    });
    
    //strzałki od sliderów
    $('.prev-slide').onclick(function(){
        slide(slideIndex - 1);
    }); 
    
    $('.next-slide').onclick(function(){
        slide(slideIndex + 1);
    });
    
    function slide(newSlideIndex) {
        if (newSlideIndex = 0 || newSlideIndex > slideCount){
            return;
        }
        
    }
});