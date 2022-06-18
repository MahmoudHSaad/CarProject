if ($(window)) {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('#navbar_top').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
            document.getElementById("navbar_top").style.cssText = `
                background:rgb(1 25 37 / 35%) ; 
                transition :all 1.5s !important ;
    `;
        } else {
            $('#navbar_top').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
            document.getElementById("navbar_top").style.cssText = `
                background:none; 
                transition :all 1.5s !important ;
    `;
        }
    });
}
// nav bar on top 

/* Opent Menue auto  */

$(document).ready(function() {
    $(".dropdown").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");

        }
    });
});

/* Opent Menue auto  */



/* Auto Scroll Car  */


// declare variable
var scrollTop = $(".carAnimate");

$(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

    } else {
        $(scrollTop).css("opacity", "0");

        // $(scrollTop).animate({
        //     bottom:"-10%",
        // },100);
    }

}); // scroll END

//Click event to scroll to top
$(scrollTop).click(function() {
    $('html, body').animate({
            scrollTop: 0
        },
        100
    );
    return false;

}); // click() scroll top EMD


/* Auto Scroll Car  */


let test = document.getElementById("QuastionsSlide");
let question = document.getElementById("question");
let QuastionsImgTow = document.getElementById("QuastionsImgTow").firstElementChild;
let QuastionsImgOne = document.getElementById("QuastionsImgOne").firstElementChild;

let Bigslider = document.getElementById("Bigslider");
let owl_next = document.getElementsByClassName("owl-next");
let owl_prev = document.getElementsByClassName("owl-prev");

Bigslider.addEventListener("mouseenter", function(event) {
    owl_next[0].style.cssText = `

    text-align:center;
    margin-right: -35px;
 

`;
    owl_prev[0].style.cssText = `

    text-align:center;
    margin-left: -25px;
 
  
`;

})
Bigslider.addEventListener("mouseleave", function(event) {
    owl_next[0].style.cssText = `
  
    text-align:center;
    margin-right: 10px;
    z-index:-2 !important;
   
    

 
`;
    owl_prev[0].style.cssText = `
   
    text-align:center;
    margin-left: 23px;

    z-index:-2 !important;
   
`;

})


test.addEventListener("mouseenter", function(event) {

    QuastionsImgTow.style.cssText = `
    margin-right: -10px !important;
    max-width:85%;
    max-height:85%; 
    transition: all ease-in-out 1s;
`;
    QuastionsImgOne.style.cssText = `
    margin-left: 0pc !important;
    max-width:85%;
    max-height:85%; 
    transition: all ease-in-out 1s;
`;


});
test.addEventListener("mouseleave", function(event) {
    // highlight the mouseenter target
    question.style.color = "black";

    QuastionsImgOne.style.cssText = `
    margin-left: -1pc !important;
    max-width:85%;
    max-height:85%; 
    transition: all ease-in-out 1s;
`;
    QuastionsImgTow.style.cssText = `
margin-right: -30px !important;
max-width:85%;
max-height:85%; 
transition: all ease-in-out 1s;
`;

});


$(document).ready(function() {

    $("#owl-carousel-one").owlCarousel({
        items: 4,
        margin: 15,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            900: {
                items: 3,
                nav: true,
                loop: true,
            },
            1150: {
                items: 4,
                nav: true,
                loop: true,
                margin: 20,
            },

        }
    });
    $("#owl-carousel-tow").owlCarousel({
        items: 4,
        margin: 15,
        loop: true,
        nav: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
            },
            900: {
                items: 3,
                nav: true,
                loop: true,
            },
            1150: {
                items: 3,
                nav: true,
                loop: true,
                margin: 20,
            },

        }
    });

});


var Make = document.getElementById("Make")
var Body_style = document.getElementById("Body_style")
var MakeCont = document.getElementById("MakeCont")
var Body_styleCont = document.getElementById("Body_styleCont")

function Show_Body_styleCont() {
    Body_styleCont.style.display = "block"
    MakeCont.style.display = "none"
    Body_style.style.borderBottom = "5px solid #db2d2e"
    Body_style.style.color = " #db2d2e"
    Make.style.borderBottom = "none"
    Make.style.color = "black"

}

function Show_MakeCont() {
    Body_styleCont.style.display = " none"
    MakeCont.style.display = "block"
    Body_style.style.borderBottom = " none "
    Make.style.borderBottom = "5px solid #db2d2e"
    Make.style.color = "#db2d2e"
    Body_style.style.color = "black"
}