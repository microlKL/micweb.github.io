(function() {
	var toolTypeElA = $('.toolTypeA'),
	toolTypeElB = $('.toolTypeB'),
	toolTypeElC = $('.toolTypeC'),
	toolTypeElE = $('.toolTypeE'),
	toolTypeElF = $('.toolTypeF'),
	toolTypeElG = $('.toolTypeG'),
	toolTypeDetailTitleEl = $('#toolTypeDetailTitle'),
	toolTypeDetailContainerEl = $('#portfolios');

	function init() {
		initEvent();
	}

	function initEvent() {
		$.each(toolTypeElA,function(index,el){
	     	el.addEventListener( 'click', loadToolTypeDetailA);
		});
		// TODO:下面几个待资料准备好了，再一一开放
		// $.each(toolTypeElB,function(index,el){
	 //     	el.addEventListener( 'click', loadToolTypeDetailB);
		// });
		// $.each(toolTypeElC,function(index,el){
	 //     	el.addEventListener( 'click', loadToolTypeDetailC);
		// });
		// $.each(toolTypeElE,function(index,el){
	 //     	el.addEventListener( 'click', loadToolTypeDetailE);
		// });
		// $.each(toolTypeElF,function(index,el){
	 //     	el.addEventListener( 'click', loadToolTypeDetailF);
		// });
		// $.each(toolTypeElG,function(index,el){
	 //     	el.addEventListener( 'click', loadToolTypeDetailG);
		// });

	}

	// 加载分类A的具体内容
	function loadToolTypeDetailA(){
		// 页面滚动到子分类容器位置
		goToToolTypeDetailContainer();
		// TODO:加载子分类
		toolTypeDetailTitleEl.html('程序员');
	}

	// 加载分类B的具体内容
	function loadToolTypeDetailB(){
		// 页面滚动到子分类容器位置
		goToToolTypeDetailContainer();
		// TODO:加载子分类
		toolTypeDetailTitleEl.html('设计师');
	}

	// 加载分类C的具体内容
	function loadToolTypeDetailC(){
		// 页面滚动到子分类容器位置
		goToToolTypeDetailContainer();
		// TODO:加载子分类
		toolTypeDetailTitleEl.html('医师');
	}

	// 加载分类E的具体内容
	function loadToolTypeDetailE(){
		// 页面滚动到子分类容器位置
		goToToolTypeDetailContainer();
		// TODO:加载子分类
		toolTypeDetailTitleEl.html('教师');
	}

	// 加载分类F的具体内容
	function loadToolTypeDetailF(){
		// 页面滚动到子分类容器位置
		goToToolTypeDetailContainer();
		// TODO:加载子分类
		toolTypeDetailTitleEl.html('律师');
	}

	// 加载分类G的具体内容
	function loadToolTypeDetailG(){
		// 页面滚动到子分类容器位置
		goToToolTypeDetailContainer();
		// TODO:加载子分类
		toolTypeDetailTitleEl.html('建筑师');
	}


	function goToToolTypeDetailContainer() {
		// 得到pos这个div层的offset，包含两个值，top和left
		var scroll_offset = toolTypeDetailContainerEl.offset();
		// 让body的scrollTop等于pos的top，就实现了滚动
	      $('html, body').animate({
	        scrollTop: scroll_offset.top
	      }, 600);
	}

	// 调用初始化函数
	init();

})()