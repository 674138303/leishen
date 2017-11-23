$(function(){
	$("#login-html").on("focus", "#nickname1" ,function(){

		$("#i1").css("background-position", "-19px 0px");

	});
	$("#login-html").on("blur", "#nickname1", function(){

		$("#i1").css("background-position", "0px 0px");

	});
	$("#login-html").on("focus", "#password1",function(){

		$("#i2").css("background-position", "-19px -20px");

	});
	$("#login-html").on("blur", "#password1",function(){

		$("#i2").css("background-position", "0px -20px");

	});

	
	// $("#login-html").on("#verify",function(){
		
	// });
	$("#verify").html(authCode(4));


	$("#login-html").on("click", "#verify",function(){
		$("#verify").html(authCode(4));
	});
	$("#login-html").on("click", "#change",function(){
		$("#verify").html(authCode(4));
	});
	$("#login-html").on("click", "#login-btn",function(){
		// alert($("#verifyText").val())
		if (($("#verifyText").val() != $("#verify").html()) && $("#verifyText").val() != ""){
			alert("验证码错误！");
		}else if($("#verifyText").val() == ""){
			alert("请输入验证码！");
		}else if($("#verifyText").val() == $("#verify").html()){
			var phone = $("#nickname1").val();
			var pwd = $("#password1").val();
			var sc_str = $.cookie("user");
			var sc_arr = eval(sc_str);
			//遍历cookie中的对象
			for(var i in sc_arr){
				console.log(sc_arr[i].id);
				//找出相同用户
				if(phone == sc_arr[i].id){
					//验证密码
					if(pwd == sc_arr[i].password){
						alert("验证成功，正在跳转。。。");
						window.location.href='index.html';
						continue;
					}else{
						alert("该用户尚未注册或密码错误！");
						continue;
					}
				}
			}
		}
	});
});
function authCode(n){
	var arr = [];
	for(var i = 0; i < n; i++){
		var num = parseInt(Math.random() * 100);
		if(num >= 0 && num < 10){
			arr.push(num);
		}else if(num >= 10 && num <= 35){
			arr.push(String.fromCharCode(num + 87));
		}else if(num >= 65 && num <= 90){
			arr.push(String.fromCharCode(num));
		}else{
			//无用数
			i--;
			continue;
		}
	}
	return arr.join("");
}