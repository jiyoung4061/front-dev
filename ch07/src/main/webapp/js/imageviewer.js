/**
 * ImageViewer
 */
const ImageViewer = {
	_images: [
		{
			name: "국화",
			file: "Chrysanthemum.jpg"
		}, {
			name: "사막",
			file: "Desert.jpg",
		},
		{
			name: "수국",
			file: "Hydrangeas.jpg"
		}, {
			name: "해파리",
			file: "Jellyfish.jpg"
		}, {
			name: "코알라",
			file: "Koala.jpg"
		}, {
			name: "등대",
			file: "Lighthouse.jpg"
		}, {
			name: "펭귄",
			file: "Penguins.jpg"
		}, {
			name: "툴립",
			file: "Tulips.jpg"
		}
	],
	intervalid : 0,
	_changeImage: function() {
		let index = Math.floor(Math.random() * (ImageViewer._images.length - 1)) + 1;
		let info = ImageViewer._images[index];

		$('.image-viewer img').attr({
			src: 'images/' + info.file,
			'alt': info.name,
			'title': info.name
		});
	},
	_consoleImageLog: function() {
		let name = $(this).attr('alt');
		console.log(name);
	},
	_slideImage: function() {
		($(this).text() == '슬라이드 시작')
			? $(this).text('슬라이드 중지') && (ImageViewer.intervalId = setInterval(ImageViewer._changeImage, 500))
			: $(this).text('슬라이드 시작') && clearInterval(ImageViewer.intervalId);
	},
	init: function() {
		$(function() {
			$('.image-viewer #btn-change').click(ImageViewer._changeImage);
			$('.image-viewer #btn-slide').click(ImageViewer._slideImage);
			$('.image-viewer img')
				.mousedown(ImageViewer._changeImage)
				.dblclick(ImageViewer._consoleImageLog);

			// 디폴트 이미지 선택하기
			ImageViewer._changeImage();
		});
	}

};
