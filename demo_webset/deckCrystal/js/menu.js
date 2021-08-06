/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		menubox = $('#menubox'),
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		openlink = $( '.menu-open-a' ),	// 用于显示具体分类列表的<a>标签
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		// openlink[0].addEventListener( 'click', toggleMenuToolInfo );
		$.each(openlink,function(index,el){
	     	el.addEventListener( 'click', toggleMenuToolInfo );
		});
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}		
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			// 动态加入菜单项
			createMainMenuHtml();
		}
		isOpen = !isOpen;
	}

	// TODO:菜单中显示具体的工具详细列表
	function toggleMenuToolInfo() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
			// 动态加入《程序员——前端》菜单项
			createChenxuyuanWebToolMenuHtml();
		}
		isOpen = !isOpen;
	}

	// 动态加入主菜单项
	function createMainMenuHtml() {
		console.log('动态加入菜单项')
		var htmlStr = '';
		htmlStr += '<ul class="navbar-nav">';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://www.jianshu.com/u/7b7d23d16ab5" target="_blank">我的简书</a>';
		htmlStr += '</li>';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://space.bilibili.com/295359070?spm_id_from=333.788.b_765f7570696e666f.1" target="_blank">我的Bilibili</a>';
		htmlStr += '</li>';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://www.micking.top:6161/" target="_blank">数据可视化平台</a>';
		htmlStr += '</li>';

		htmlStr += '</ul>';

		menubox.html(htmlStr)
	}

	// 动态加入《程序员——前端》菜单项
	function createChenxuyuanWebToolMenuHtml() {
		console.log('动态加入菜单项')
		var htmlStr = '';
		htmlStr += '<ul class="navbar-nav">';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="http://wap.gxlib.org/ermsClient/browse.do" target="_blank">';
		htmlStr += '<span class="nav-link" style="margin-left:0px;">广西资源平台</span>';
		htmlStr += '<span">一个拥有各种丰富资源的良心资源网站</span>';
		htmlStr += '</a>';
		htmlStr += '</li>';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://compresspng.com/zh/" target="_blank">';
		htmlStr += '<span class="nav-link" style="margin-left:0px;">图片压缩工具</span>';
		htmlStr += '<span">在线压缩的同时保证高清质量</span>';
		htmlStr += '</a>';
		htmlStr += '</li>';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://www.json.cn/" target="_blank">';
		htmlStr += '<span class="nav-link" style="margin-left:0px;">json格式化工具</span>';
		htmlStr += '<span">一个简洁的在线json工具</span>';
		htmlStr += '</a>';
		htmlStr += '</li>';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://developer.mozilla.org/zh-CN/" target="_blank">';
		htmlStr += '<span class="nav-link" style="margin-left:0px;">MDN(Web技术)</span>';
		htmlStr += '<span">一个不错的前端学习网站</span>';
		htmlStr += '</a>';
		htmlStr += '</li>';

		htmlStr += '<li class="nav-item">';
		htmlStr += '<a class="nav-link" href="https://www.processon.com/" target="_blank">';
		htmlStr += '<span class="nav-link" style="margin-left:0px;">ProcessOn</span>';
		htmlStr += '<span">一款足以代替visio的免费在线流程图软件</span>';
		htmlStr += '</a>';
		htmlStr += '</li>';

		htmlStr += '</ul>';

		menubox.html(htmlStr)
	}

	init();

})();