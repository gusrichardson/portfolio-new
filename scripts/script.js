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

myApp.toggleHotSauce = () => {
    $('#toggle-giorgi').hover(function () {
        $('.about-cube').find('.image-one').fadeToggle(800);
    })
}
myApp.toggleOscar = () => {
    $('#toggle-oscar').hover(function () {
        $('.about-cube').find('.image-two').fadeToggle(800);
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
    let secret = 0;
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
        secret += 1;
        if (secret <= 1) {
            alert(`You've discovered the hidden video!`)
        }
        $('#work-cube').css({ transform: "rotateX(90deg)" });
        $('#reset-cube').css({ display: 'block' });
    })
    $('#reset-cube').on('click', function () {
        $(this).css({ display: "none" });
        $('#work-cube').css({ transform: "rotateX(0deg)" });
    })
    //Adapted from a CodePen by James Garrett https://codepen.io/jamesgarrett/pen/ZaqJLE
};


//END ROTATING WORK CUBE

myApp.init = () => {
    myApp.toggleNav();
    myApp.scrollNext();
    myApp.steerCube();
    myApp.toggleHotSauce();
    myApp.toggleOscar();
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