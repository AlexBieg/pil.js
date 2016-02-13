$(function() {
	var $imgs = $(".pil-load");
	console.log($imgs)
	for (var i = 0; i < $imgs.length; i++) {
		$img = $($imgs[i]);
		if (!$img[0].complete) {
			$img.hide();
			console.log($img)
			getImageSize($img, function(width, height) {
				$div = $("<div>");
				$div.width(width);
				$div.height(height);
				$div.addClass("pil-placeholder");
				$div.addClass(i);
				$img.parent().append($div);

				$img.load(function() {
					console.log("removed div")
					$(this).show();
					$div.hide();
				});
			});
		} 
	}

	function getImageSize(img, callback) {
		var $img = $(img);
		var wait = setInterval(function() {
			var w = $img.width();
			var h = $img.height();
			if (w && h) {
				clearInterval(wait);
				callback.apply(this, [w, h]);
			}
		}, 30)
	}
});	