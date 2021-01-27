//DOM Level 2 Event 처리 : element의 event listener를 등록하는 방식
// 특정 이벤트 헨들러(Listener)를 여러개 등록할 수 있다.
const TabBox = {
	onWindowLoad: function() {
		let divTabBox = document.getElementsByClassName('tab-box')[0];
		let ulTabBox = divTabBox.childNodes[1];
		let liTabs = ulTabBox.getElementsByTagName('li');
		
		Array.prototype.forEach.call(liTabs, function(li) {
			li.addEventListener('click', TabBox.onTabClicked);
		})
	},
	onTabClicked = function() {
		// unselected 하기
		let liSelected = document.getElementsByClassName('selected');
		(liSelected.length == 1) && (liSelected[0].className = '');

		// selected 하기
		this.className = "selected";
	},
	init: function() {
		// closer(클로저)
		let _t = this;
		window.addEventListener('load', _t.onWindowLoad);
	}
}