$(function() {
    var $pMain = $("#parallax_main"),
        $pToolbar = $pMain.find("#toolbar_main"),
        $pTitle = $pToolbar.find("#title_main"),
        $pNavTrigger = $pMain.find("#nav-button"),
        alpha = 0,
        scale = 1,
        maxHeight = 0; // Initialize maxHeight variable

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if (st <= 0) {
            maxHeight = 350;
        } else if (st > 350) {
            alpha = 1;
            maxHeight = 70;
        } else {
            alpha = 0.0 + 1.2 * st / 350;
            scale = 1 - 0.20 * st / 350;
            maxHeight = 350 - 280 * ((st - 0)) / 350;
        }
        $pToolbar.css("background", "rgba(33,14,61," + alpha + ")");
        $pMain.css({
            'max-height': maxHeight + "px"
        });
        $pTitle.css('transform', 'scale(' + scale + ')');
    });

    $pNavTrigger.click(function() {
        $(this).toggleClass('active');
    });
});

const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

function changeTitle(title, favicon) {
    document.title = title;
    document.getElementById('favicon').href = favicon;
}

document.getElementById('dashboard').onclick = function () {
    changeTitle("Dashboard", "dashboard.png");
};
document.getElementById('drive').onclick = function () {
    changeTitle("Google Drive", "drive.png");
};
document.getElementById('portal').onclick = function () {
    changeTitle("Portal | Allen ISD Student Portal", "portal.png");
};

// Additional JavaScript
const moonButton = document.getElementById('dark-mode');
const bodyElements = document.getElementsByClassName('body'); // Assuming you have elements with class "body"

let isDarkMode = false; // Initialize the dark mode state

moonButton.addEventListener('click', function() {
    // Toggle the dark mode state
    isDarkMode = !isDarkMode;

    // Change the color of each menu element
    for (let i = 0; i < bodyElements.length; i++) {
        bodyElements[i].style.backgroundColor = isDarkMode ? '#eeeeee' : '#000000'; // Change to your desired background colors
    }

    // Toggle the moon and sun icons
    const moonIcon = document.querySelector('.moon-icon');
    const sunIcon = document.querySelector('.sun-icon');
    moonIcon.style.display = isDarkMode ? 'block' : 'none';
    sunIcon.style.display = isDarkMode ? 'none' : 'block';
});
