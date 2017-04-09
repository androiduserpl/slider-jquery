$(function () {
    'use strict';

    //zmienne:
    var slider = $('#slider');
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    
    var prevSlide = $('.prev-slide');
    var nextSlide = $('.next-slide');

    //powiększenie szerokości slidera
    slideShow.css('width', slideCount * 100 + '%');

    //dodaj margines i szerokość
    slideShow.find('.single-slide').each(function (index) {

        // sposóbn Łukasza
        $(this).css({
            "width": slideWidth + "%",
            "left": index * slideWidth + "%"
        });
    });

    /*  Nie takkie dobre rozwiązanie - wywala inne wartości
    $(this).css({'margin-left': slideWidth * index + '%', 'width': 100 / index + '%'
        
    });*/

    
    
    //strzałki od sliderów
    prevSlide.click(function (e) {
        slide(slideIndex - 1);
        //console.log('<--klik')
        e.preventDefault();
    });
 
    nextSlide.click(function (e) {
        slide(slideIndex + 1);
        //console.log('klik -->')
        e.preventDefault();

    });
    
    
    
    // funkcja slide 
    function slide(newSlideIndex) {
        console.log(newSlideIndex);
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
        var slideCaption = $('.slider-caption').eq(newSlideIndex);// eq wybieram index z array
        
        slideCaption.hide(); 
        
        var marginLeft = (newSlideIndex * -100) +'%'; 
        
        slideShow.animate({'margin-left': marginLeft}, 2000, function() {
            slideIndex = newSlideIndex;
            slideCaption.fadeIn('slow')
        });
    };

});
