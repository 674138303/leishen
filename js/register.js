$(function(){
	$("#nickname").on("blur", function(){				
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		var checkName = /^[a-zA-Z0-9_]{3,16}$/;
		if(this.value.length == 0){
			$("#nickname_notice").html("请输入用户名。");
		}else if(oValue.length > 25 || oValue.length < 6){
			$("#nickname_notice").html("用户名长度应为6~25个字符。");				
		}else if(/^\W/.test(oValue)){
			$("#nickname_notice").html("用户名首字母必须是字母、数字或下划线。");	
		}else{
			$("#nickname_notice").html("");
		}				
	})
	$("#email").on("blur",function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		var checkEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		if(checkEmail.test(oValue) == false){
			$("#email_notice").html("请输入正确的邮箱地址。");	
		}else{
			$("#email_notice").html("");	
		}
	})
	$("#password").on("blur", function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		if(oValue.length < 6){
			$("#password_notice").html("登录密码不能少于6个字符。")
		}else{
			$("#password_notice").html("")
		} 
		
	})
	$("#conform_password").on("blur", function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		var oValue1 = $("#password");
		if(oValue.length < 6){
			$("#conform_password_notice").html("登录密码不能少于6个字符。")
		}else if(oValue != this.value){
			$("#conform_password_notice").html("两次输入密码不一致。")
		}else{
			$("#conform_password_notice").html("")
		} 
		
	})
	$("#extend_field5").on("blur", function(){
		var oValue = this.value.replace(/\s/ig, "");
		this.value = oValue;
		var checkPhone = /^1[0-9]{10}$/;
		if(!(checkPhone.test(oValue))){
			$("#extend_field5_notice").html("请输入正确的手机号。")
		}else{
			$("#extend_field5_notice").html("")
		} 	
	})
	$("#submit-btn").click(function(){
		var id = $("#nickname").val();
		var pwd = $("#password").val();
		var first = $.cookie("user") == null ? true : false;
		if(first == true){
			alert("注册成功，请登录。")
			$.cookie('user', '[{id:' + id + ',password:' + pwd + '}]', {
				expires: 7
			});
		}else{
			var str = $.cookie("user");
			var arr = eval(str);
			var same = false; //代表是否有相同用户名
			
			//遍历所有的对象，判断是否id相同
			for(var i in arr){
				if(arr[i].id == id){
					alert("您已注册，请登录；");
					same = true;
					break;
				}			
			}
			//没有相同的
			if(!same){
				var obj = {id: id, password:pwd};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("user", cookieStr, {
					expires: 7
				});
				alert("注册成功，请登录。");
			}
		}		
		console.log($.cookie("user"));
	})




	$(".trigger-box").on("click", function(){
		$("#gray-bored").css("display", "block")
		var html = "";
		var html1 = "";
		html += '<div id = "login"><div id = "login-head"><img src = "img/logo2.0.png" style = "width:70px;height:40px"/><h3>一个帐号，玩转所有雷神官网服务！</h3><button id = "login-close">X</button></div><div><form action="user.php" method="post" name="formUser" onsubmit="return register();"><!-- 用户名 --><div class="inputbg"><label class="labelbox"><input type="text" id="nickname1" placeholder="雷神账号/手机/邮箱">	<i style="background-position: 0px 0px;" id = "i1"></i></label></div><!-- 密码 --><div class="inputbg"><label class="labelbox"><input type="password" id="password1" placeholder="密码"><i style="background-position: 0px -20px;" id = "i2"></i></label></div><!-- 验证码 --><div class="inputbg"><label class="labelbox"><input type="password" id="verifyText" placeholder="验证码" style = "width:180px"></label><span id="verify"></span><a id="change">换一换</a></div><!-- 登录按钮 --><input type="button" id = "login-btn" value="立即登录"><!-- 保存登录信息 跳转页面 --><div id="ng-cookie-area"><label><input type="checkbox" id="remember">请保存我这次的登录信息。</label></div><div id="ng-link-area"><span><a href="#" style = "color: #999">注册</a><span> | </span></span><span><a href="#" style = "color: #999">忘记密码?</a></span></div><!-- 第三方登录 --><div id = "third-login"><span>第三方登录：</span><img src="" /><img src="" /></div></div></div></div>';
		$("#login-html").html(html);
		$("#verify").html(authCode(4));
		$("#login-close").on("click", function(){
			$("#gray-bored").css("display", "none");
			$("#login-html").html(html1);
		})
	})

	

})
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