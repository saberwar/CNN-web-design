// 弹窗属性,Dropout

function createDropoutValue(name,id){
	 var tag=name;
	
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>dropoutout</label></td></tr>';
	inhtml+='<tr><td><label>Op</label></td><td><input type="text" id="Dropout_Op" value="dropout"></td></tr>';
	inhtml+='<tr><td><label>Prob</label></td><td><input type="text" id="Dropout_prob"></td></tr>';
	list.innerHTML=inhtml+'</tbody></table>';
	var btn=document.createElement("button");
	   btn.innerHTML="submit";
	  btn.onclick=function(){
		  
		 hide(tag,id);
		 }
	
	   list.appendChild(btn);
	       //判断是否已经有用户输入
	for(var i=0;i<dropout_list.length;i++){
					
					  if(dropout_list[i].id==id){
						
						 dropout_list[i].fillData();
						  
						  }
					
					
					}
	
}
