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
User
How do I make my website so that when someone presses the tilde key it opens up a new tab

2 / 2



ChatGPT
To make your website open a new tab when someone presses the tilde key (~), you can use JavaScript. Below is an example of how you can achieve this:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Open New Tab on Tilde Key Press</title>
</head>
<body>

<!-- Your website content goes here -->

<script>
document.addEventListener('keydown', function(event) {
  if (event.key === '`') { // Check if the pressed key is the tilde key
    window.open('https://www.example.com', '_blank'); // Replace 'https://www.example.com' with the URL you want to open
  }
});
</script>

</body>
</html>
Replace 'https://www.example.com' with the actual URL you want to open in a new tab when the tilde key is pressed. Insert this code into your HTML file within the <head> and <body> sections.

Keep in mind that opening new tabs programmatically can be considered intrusive behavior, so use it responsibly and ensure it adds value to the user experience on your website.



User
Why does it check if the tilde key is pressed when it checks if ‘ `’ is pressed


ChatGPT
The code snippet checks if the tilde key (~) is pressed by checking if the key that was pressed is the backtick/grave accent key (`). This is because on most keyboards, the tilde key is located on the same physical key as the backtick/grave accent key. The backtick/grave accent key is the one you typically use for code blocks and template literals in JavaScript ( ), and it's represented in the code as event.key === ''.

In JavaScript and many programming languages, the backtick/grave accent is used as an identifier for the tilde key due to their shared position on the keyboard. This is a common convention because it simplifies the code and makes it more readable.

So, when the code checks if event.key === '`', it's effectively checking if the backtick/grave accent key, which is also the tilde key on most keyboards, is pressed. If it is, then the code proceeds to open a new tab.



User
How do I make it to where there is a list of sites ie:
Google drive
Gmail
Google

That when pressed alter the url that the tilde key takes you to


ChatGPT
You can modify the JavaScript code to open different URLs based on the user's choice when they press the tilde key. One way to achieve this is by using an object to store the mappings between the user's input (e.g., 'g' for Google, 'd' for Google Drive, 'm' for Gmail) and the corresponding URLs. Here's an updated example:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Open New Tab on Tilde Key Press</title>
</head>
<body>

<!-- Your website content goes here -->

<script>
// Define the mapping between keys and URLs
const siteUrls = {
  'g': 'https://www.google.com',
  'd': 'https://www.drive.google.com',
  'm': 'https://www.gmail.com'
};

document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase(); // Convert the pressed key to lowercase for case insensitivity
  
  // Check if the pressed key corresponds to a site in the mapping
  if (key in siteUrls) {
    window.open(siteUrls[key], '_blank'); // Open the corresponding URL in a new tab
  }
});
</script>

</body>
</html>
In this code, siteUrls is an object that maps keys (e.g., 'g', 'd', 'm') to their respective URLs. When a key is pressed and it matches one of the keys in siteUrls, the corresponding URL is opened in a new tab. You can add more entries to siteUrls as needed for additional sites.



User
No I want a list of sites and if you click on that site it does not take you to that site but it remembers that that is the site that you want to go to whenever you press the key


ChatGPT
If you want a list of sites where clicking on a site sets it as the destination for the tilde key, you'll need to modify the code to handle this behavior. One approach is to create a list of clickable elements (like buttons or links) for each site. When a user clicks on a site, it sets that site as the destination URL for the tilde key. Here's an example of how you can do this:

html
Copy code
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Set Destination Site for Tilde Key</title>
</head>
<body>

<!-- List of sites -->
<ul>
  <li><a href="#" id="googleDrive">Google Drive</a></li>
  <li><a href="#" id="gmail">Gmail</a></li>
  <li><a href="#" id="google">Google</a></li>
</ul>

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
