function showImgs(img, div) {
	return function() {
		img.show();
		div.remove();
	}
}

function getImageSize(img, callback) {
	var $img = $(img);
	var wait = setInterval(function() {
		var w = $img.width();
		var h = $img.height();
		if (w && h) {
			clearInterval(wait);
			callback($img, w, h);
		}
	}, 30)
}

$(function() {
	var $imgs = $(".pil-load");
	$imgs.each(function() {
		$img = $(this);
		if (!$img[0].complete) {
			$img.hide();
			getImageSize($img, function($img, width, height) {
				$div = $("<div>");
				$div.width(width);
				$div.height(height);
				$div.addClass("pil-placeholder");
				$div.insertAfter($img);

				console.log($img);
				$img.load(showImgs($img, $div));
			});
		}
	});
});