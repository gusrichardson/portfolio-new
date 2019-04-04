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

myApp.rotateProjects = (degrees) => {
    $('#work-cube').css({
        transform: `rotateY(${degrees}deg)`
    })
}

myApp.cubeRotator = () => {
    $('#bike-share').on('click', function (e) {
        e.preventDefault();
        myApp.rotateProjects(0);
    })
    $('#broken-tele').on('click', function (e) {
        e.preventDefault();
        myApp.rotateProjects(90);
    })
    $('#fail-gen').on('click', function (e) {
        e.preventDefault();
        myApp.rotateProjects(180);
    })
    $('#travel-pack').on('click', function (e) {
        e.preventDefault();
        myApp.rotateProjects(270);
    })

}

myApp.init = () => {
    myApp.toggleNav();
    myApp.scrollNext();
    myApp.rotateCubeTop();
    myApp.rotateCubeBottom();
}

window.onload = function () {
    console.log('we loaded?')
    lax.setup() // init

    const updateLax = () => {
        lax.update(window.scrollY)
        window.requestAnimationFrame(updateLax)
    }

    window.requestAnimationFrame(updateLax)
}

$(document).ready(function () {

    particlesJS.load('particles-js', '../assets/particles.json');
    AOS.init();
    myApp.init();
    myApp.cubeRotator();

});