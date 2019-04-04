myApp = {};

// myApp.toggleNav = () => {
//     $('.burger-button').on('click', function () {
//         $(this).toggleClass('cross');
//         $('.nav-list').toggleClass('show-nav');
//     })
// }

myApp.toggleNav = () => {
    $('.burger-button').on("click", function () {
        $(this).toggleClass('cross');
        $('.nav-list').slideToggle('slow');
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

myApp.rotateCubeTop = () => {
    $('#toggle-flip-top').hover(function () {
        console.log('hi! How ARE YOU!');
        $('.about-cube').toggleClass('show-top');
    });
}

myApp.rotateCubeBottom = () => {
    $('#toggle-flip-bottom').hover(function () {
        $('.about-cube').toggleClass('show-bottom');
    })
}

myApp.init = () => {
    myApp.toggleNav();
    myApp.scrollNext();
    myApp.rotateCubeTop();
    myApp.rotateCubeBottom();
}

$(document).ready(function () {
    particlesJS.load('particles-js', '../assets/particles.json');
    myApp.init();
    // myApp.toggleNav();
    // $('a').smoothScroll({
    //     speed: 1000
    // })
    // myApp.scrollNext();
    // myApp.rotateCubeTop();
    // myApp.rotateCubeBottom();
    // myApp.toggleFlip();
});