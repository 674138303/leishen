$(function(){
	var data1 = [

		{
			"aHref":"http://www.leishen.cn/item/420",
			"src":"img/420_thumb_G_1487798015605.jpg",
			"title1":"雷神911GT-Y6",
			"price":"10999.0"
		},{
			"aHref":"http://www.leishen.cn/item/428",
			"src":"img/428_thumb_G_1487798719978.jpg",
			"title1":"雷神911GT-Y5T",
			"price":"8999.0"
		},{
			"aHref":"http://www.leishen.cn/item/530",
			"src":"img/530_thumb_G_1506116538492.jpg",
			"title1":"雷神911-T5",
			"price":"7699.0"
		},{
			"aHref":"http://www.leishen.cn/item/421",
			"src":"img/421_thumb_G_1487798838342.jpg",
			"title1":"雷神911-S6",
			"price":"8299.0"
		},{
			"aHref":"http://www.leishen.cn/item/426",
			"src":"img/426_thumb_G_1487798740591.jpg",
			"title1":"雷神911黑武士",
			"price":"6999.0"
		},{
			"aHref":"http://www.leishen.cn/item/424",
			"src":"img/424_thumb_G_1487798777959.jpg",
			"title1":"雷神911M-M6B",
			"price":"8499.0"
		}
	]
	var oLi = document.createElement("li");
	oLi.className = "first";
	var oDiv1 = document.createElement("div");		
	oDiv1.className = "figure"; 
	var oA1 = document.createElement("a");
	oA1.href = data1[0].aHref;
	var oImg = document.createElement("img");
	oImg.src = data1[0].src;

	var oDiv2 = document.createElement("div");
	oDiv2.className = "title"; 
	var oA2 = document.createElement("a");
	oA2.href = data1[0].aHref;
	oA2.innerHTML = data1[0].title1; 
	var oP = document.createElement("p");
	oP.className = "price";
	oP.innerHTML = data1[0].price;
	$(".children-list").append(oLi);
	$(".first").append(oDiv1);
	$(".first").append(oDiv2);
	$(".first").append(oP);
	$(".figure").append(oA1);
	oA1.appendChild(oImg);
	$(".title").append(oA2);

})


//  <li class = "first">
// 		<div class="figure">
// 			<a href="#">
// 				<img src="img/420_thumb_G_1487798015605.jpg">
// 			</a>
// 		</div>
// 		<div class="title">
// 			<a href="#">雷神911GT-Y6</a>
// 		</div>
// 		<p class="price">10999.0</p>
// 	</li>

// 	<li class = "first">
// 		<div class="figure">
// 			<a href="#">
// 				<img src = "img/428_thumb_G_1487798719978.jpg">
// 			</a>
// 		</div>
// 		<div class="title">
// 			<a href="#">雷神911-S6</a>
// 		</div>
// 		<p class="price">8999.0</p>
// 	</li>

// 	<li class = "first">
// 		<div class="figure">
// 			<a href="#">
// 				<img src="img/530_thumb_G_1506116538492.jpg">
// 			</a>
// 		</div>
// 		<div class="title">
// 			<a href="#">雷神911-T5</a>
// 		</div>
// 		<p class="price">7699.0</p>
// 	</li>

// 	<li class = "first">
// 		<div class="figure">
// 			<a href="#">
// 				<img src="img/421_thumb_G_1487798838342.jpg">
// 			</a>
// 		</div>
// 		<div class="title">
// 			<a href="#">雷神911-S6</a>
// 		</div>
// 		<p class="price">8299.0</p>
// 	</li>

// 	<li class = "first">
// 		<div class="figure">
// 			<a href="#">
// 				<img src="img/426_thumb_G_1487798740591.jpg">
// 			</a>
// 		</div>
// 		<div class="title">
// 			<a href="#">雷神911黑武士</a>
// 		</div>
// 		<p class="price">6999.0</p>
// 	</li>

// 	<li class = "first">
// 		<div class="figure">
// 			<a href="#">
// 				<img src="img/424_thumb_G_1487798777959.jpg">
// 			</a>
// 		</div>
// 		<div class="title">
// 			<a href="#">雷神911M-M6B</a>
// 		</div>
// 		<p class="price">8499.0</p>
// 	</li>




// {
// 		"title1":"爆款2",
// 		"title2":"裤子1"，
// 		"content1":["雷神","神州","耐克"],
// 		"content2":["话说","雷神","神州","耐克","雷神","神州","耐克"]
// 	},

// for(var i = 0;i<list.length;i++){

// 	list[i].mouseover(function(){

// 		var dv = "";
// 		$('title[i]').html(data[i].title1)



// 	})


// }