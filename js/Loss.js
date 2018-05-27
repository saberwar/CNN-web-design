// 属性弹窗,Loss

function createLossValue(name,id){
	 var tag=name;
	var inhtml='';
	var list=document.getElementById("valuelist");
	inhtml+='<table><tbody>';
	inhtml+='<tr><td><label>name</label></td><td><label>loss</label></td></tr>';
	inhtml+='<tr><td><label>Op</label></td><td><select id="Loss_select"><option value="sparse_softmax_cross_entropy_with_logits">sparse_softmax_cross_entropy_with_logits</option><option value="sigmoid_cross_entropy_with_logits">sigmoid_cross_entropy_with_logits</option></select></td></tr>';
	list.innerHTML=inhtml+'</tbody></table>';
	var btn=document.createElement("button");
	   btn.innerHTML="submit";
	   btn.onclick=function(){
		  
		hide(tag,id);
		 }
	
	   list.appendChild(btn);
	      //判断是否已经有用户输入
	for(var i=0;i<loss_list.length;i++){
					
					  if(loss_list[i].id==id){
						  
						 loss_list[i].fillData();
						  
						  }
					
					
					}
}
