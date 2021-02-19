///////////////////////////////////////////////// Sub Nav Slider Js ///////////////////////////////////
$('.sub-nav-slider.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    // navText: ["<img src='img/slider-arrow-l.png'>", "<img src='img/slider-arrow-r.png'>"],
    responsive: {
        0: {
            items: 2,
            stagePadding: 50,
            dots: true
        },
        600: {
            items: 5
        },
        1000: {
            items: 5
        }
    }
})

// Show/Hide Login Section section js

// Member LOgin Show/Hide
$('.member-login-main-sec').fadeOut();
$('.program-inner-col-1').click(function() {
    $('.program-row').css("display", "none");
    $('#reward_feature').fadeOut();
    $('.member-login-main-sec').fadeIn();
});
// VIP LOgin Show/Hide
$('.vip-login-main-sec').fadeOut();
$('.program-inner-col-2').click(function() {
    $('.program-row').css("display", "none");
    $('#reward_feature').fadeOut();
    $('.vip-login-main-sec').fadeIn();
});
///////////////////////////////////////////////// Redeem Slider Js ///////////////////////////////////
$('.redeem-points-slider.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    // navText: ["<img src='img/slider-arrow-l.png'>", "<img src='img/slider-arrow-r.png'>"],
    responsive: {
        0: {
            items: 1,
            loop: true,
            dots: true
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

// Redeem Confirm function
// VIP LOgin Show/Hide
$('.redeem-confirm').fadeOut();
$('.redeem-btn1').click(function() {
    $('.redeem-confirm1').fadeIn();
    $('.redeem-content1').css("display", "none");
});
$('.redeem-btn2').click(function() {
    $('.redeem-confirm2').fadeIn();
    $('.redeem-content2').css("display", "none");
});
$('.redeem-btn3').click(function() {
    $('.redeem-confirm3').fadeIn();
    $('.redeem-content3').css("display", "none");
});
///////////////////////////////////////////////// Login Tabbing ///////////////////////////////////

function openPoint(evt, tabNum) {
    // Declaring variables 
    var i, loginpoints, logintab;
    loginpoints = document.getElementsByClassName("loginpoints");
    for (i = 0; i < loginpoints.length; i++) {
        loginpoints[i].style.display = "none";
    }
    logintab = document.getElementsByClassName("logintab");
    for (i = 0; i < logintab.length; i++) {
        logintab[i].className = logintab[i].className.replace(" active", "")
    }

    document.getElementById(tabNum).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("active_tab").click();

function vipPoint(evt, vipNum) {
    // Declaring variables 
    var i, vipinpoints, viplink;
    vipinpoints = document.getElementsByClassName("vipinpoints");
    for (i = 0; i < vipinpoints.length; i++) {
        vipinpoints[i].style.display = "none";
    }
    viplink = document.getElementsByClassName("viplink");
    for (i = 0; i < viplink.length; i++) {
        viplink[i].className = viplink[i].className.replace(" active", "")
    }

    document.getElementById(vipNum).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("active_tab1").click();

///////////////////////////////////////////////// Onclick Fucntion for Collect Rewards///////////////////////////////////
// Welcom Column
$('img.welcome-img').click(function() {
    $('img.complete-welcome').show("slow");
    $('img.welcome-img').hide("slow");
});
// Instagram Follow
$('img.insta-img').click(function() {
    $('img.complete-insta').show("slow");
    $('img.insta-img').hide("slow");
});
// Facebook Like
$('img.fb-like-img').click(function() {
    $('img.complete-fb-like').show("slow");
    $('img.fb-like-img').hide("slow");
});
// Join Newsletter
$('img.join-newsleter').click(function() {
    $('img.complete-newsleter').show("slow");
    $('img.join-newsleter').hide("slow");
});
// Refer A Friend
$('img.refer-frnd').click(function() {
    $('img.complete-refer-frnd').show("slow");
    $('img.refer-frnd').hide("slow");
});
// Place an Order
$('img.place-order-img').click(function() {
    $('img.complete-order-img').show("slow");
    $('img.place-order-img').hide("slow");
});
// Facebook Share
$('img.fb-share').click(function() {
    $('img.complete-fb-share').show("slow");
    $('img.fb-share').hide("slow");
});
// Twitter Share
$('img.tw-share').click(function() {
    $('img.complete-tw-share').show("slow");
    $('img.tw-share').hide("slow");
});
// Product review
$('img.product-review').click(function() {
    $('img.complete-product-review').show("slow");
    $('img.product-review').hide("slow");
});

///////////////////////////////////////////////// Collect rewards Birthday Popup ///////////////////////////////////

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("birthdayIcon");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    ///////////////////////////////////////////////// Product Slider Tabbing ///////////////////////////////////

//evt = event
function opentab(evt, punNum) {
    // Declaring variables 
    var i, tabContent, tablink;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "")
    }

    document.getElementById(punNum).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("active-tab").click();

///////////////////////////////////////////////// Slider Js ///////////////////////////////////
$('.pro-slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<img src='img/slider-arrow-l.png'>", "<img src='img/slider-arrow-r.png'>"],
    responsive: {
        0: {
            items: 1,
            stagePadding: 50,
            nav: false,
            dots: true
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})