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
<!-- Script to handle setting the destination URL -->
let destinationUrl = ''; // Variable to store the destination URL

// Function to set the destination URL when a site is clicked
function setDestination(url) {
  destinationUrl = url;
  console.log(`Destination URL set to: ${destinationUrl}`);
}

// Event listeners for each site link to set the destination URL
document.getElementById('drive-url').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  setDestination('https://www.drive.google.com');
});

document.getElementById('gmail-url').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  setDestination('https://www.gmail.com');
});

document.getElementById('portal-url').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  setDestination('https://www.google.com');
});

document.getElementById('dashboard-url').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  setDestination('https://www.google.com');
});

document.getElementById('docs-url').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  setDestination('https://www.google.com');
});

// Event listener for the tilde key
document.addEventListener('keydown', function(event) {
  if (event.key === '`' && destinationUrl !== '') {
    window.open(destinationUrl, '_blank'); // Open the destination URL in a new tab
  }
});
	  const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
  }
});

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
