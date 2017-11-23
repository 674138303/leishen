require.config({
	path:{
		"add":"add.js",
	}
})

require(["add"],function(add){
	add.add(10,20);
})