// Input
function createInputValue(name,id){

	 var tag=name;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>input</label></td></tr>';
	inhtml+='<tr><td><label>image_height</label></td><td><input type="text" id="Input_image_height"></td></tr>';
	inhtml+='<tr><td><label>image_widht</label></td><td><input type="text" id="Input_image_widht"></td></tr>';
	inhtml+='<tr><td><label>image_channels</label></td><td><input type="text" id="Input_image_channels"></td></tr>';
	inhtml+='<tr><td><label>batch_size</label></td><td><input type="text" id="Input_batch_size"></td></tr>';
	inhtml+='<tr><td><label>num_class</label></td><td><input type="text" id="Input_num_class"></td></tr>';
	list.innerHTML=inhtml+'</tbody></table>';
	 var btn=document.createElement("button");
	   btn.innerHTML="submit";
	   btn.onclick=function(){
		  
		 hide(tag,id);
		 }
	   list.appendChild(btn);
	  
	for(var i=0;i<input_list.length;i++){
					
					  if(input_list[i].id==id){
						  
						 input_list[i].fillData();
						  
						  }
					
					
					}
	
	
	}
