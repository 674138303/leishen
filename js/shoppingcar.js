$(function(){
	var first = $.cookie("goods") == null ? true : false;
	if(first){
		/*加载购物车为空的页面******************/
		$("#cart-box").css("display", "none");
		html = '<div class="container"><div class="cart-empty"><h2>您的购物车还是空的!</h2><a href="index.html" class="btn btn-primary">马上去购物</a></div></div>';
		$("#empty").html(html);
	}else{
		//加载数据
		sc_msg();
		
	}
	function sc_msg(){
		$.ajax({
			url: "data/datalist.json",
			type: "get",
			success: function(data){
			
				var sc_arr = eval($.cookie("goods"));
				var html = '';
				var price = 0;
				for(var i in sc_arr){
					var	subtotal =  Number(data[sc_arr[i].id].price)*sc_arr[i].num;
					html += '<div class = "item-box"><div class = "item-table"><div class = "col-img"><img src = "'+ data[sc_arr[i].id].src +'"/></div><div class = "col-name"><h3 class = "name">'+ data[sc_arr[i].id].title +'</h3></div><div class = "col-price">'+ data[sc_arr[i].id].price +'</div><div class = "col-num"><button class = "left" data = "'+ sc_arr[i].id +'">-</button><input type = "text" value="'+ sc_arr[i].num +'" class = "col-num-inp"><button class = "right" data = "'+ sc_arr[i].id +'">+</button></div><div class = "col-total"><span class="col-total-change">'+ subtotal +'</span></div><div class="col-action" data = "'+ sc_arr[i].id +'">x</div></div></div>';		
					price += Number(data[sc_arr[i].id].price)*sc_arr[i].num;
				}
				$(".list-body").html(html);
				$("#totalSkuPrice").html(price);
			sc_car();
			}
		})
	}
	
	$(".list-body").on("click", ".right", function(){
		var str = $.cookie("goods");
			var arr = eval(str);
			//遍历所有的对象，判断是否id相同，num++
			for(var i in arr){
				if(arr[i].id == $(this).attr('data')){
					arr[i].num = arr[i].num + 1;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr,  {
						expires: 7
					});
				}
			}
		sc_msg();
	})
	$(".list-body").on("click",".left", function(){
		var str = $.cookie("goods");
			var arr = eval(str);

			//遍历所有的对象，判断是否id相同，num--
			for(var i in arr){
				if(arr[i].id == $(this).attr('data')){
					arr[i].num = arr[i].num - 1;
					if(arr[i].num < 1){
						arr[i].num =1;
						alert("商品数量不能小于1");
					}

					var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
				}
			}
		sc_msg();
		console.log($.cookie("goods"));
	})
	$(".list-body").on("click",".col-action",function(){
		var str = $.cookie("goods");
		var arr = eval(str);
		var sure = confirm("确定要删除这件商品吗？");	
		if(sure == true){
			//遍历所有的对象，判断是否id相同，删除
			for(var i in arr){
				if(arr[i].id == $(this).attr('data')){
					arr.splice(i,1);
					if(arr.length == 0){
						$.cookie("goods",null);
						break;
					}
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr,  {
						expires: 7
					});

				}
			}

			sc_msg();
			location.reload();
		}

		console.log($.cookie("goods"));
	})
	$("#del-all").on("click", function(){
		var sure = confirm("确定要清空吗？");	
		if(sure == true){
			$.cookie("goods",null);
		}
		location.reload();

	})


	function sc_car(){
		var sc_str = $.cookie("goods");
		if(sc_str){ //判断字符串是否存在
			var sc_arr = eval(sc_str);
			var sc_num = 0;
			for(var i in sc_arr){
				sc_num = Number(sc_arr[i].num) + sc_num;
			}
			$("#selectedCount").html(sc_num);
		}
	}
})