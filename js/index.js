$(function(){
	//小购物车图标下拉
	$("#shopping_car").hover(function(){
		$("#cart-list").stop().slideDown(500,function(){
			return;
		});
	}, function(){
		$("#cart-list").stop().slideUp(500, function(){
			return;
		});

	})
	//搜索框点击事件
	$(".search-text").focus(function(){
	  $(".search-text").css("border","1px solid #990000");
	   $(".search-btn").css("border","1px solid #990000");
	});
	$(".search-text").blur(function(){
	  $(".search-text").css("border","");
	   $(".search-btn").css("border","");
	});

	//横排下拉菜单下拉动画
	$(".nav-list").on("mouseenter", "li", function(){
		var iNow = $(this).index();
			if(iNow < 4){
				$.ajax({
					method:"get",
					url:"data/data.json",
					success:function(data1){
						var html = "";
						for(var i = 0 ; i < data1[iNow].data.length; i++){
								html += '<li class = "first"><div class="figure"><a href="' + data1[iNow].data[i].aHref +'" target="_blank"><img src="' + data1[iNow].data[i].src + '"></a></div><div class="title"><a href="' + data1[iNow].data[i].aHref + '" target="_blank">' + data1[iNow].data[i].title1 + '</a></div><p class="price">' + data1[iNow].data[i].price +'</p></li>'
						}
						$("#problem").html(html);	
					}
				})
				$("#problem").stop().slideDown(300,function(){
					return;
				});
			}
			if(iNow >=4){
				$("#problem").stop().slideUp(300, function(){
					return;
				})
				$("#problem").css("display", "none");
			}				
	})
	$(".nav-list").on("mouseenter",function(){
		$(".nav-list").on("mouseleave",function(){
			$("#problem").on("mouseenter",function(){
				$("#problem").css("display", "block")
			})
			$("#problem").on("mouseleave",function(){
				$("#problem").stop().slideUp(300, function(){
					return;
				});
			})
		})
	})
	$(".nav-list").on("mouseleave", function(){
		$("#problem").css("display", "none")
	})
	

	//二级菜单右边出来的效果
	$("#second").on("mouseenter","li",function(){
		$("#outerdiv").css("display", "block");
		
		var iNow = $(this).index();
		if(iNow == 0){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src1 + '"><span>'+ data[iNow].data[0].title1 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[1].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "'+ data[iNow].data[1].src0 +'"><span>'+ data[iNow].data[1].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src1 +'"><span>'+ data[iNow].data[1].title1 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src2 +'"><span>'+ data[iNow].data[1].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src3 +'"><span>'+ data[iNow].data[1].title3 +'</span></a></li><li><a href = "#"><img src = "'+data[iNow].data[1].src4+'"><span>'+ data[iNow].data[1].title4 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[1].src5 + '"><span>'+data[iNow].data[1].title5+'</span></a></li><li><a href = "#"><img src = "'+data[iNow].data[1].src6+'"><span>' +data[iNow].data[1].title6+ '</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src7 +'"><span>'+ data[iNow].data[1].title7 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[2].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[2].src0 + '"><span>'+ data[iNow].data[2].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[2].src1 +'"><span>'+ data[iNow].data[2].title1 +'</span></a></li></ul></div><div id = "inner-right"><img src = "'+ data[iNow].data[3].src0 +'"/><img src = "'+ data[iNow].data[3].src1 +'"/></div>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 1){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src1 + '"><span>'+ data[iNow].data[0].title1 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src2 + '"><span>'+ data[iNow].data[0].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src3 + '"><span>'+ data[iNow].data[0].title3 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[1].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "'+ data[iNow].data[1].src0 +'"><span>'+ data[iNow].data[1].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src1 +'"><span>'+ data[iNow].data[1].title1 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src2 +'"><span>'+ data[iNow].data[1].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src3 +'"><span>'+ data[iNow].data[1].title3 +'</span></a></li><li><a href = "#"><img src = "'+data[iNow].data[1].src4+'"><span>'+ data[iNow].data[1].title4 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[1].src5 + '"><span>'+data[iNow].data[1].title5+'</span></a></li><li><a href = "#"><img src = "'+data[iNow].data[1].src6+'"><span>' +data[iNow].data[1].title6+ '</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src7 +'"><span>'+ data[iNow].data[1].title7 +'</span></a></li></ul><ul></div><div id = "inner-right"><img src = "'+ data[iNow].data[2].src0 +'"/><img src = "'+ data[iNow].data[2].src1 +'"/></div>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 2){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src1 + '"><span>'+ data[iNow].data[0].title1 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src2 + '"><span>'+ data[iNow].data[0].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src3 + '"><span>'+ data[iNow].data[0].title3 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src4 + '"><span>'+ data[iNow].data[0].title4 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src5 + '"><span>'+ data[iNow].data[0].title5 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[1].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "'+ data[iNow].data[1].src0 +'"><span>'+ data[iNow].data[1].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src1 +'"><span>'+ data[iNow].data[1].title1 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src2 +'"><span>'+ data[iNow].data[1].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src3 +'"><span>'+ data[iNow].data[1].title3 +'</span></a></li><li><a href = "#"><img src = "'+data[iNow].data[1].src4+'"><span>'+ data[iNow].data[1].title4 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[1].src5 + '"><span>'+data[iNow].data[1].title5+'</span></a></li><li><a href = "#"><img src = "'+data[iNow].data[1].src6+'"><span>' +data[iNow].data[1].title6+ '</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src7 +'"><span>'+ data[iNow].data[1].title7 +'</span></a></li></ul><ul></div><div id = "inner-right"><img src = "'+ data[iNow].data[2].src0 +'"/><img src = "'+ data[iNow].data[2].src1 +'"/></div>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 3){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src1 + '"><span>'+ data[iNow].data[0].title1 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src2 + '"><span>'+ data[iNow].data[0].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src3 + '"><span>'+ data[iNow].data[0].title3 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src4 + '"><span>'+ data[iNow].data[0].title4 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src5 + '"><span>'+ data[iNow].data[0].title5 +'</span></a></li></ul>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 4){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[0].src1 + '"><span>'+ data[iNow].data[0].title1 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[1].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "'+ data[iNow].data[1].src0 +'"><span>'+ data[iNow].data[1].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src1 +'"><span>'+ data[iNow].data[1].title1 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src2 +'"><span>'+ data[iNow].data[1].title2 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[1].src3 +'"><span>'+ data[iNow].data[1].title3 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[2].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[2].src0 + '"><span>'+ data[iNow].data[2].title0 +'</span></a></li><li><a href = "#"><img src = "'+ data[iNow].data[2].src1 +'"><span>'+ data[iNow].data[2].title1 +'</span></a></li></ul><ul><a href = "#" class = "inner-left-a">'+ data[iNow].data[2].a +'<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[2].src0 + '"><span>'+ data[iNow].data[2].title0 +'</span></a></li></ul></div>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 5){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li></ul></div>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 6){
			$.ajax({
				method:"get",
				url:"data/data1.json",
				success:function(data){
					var html = "";
					html += '<div id = "inner-left"><ul><a href = "#" class = "inner-left-a">' + data[iNow].data[0].a + '<span class = "iconfont icon-jiantouyou"></span></a><li><a href = "#"><img src = "' + data[iNow].data[0].src0 + '"><span>'+ data[iNow].data[0].title0 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src1 + '"><span>'+ data[iNow].data[0].title1 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src2 + '"><span>'+ data[iNow].data[0].title2 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src3 + '"><span>'+ data[iNow].data[0].title3 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src4 + '"><span>'+ data[iNow].data[0].title4 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src5 + '"><span>'+ data[iNow].data[0].title5 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src6 + '"><span>'+ data[iNow].data[0].title6 +'</span></a></li><li><a href = "#"><img src = "' + data[iNow].data[0].src7 + '"><span>'+ data[iNow].data[0].title7 +'</span></a></li></ul></div>';
					$("#outerdiv").html(html);
				}				
			})
		}
		if(iNow == 7){
			$("#outerdiv").css("display", "none");
		}
		if(iNow == 8){
			$("#outerdiv").css("display", "none");
		}
	})
	$("#second").on("mouseleave",function(){
		$("#outerdiv").on("mouseenter",function(){
			$("#outerdiv").css("display", "block");
		})
		$("#outerdiv").on("mouseleave",function(){
			$("#outerdiv").css("display", "none");
		})
		$("#second li").on("mouseleave",function(){
			$("#outerdiv").css("display", "none");
		})
	})
	// 轮播图
	var index = 0;
	var timer = null;
	var aBtns = $("#banner").find("ol").find("li");
	aBtns.click(function(){
		index = $(this).index();
		changeTo(index);
	})

	timer = setInterval(function(){
		if (index < $("#banner_img li").length - 1) {
			index++;
		}else{
			index = 0;
		}
		changeTo(index)
	},3500);


	$("#banner_left").click(function(){
		//点击时往左移动一个
		if (index == 0) {
			index = $("#banner_img li").length;
		}
		changeTo(index - 1);
		
		index = index - 1;

	});
	$("#banner_right").click(function(){
		//点击时右移动一个
		if (index == $("#banner_img li").length - 1) {
			index = -1;
		}
		changeTo(index + 1);
		
		index = index + 1;
	});
	function changeTo(num){
		
		$("#banner_img li").attr("class", "").css("display", "none");
		$("#banner_img li").eq(num).fadeIn(300, function(){}).addClass("on").css("display", "inline-block");
		
		$("#banner_list li").attr("class", "");
		$("#banner_list li").eq(num).attr("class", "on");
	}
	// 左右箭头切换
	$("#hougoods-right").click(function(){
		$("#hougoods-left").attr("class", "");
		$("#hotgoods-ul").animate({left: -1270});
		$("#hougoods-right").attr("class", "right");
	})
	$("#hougoods-left").click(function(){
		$("#hougoods-left").attr("class", "left");
		$("#hotgoods-ul").animate({left: 0});
		$("#hougoods-right").attr("class", "");
	})
	// 游戏笔记本
	$(".content-head-ul").on("mouseenter", "li", function(){
		var index = $(this).index();
		$(".content-head-ul").find("li").attr("class", "");
		$(this).attr("class", "tab-active");
		$(".content-shopping").find("ul").css("display", "none");
		$(".content-shopping").find("ul").eq(index).css("display", "block");
	});
	$(".content-head-ul1").on("mouseenter", "li", function(){
		var index = $(this).index();
		$(".content-head-ul1").find("li").attr("class", "");
		$(this).attr("class", "tab-active");
		$(".content-shopping1").find("ul").css("display", "none");
		$(".content-shopping1").find("ul").eq(index).css("display", "block");
	});
	// 游戏台式机
	$("#hougoods-right1").click(function(){
		$("#hougoods-left1").attr("class", "");
		$("#hotgoods-ul1").animate({left: -1270});
		$("#hougoods-right1").attr("class", "right");
	})
	$("#hougoods-left1").click(function(){
		$("#hougoods-left1").attr("class", "left");
		$("#hotgoods-ul1").animate({left: 0});
		$("#hougoods-right1").attr("class", "");
	})
	// 为你精选
	$("#hougoods-right2").click(function(){
		$("#hougoods-left2").attr("class", "");
		$("#hotgoods-ul2").animate({left: -1270});
		$("#hougoods-right2").attr("class", "right");
	})
	$("#hougoods-left2").click(function(){
		$("#hougoods-left2").attr("class", "left");
		$("#hotgoods-ul2").animate({left: 0});
		$("#hougoods-right2").attr("class", "");
	})
	// 游戏专区
	$("#hougoods-right3").click(function(){
		$("#hougoods-left3").attr("class", "");
		$("#hotgoods-ul3").animate({left: -1270});
		$("#hougoods-right3").attr("class", "right");
	})
	$("#hougoods-left3").click(function(){
		$("#hougoods-left3").attr("class", "left");
		$("#hotgoods-ul3").animate({left: 0});
		$("#hougoods-right3").attr("class", "");
	})


})