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
			$("#second").css("display", "block");
		})
		$("#outerdiv").on("mouseleave",function(){
			$("#outerdiv").css("display", "none");
			$("#second").css("display", "none");
		})
		$("#second li").on("mouseleave",function(){
			$("#outerdiv").css("display", "none");
		})
	})
	// 鼠标移到分类上，ul显示
	$(".feileinew").on("mouseenter", function(){
		$("#second").css("display", "block");
	})

	$(".feileinew").on("mouseleave", function(){
		$("#second").on("mouseenter",function(){
			$("#second").css("display", "block");

		})
		$("#second").on("mouseleave",function(){
			$("#second").css("display", "none");
		})
	})
	$(".feileinew").on("mouseleave", function(){
		$("#second").css("display", "none");
	})

	// 正文列表部分
	// 加载数据
	$.ajax({
		method:"get",
		url:"data/datalist.json",
		success:function(data){
			var html = "";
			for(var i=0; i < 8;i++){
				html+='<div class="goods-item"><a href="#" class="btn-like"><i class="iconfont icon-favorites"></i><span class = "span1">收藏</span></a><a class="btn-buy" id="'+data[i].id+'" href = "shoppingcar.html"><span class = "span2">购买</span><i class="iconfont icon-cart"></i></a><div class="figure-img"><a href="shop.html"><img src="' + data[i].src +'" class="goodsimg"></a></div><h2 class="title"><a href="shop.html">'+ data[i].title+'</a></h2><p class="desc">'+ data[i].font +'</p><p class="price">官方价<font class="shop_s">'+ data[i].price +'</font></p><div class="thumbs"><div style="width:212px;margin:0 auto;"><ul class="thumb-list"><li class="active"><a><img src="'+ data[i].src +'" width="34" height="34"></a></li></ul></div></div></div>'		
			}
			$("#goods-list").append(html);	
		}
	})
	$("#goods-list").on("mouseenter", ".goods-item",function(){
		$(this).find(".btn-like").css("display", "block");
		$(this).find(".btn-buy").css("display", "block");
	});
	$("#goods-list").on("mouseleave", ".goods-item",function(){
		$(this).find(".btn-like").css("display", "none");
		$(this).find(".btn-buy").css("display", "none");
	});
	$("#pager").on("click", ".page_now",function(){
		$("#goods-list").html("");
		var index =  $(this).index();
		$(this).css("color", "black").css("font-size","18px"); 
		$(this).siblings(".page_now").css("color", "#8c8c8c").css("font-size","16px"); 
		if(index ==2){
			$.ajax({
				method:"get",
				url:"data/datalist.json",
				success:function(data){
					var html = "";
					for(var i=8; i < 16;i++){
						html+='<div class="goods-item"><a href="#" class="btn-like"><i class="iconfont icon-favorites"></i><span class = "span1">收藏</span></a><a href="#" class="btn-buy"><span class = "span2">购买</span><i class="iconfont icon-cart"></i></a><div class="figure-img"><a href="#"><img src="' + data[i].src +'" class="goodsimg"></a></div><h2 class="title"><a href="#">'+ data[i].title+'</a></h2><p class="desc">'+ data[i].font +'</p><p class="price">官方价<font class="shop_s">'+ data[i].price +'</font></p><div class="thumbs"><div style="width:212px;margin:0 auto;"><ul class="thumb-list"><li class="active"><a><img src="'+ data[i].src +'" width="34" height="34"></a></li></ul></div></div></div>'		
					}
					$("#goods-list").append(html);	
				}
			})
		}
		if(index ==3){
			$.ajax({
				method:"get",
				url:"data/datalist.json",
				success:function(data){
					var html = "";
					for(var i=15; i < 20;i++){
						html+='<div class="goods-item"><a href="#" class="btn-like"><i class="iconfont icon-favorites"></i><span class = "span1">收藏</span></a><a href="#" class="btn-buy"><span class = "span2">购买</span><i class="iconfont icon-cart"></i></a><div class="figure-img"><a href="#"><img src="' + data[i].src +'" class="goodsimg"></a></div><h2 class="title"><a href="#">'+ data[i].title+'</a></h2><p class="desc">'+ data[i].font +'</p><p class="price">官方价<font class="shop_s">'+ data[i].price +'</font></p><div class="thumbs"><div style="width:212px;margin:0 auto;"><ul class="thumb-list"><li class="active"><a><img src="'+ data[i].src +'" width="34" height="34"></a></li></ul></div></div></div>'		
					}
					$("#goods-list").append(html);	
				}
			})
		}
		if(index ==1){
			$.ajax({
				method:"get",
				url:"data/datalist.json",
				success:function(data){
					var html = "";
					for(var i=0; i < 8;i++){
						html+='<div class="goods-item"><a href="#" class="btn-like"><i class="iconfont icon-favorites"></i><span class = "span1">收藏</span></a><a class="btn-buy" id="'+data[i].id+'"><span class = "span2">购买</span><i class="iconfont icon-cart"></i></a><div class="figure-img"><a href="shop.html"><img src="' + data[i].src +'" class="goodsimg"></a></div><h2 class="title"><a href="shop.html">'+ data[i].title+'</a></h2><p class="desc">'+ data[i].font +'</p><p class="price">官方价<font class="shop_s">'+ data[i].price +'</font></p><div class="thumbs"><div style="width:212px;margin:0 auto;"><ul class="thumb-list"><li class="active"><a><img src="'+ data[i].src +'" width="34" height="34"></a></li></ul></div></div></div>'		
					}
					$("#goods-list").append(html);	
				}
			})
		}
		
	})
	// 小轮播图
	$.ajax({
		method:"get",
		url:"data/datalist.json",
		success:function(data){
			var html = "";
			for(var i = 0; i < 9;i++){
				html+='<li><dl><dt><img src = "'+ data[i].src +'"/></dt><dd class = "recommand-name"><a href="#">'+ data[i].title +'</a></dd><dd class = "recommand-price">'+ data[i].price +'</dd></dl></li>';
			}
			$("#recommand-ul1").append(html);
		}
	})

	$("#xm-pagers").on("click", "li", function(){
		$("#xm-pagers").find("li").attr("class", "");
		$(this).attr("class", "pager-active")
	})
	$("#xm-pagers").find("li").eq(1).on("click", function(){
		$("#recommand-ul1").animate({left:-1248});
	})
	$("#xm-pagers").find("li").eq(0).on("click", function(){
		$("#recommand-ul1").animate({left:0});
	})

	$("#goods-list").on("click", ".btn-buy", function(){
		//console.log(this.id);
		var id = this.id;
		var first = $.cookie("goods") == null ? true : false;
		if(first){
			//第一次添加  [{id:id,num:2}]
			$.cookie("goods", '[{id:' + id + ',num:1}]', {
				expires: 7
			});
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			var same = false; //代表是否有相同商品
			//遍历所有的对象，判断是否id相同，num++
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num + 1;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr,  {
						expires: 7
					});
					same = true;
					break;
				}
			}
			//没有相同的商品
			if(!same){
				var obj = {id: id, num: 1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {
					expires: 7
				});
			}
			// sc_car();
		}
		sc_msg();
		console.log($.cookie("goods"));
		
	})

	function sc_msg(){
		$.ajax({
			url: "data/datalist.json",
			type: "get",
			success: function(data){
				var sc_arr = eval($.cookie("goods"));
				var html = '';
				for(var i in sc_arr){
					html += '<div class = "item-box"><div class = "item-table"><div class = "col-img"><img src = "'+ data[sc_arr[i].id].src +'"/></div><div class = "col-name"><h3 class = "name">'+ data[sc_arr[i].id].title +'</h3></div><div class = "col-price">'+ data[sc_arr[i].id].price +'</div><div class = "col-num"><button class = "left">-</button><input type = "text" value="1" class = "col-num-inp"><button class = "right">+</button></div><div class = "col-total"><span class="col-total-change">'+ data[sc_arr[i].id].price +'</span></div><div class="col-action">x</div></div></div>';
					$(".list-body").append(html);
				}				
			}
		})
	}
		//购物车数字
		// function sc_car(){
		// 	var sc_str = $.cookie("goods");
		// 	if(sc_str){ //判断字符串是否存在
		// 		var sc_arr = eval(sc_str);
		// 		var sc_num = 0;
		// 		for(var i in sc_arr){
		// 			sc_num = Number(sc_arr[i].num) + sc_num;
		// 		}
		// 		$(".sc_num").html(sc_num);
		// 	}
		// }

})