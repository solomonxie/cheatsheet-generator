/**
* 
* @authors Solomon Xie (solomonxiewise@gmail.com)
* @date    2018-01-28 13:49:58
* @version v0.1
*/

/*
// EMMET: 
// label[for="参数a"]{ 显示标签 }>input[type="checkbox"][id="参数a"]+input[type="text"][id="[参数a]"]
// 伪代码设计流程:
找到所有参数标签(<input>);
for (循环读取每个参数标签) {
	每个参数选项.onclick = function(){
		// 筛选出被选中的参数项
		var 已选标签组 = [];
		for(循环每一个checkbox){
			if (独立选项 and 已被选中) { 
				直接生成命令行; 
			} else if (一般选项：即该checkbox选中){ 
				已选标签组 += checkbox; 
			} else if (必填项) {
				if (已填) { 已选标签组 += checkbox; }
				else { 
					直接退出所有循环,禁止继续生成命令;
					预览区显示默认命令;
					并提示用户;
				}
			}
		}
		// 生成参数命令
		var 已选参数组 = [];
		for (循环每一个已选标签组) {
			if (是独立参数) {
				// 直接生成命令;
				已选参数组 += 参数名(比如"-h");
				结束循环(直接去完成预览刷新);
			} 
			//如果是一般参数，也分为键值参数和单独参数，区别就是有没有对应的文本框　
			查找参数对应textbox;
			if (对应的文本框存在) {
				已选参数组 += (参数名 + " " + 文本框中参数值);
			} else {
				已选参数组 += 本参数值(比如"-b");
			}
		}
		预览条内容=已选参数组.生成用空格隔开的字符串();
	}
}
*/

window.onload = function() {
	// Set triger-function to all relavent options
	var options = document.getElementsByTagName("input");
	for (var i = 0; i < options.length; i++) {
		options[i].onchange = function(){
			document.getElementById("preview").innerHTML = "wget "+ update_cmd("[options] [URL]");
		};
		if (options[i].type=="text") {
			options[i].oninput = function() {
				document.getElementById("preview").innerHTML = "wget "+ update_cmd("[options] [URL]");
			}
		}
	}
}

function update_cmd(dft){
	var cmd = []; // consist of option and values
	var required = []; // required options will be after all other options
	var options = document.getElementsByTagName("input");
	// filter all checked boxes
	var checkedboxes = [];
	for (var i = 0; i < options.length; i++) {
		if (options[i].checked && options[i].getAttribute("opt-type") == "exclusive") {
			// exclusive option does not pair with any other options or values
			return options[i].id;
		} else if (options[i].checked) {
			checkedboxes.push(options[i]); 
		} else if (options[i].required) {
			// No command line will be displayed until required info is given.
			if (options[i].value) { required.push(options[i].value); }
			else { return dft;} 
		}
	}
	// generate command line with bunch options and values
	for (var i = 0; i < checkedboxes.length; i++) {
		// two kinds of options, indentified by if they have a paired textbox with a specified ID.
		var textbox = document.getElementById("["+ checkedboxes[i].id +"]")
		if (textbox) { // option-value pair
			if (textbox.value) { cmd.push(checkedboxes[i].id +" "+ textbox.value) }
		} else { cmd.push(checkedboxes[i].id) }
	}
	return (cmd.concat(required)).join(" ");
}