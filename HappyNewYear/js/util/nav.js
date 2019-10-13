
/**
 * 配置
 */
layui.config({
	base: './js/util/'
}).use(['element', 'laypage', 'jquery', 'menu'], function() {
	element = layui.element, laypage = layui.laypage, $ = layui.$, menu = layui.menu;
	laypage.render({
		elem: 'demo',
		count: 100, //数据总数，从服务端得到
		limit: 2, //每页显示条数
	});
	menu.init();
})


/**
 * 
 */
layui.use(['jquery', 'laytpl', 'layer'], function() {
	var $ = layui.$,
		laytpl = layui.laytpl,
		layer = layui.layer;
	
	/**
	 * 到顶隐藏
	 */
	$(window).scroll(function(){
 		if($(window).scrollTop() <= 100){
			$("#set-top").fadeOut();
		}else {
			$("#set-top").fadeIn();
		}
	})
	
	/**
	 * 回顶部
	 */
	$("#set-top").on('click',function(){
		$("html,body").animate({scrollTop: 0},1000);
	})
	
	// 轮播图
	var _ban = $("#banner .ban_item");
	// console.log(_ban.length)
	var i = 0
	setInterval(function(){
		i++;
		if(i >= _ban.length){
			i = 0
		}
		_ban.eq(i).fadeIn().siblings().fadeOut()
	},3000);
	
	$("#closeIn").on("click",function(){
		$(".entrance").remove();
	})
})



//!function(){
//	var u = {
//		huangd: './test'
//	}
//}(window);
//
//hd.uer(['huangd'],function(){
//	
//})
