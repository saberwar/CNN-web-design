// 弹窗属性列表,Pool
function createPoolValue(name,id){
	 var tag=name;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>pool</label></td></tr>';
	inhtml+='<tr><td><label>kernel_size</label></td><td><input type="text" id="Pool_kernel_size"></td></tr>';
	inhtml+='<tr><td><label>Stride</label></td><td><input type="text" id="Pool_Stride"></td></tr>';
	inhtml+='<tr><td><label>Op</label></td><td><input type="text" id="Pool_Op" value="max_pool"></td></tr>';
	list.innerHTML=inhtml+'</tbody></table>';
	 var btn=document.createElement("button");
	   btn.innerHTML="submit";
	   btn.onclick=function(){
		  
		 hide(tag,id);
		 }
	
	   list.appendChild(btn);
	   //判断是否已经有用户输入
	for(var i=0;i<pool_list.length;i++){
					
					  if(pool_list[i].id==id){
						  
						 pool_list[i].fillData();
						  
						  }
					
					
					}
	
	
	
	}
