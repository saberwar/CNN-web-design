// 属性弹窗,Active
function createActiveValue(name,id){
	 var tag=name;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>active</label></td></tr>';
	inhtml+='<tr><td><label>op</label></td><td><select id="Active_op"><option value="relu">relu</option><option value="tanh">tanh</option><option value="sigmoid">sigmoid</option><option value="softmax">softmax</option></select></td></tr>';
	
	
	list.innerHTML=inhtml+'</tbody></table>';
	var btn=document.createElement("button");
	   btn.innerHTML="submit";
	   btn.onclick=function(){
		  
		 hide(tag,id);
		 }
	
	   list.appendChild(btn);
	       //判断是否已经有用户输入
	for(var i=0;i<active_list.length;i++){
					
					  if(active_list[i].id==id){
						  
						 active_list[i].fillData();
						  
						  }
					
					
					}
	
}


		