$(document).ready(()=>{

    $(document).on("ready", function () {
        $(".regular").slick({
            arrows: true,
            slidesToShow: 5,
            infinite: true,
            // centerMode: true,
            variableWidth: false,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        centerMode: false,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });
    
    $('[data-fancybox]').fancybox({
        // Options will go here
        buttons: [
            'close'
        ],
        wheel: false,
        transitionEffect: "slide",
        // thumbs          : false,
        // hash            : false,
        loop: true,
        // keyboard        : true,
        toolbar: false,
        // animationEffect : false,
        // arrows          : true,
        clickContent: false
    }); 
})