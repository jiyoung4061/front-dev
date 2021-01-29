/**
 * jQuery Based
 */
const TabBox = {	
	init: function(){
		$(this._init);
	},
	_init: function(){
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function(){
		// unselect
		$('.tab-box li.selected').removeClass('selected');
		
		// select
		let $liTab = (this == TabBox) ? $('.tab-box li:last-child') : $(this);
		
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다");
		$liTab.addClass('selected');
	}
}