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
document.addEventListener('keydown', function(event) {
  if (event.key === '`') { // Check if the pressed key is the tilde key
    window.open('https://www.example.com', '_blank');
// Additional JavaScript
const moonButton = document.getElementById('dark-mode'); 
const moonIcon = document.querySelector('.moon-icon'); 
const sunIcon = document.querySelector('.sun-icon'); 
let isDarkMode = false; // Initialize the dark mode state 
moonButton.addEventListener('click', function() { // Toggle the dark mode state 
	isDarkMode = !isDarkMode; // Change the color of each menu element (example color change) 
	document.body.style.backgroundColor = isDarkMode ? '#222' : '#fff'; // Change to your desired background colors 
	// Toggle the moon and sun icons 
	moonIcon.style.display = isDarkMode ? 'none' : 'block'; sunIcon.style.display = isDarkMode ? 'block' : 'none'; // Ensure the dark mode button remains visible 
	moonButton.style.display = 'block'; });
