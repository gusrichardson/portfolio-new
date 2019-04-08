myApp = {};

// NAVIGATION FUNCTIONS
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
    $('a[href*="#"]').on('click', function () {
        target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, "slow")
    })
}

//ABOUT ME FLIP CARD TRIGGER

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

// ROTATING WORK CUBE

myApp.rotateProjects = (degrees) => {
    $('#work-cube').css({
        transform: `rotateY(${degrees}deg)`
    })
}

myApp.steerCube = function () {
    let counter = 0;
    $('.steer-left').on('click', function () {
        counter -= 90;
        let rotation = `rotateY(${counter}deg)`;
        $('#work-cube').css({ 'transform': rotation })
    })
    $('.steer-right').on('click', function () {
        counter += 90;
        let rotation = `rotateY(${counter}deg)`;
        $('#work-cube').css({ 'transform': rotation })
    })
    $('.steer-top').on('click', function () {
        $('#work-cube').css({ transform: "rotateX(90deg)" });
    })
    $('.zero').on('click', function () {
        $('#work-cube').css({ transform: "rotateX(0deg)" });
    })
    //Adapted from a CodePen by James Garrett https://codepen.io/jamesgarrett/pen/ZaqJLE
};


//END ROTATING WORK CUBE

myApp.init = () => {
    myApp.toggleNav();
    myApp.scrollNext();
    myApp.rotateCubeTop();
    myApp.rotateCubeBottom();
    myApp.steerCube();
}

window.onload = function () {
    lax.setup() // initialize LAX animations on load

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

});