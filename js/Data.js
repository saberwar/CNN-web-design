// 弹窗内容，属性列表Data
function createDataValue(num){
       //alert(num);
	   var tag=num;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr>';
	inhtml+='<td><label>name</label></td>';
	inhtml+='<td><label>Data</label></td></tr>';
	inhtml+='<tr><td><label>check_point_dir</label></td><td><input type="text" id="Data_check_point_dir"></td></tr>';
	inhtml+='<tr><td><label>train_datas_dir</label></td><td><input type="text" id="Data_train_datas_dir"></td></tr>';
	inhtml+='<tr><td><label>train_labels_dir</label></td><td><input type="text" id="Data_train_labels_dir"></td></tr>';
	inhtml+='<tr><td><label>eval_datas_dir</label></td><td><input type="text" id="Data_eval_datas_dir"></td></tr>';
	inhtml+='<tr><td><label>eval_labels_dir</label></td><td><input type="text" id="Data_eval_labels_dir"></td></tr>';
	inhtml+='<tr><td><label>channel</label></td><td><input type="text" id="Data_channel"></td></tr>';
	inhtml+='<tr><td><label>op</label></td><td><input type="text" id="Data_op"></td></tr>';
	//inhtml+="<tr><td><input type='button' value='submit' onClick=hide("+"'Data',"+tag+")></td></tr>";
	
	list.innerHTML=inhtml+'</tbody></table>';
	  var btn=document.createElement("button");
	   btn.innerHTML="submit";
	   //btn.setAttribute("onClick","hide('Data',tag)");
	 btn.onclick=function(){
		  
		 hide('Data',tag);
		 }
	   list.appendChild(btn);
	//判断是否已经有用户输入
		
				for(var i=0;i<data_list.length;i++){
					
					  if(data_list[i].num==num){
						  
						 data_list[i].fillData();
						  
						  }
					
					
					}
					
	}
	
	
				
				