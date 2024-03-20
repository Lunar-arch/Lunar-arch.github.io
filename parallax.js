	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script>
		$(function() {
			var $pMain = $("#parallax_main"),
				$pToolbar = $pMain.find("#toolbar_main"),
				$pTitle = $pToolbar.find("#title_main"),
				$pNavTrigger = $pMain.find("#nav-button"),
				alpha = 0,
				scale = 1;

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
	</script>
