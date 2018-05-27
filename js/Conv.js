// Conv属性弹窗
function createConvValue(name,id){
	  var tag=name;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>conv</label></td></tr>';
	inhtml+='<tr><td><label>kernel_size</label></td><td><input type="text" id="Conv_kernel_size"></td></tr>';
	inhtml+='<tr><td><label>Input_num</label></td><td><input type="text" id="Conv_Input_num"></td></tr>';
	inhtml+='<tr><td><label>Output_num</label></td><td><input type="text" id="Conv_Output_num"></td></tr>';
	inhtml+='<tr><td><label>Stride</label></td><td><input type="text" id="Conv_Stride"></td></tr>';
	inhtml+='<tr><td><label>Trainable</label></td><td><select id="Conv_select"><option value="true">true</option><option value="false">false</option></select></td></tr>';
	inhtml+='<tr><td><label>Op</label></td><td><input type="text" id="Conv_Op" value="conv2d"></td></tr>';
	
	list.innerHTML=inhtml+'</tbody></table>';
	
	list.innerHTML=inhtml+'</tbody></table>';
	   var btn=document.createElement("button");
	   btn.innerHTML="submit";
	   btn.onclick=function(){
		  
		 hide(tag,id);
		 }
	
	   list.appendChild(btn);
	//判断是否已经有用户输入
	for(var i=0;i<conv_list.length;i++){
					
					  if(conv_list[i].id==id){
						  
						 conv_list[i].fillData();
						  
						  }
					
					
					}
	
	
	}
	
	