// 配置信息框体产生

//获取按钮所在div
function show_config(obj){
	parameters.fillData();
	var type = obj.innerHTML;
var data_path = document.getElementById("data_path");
var save_path = document.getElementById("save_path");

var div_btn_data = document.getElementById("config_tag_data");
var div_btn_save = document.getElementById("config_tag_save");
switch (type){
	case "data-path":div_btn_data.style.display='block';break;
    case "save_path":div_btn_save.style.display='block';break;
	case "parameters":document.getElementById("config_tag_parameters").style.display='block';break;
	
	
	}






}

//提交
function hide_config(){
	parameters.upData();
	
document.getElementById("config_tag_parameters").style.display='none';
document.getElementById("config_tag_data").style.display='none';
document.getElementById("config_tag_save").style.display='none';

	
	
	}