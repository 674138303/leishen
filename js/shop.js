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
	$(".mark_box").on("mouseenter",function(){
		$(".position_box").css("display", "block");
		$("#pic_b_big").css("display", "block");
	});
	$(".mark_box").on("mouseleave",function(){
		$(".position_box").css("display", "none");
		$("#pic_b_big").css("display", "none");
	})
	$(".mark_box").on("mousemove", function(ev){
		var left = ev.pageX - $(this).offset().left - $(".position_box").width()/2;
		var top = ev.pageY - $(this).offset().top - $(".position_box").height()/2;
	
		if(left<0){
			left=0;
		}else if(left>$(this).width() -$(".position_box").width()){
			left = $(this).width()-$(".position_box").width();
		}
		$(".position_box").css("left", left);

		if(top<0){
			top=0;
		}else if(top>$(this).height() - $(".position_box").height()){
			top = $(this).height()-$(".position_box").height();
		}
		$(".position_box").css("top", top);
		//移动的比例  把X值和Y值换算成比例;
		var proportionX=left/($("#pic_b").width()-$(".position_box").width());
		var proportionY=top/($("#pic_b").height()-$(".position_box").height());
		$("#b_box_all").css("left", -proportionX*($("#b_box_all").width()-$("#pic_b_big").width()));
		$("#b_box_all").css("top", -proportionY*($("#b_box_all").height()-$("#pic_b_big").height()));
	})

	$("#pic_s_move").on("click", "div", function(){
		$("#pic_s_move").find("div").attr("class", "");
		$(this).attr("class", "border");
		$(".mark_box").find("img").attr("src", $(this).find("img").attr("src"));
		$("#b_box_all").find("img").attr("src", $(this).find("img").attr("src"));
		
	})
	var timer=null;
	timer = setInterval(function(){		
		if($("#pic_s_move").css("top") == "-90px"){
			$("#pic_s_move").animate({top:0});
		};
		
		if($("#pic_s_move").css("top") == "0px"){
			$("#pic_s_move").animate({top:-90});
		};
	},2000);
	$("#add").on("click", function(){
		var num1 = $("#number").html();
		num1++;
		$("#number").html(num1);
	})
	$("#sub").on("click", function(){
		var num1 = $("#number").html();
		num1--;

		$("#number").html(num1);
		if($("#number").html() < "1"){
			alert("商品数量不能小于1");
			$("#number").html(1);
		}
	})



	$("#take-in").on("click", function(){
		var first = $.cookie("goods") == null ? true : false;
		if(first){
			//第一次添加  [{id:id,num:2}]
			$.cookie("goods", '[{id:1,num:'+ $("#number").html() +'}]', {
				expires: 7
			});
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			var same = false; //代表是否有相同商品

			//遍历所有的对象，判断是否id相同，num++
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num + $("#number").html();
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
				var obj = {id: id, num: $("#number").html()};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr, {
					expires: 7
				});
			}
			sc_car();
		}
		console.log($.cookie("goods"));
	})
		

})