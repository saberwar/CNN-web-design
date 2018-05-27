// 属性弹窗,Fc
function createFcValue(name,id){
	 var tag=name;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>fc</label></td></tr>';
	//inhtml+='<tr><td><label>rows</label></td><td><input type="text" id="Fc_rows"></td></tr>';
	inhtml+='<tr><td><label>cols</label></td><td><input type="text" id="Fc_cols"></td></tr>';
	inhtml+='<tr><td><label>Trainable</label></td><td><select id="Fc_select"><option value="true">true</option><option value="false">false</option></select></td></tr>';
	inhtml+='<tr><td><label>OP</label></td><td><input type="text" id="Fc_Op" value="get_variable"></td></tr>';
	
	list.innerHTML=inhtml+'</tbody></table>';
	
	 var btn=document.createElement("button");
	   btn.innerHTML="submit";
	    btn.onclick=function(){
		  
		  hide(tag,id);
		 }
	
	   list.appendChild(btn);
	     //判断是否已经有用户输入
	for(var i=0;i<fc_list.length;i++){
					
					  if(fc_list[i].id==id){
						  
						 fc_list[i].fillData();
						  
						  }
					
					
					}
}
	
