myApp = {};

myApp.toggleNav = () => {
    $('.burger-button').on('click', function () {
        $(this).toggleClass('cross');
        $('.nav-list').toggleClass('show-nav');
    })
}

myApp.scrollNext = () => {
    $('.scroll-down').on('click', function () {
        let target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, "slow")
    })
}

myApp.toggleFlip = () => {
    $('#toggle-flip').hover(function () {
        console.log('oh hey der');
        $('.image-flip').toggleClass('toggle-flip');
    })
}

myApp.rotateCube = () => {
    $('#toggle-flip').hover(function () {
        console.log('hi! How ARE YOU!');
        $('.about-cube').toggleClass('show-top');
    });
}

$(document).ready(function () {
    particlesJS.load('particles-js', '../assets/particles.json');
    myApp.toggleNav();
    // $('a').smoothScroll({
    //     speed: 1000
    // })
    myApp.scrollNext();
    myApp.rotateCube();
    // myApp.toggleFlip();
});