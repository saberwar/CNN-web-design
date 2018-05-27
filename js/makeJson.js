// 生成json
//*****************通用方法********************************************
			//生成json
			function CreateJson(stage_nodelist){
				var mode=$("#mode option:selected").val();
				switch(mode){
					case '1':rgbJSON(stage_nodelist);break;
					case '2':yuvJSON(stage_nodelist);break;
					
					}
				
			
				}
				//yuv模式生成
				function yuvJSON(stage_nodelist){
					var stageList=[]=stage_nodelist; //接收节点数组
				
				  var jsonObj={};//主文件
				   var path={}
				  path["data_path"]=parameters.get1();
				  path["save_path"]=parameters.get2();
				  path["order"]="1";
				  path["name"]="file_path";
				  jsonObj["file_path"]=path;
				  var param=parameters.makeJSON();
				   jsonObj["file_path"]=path;
				  
				  jsonObj["parameters"]=param;
				  //开始处理y节点链
				  var json_y={};
				  
				  createYUVJson(json_y,node_list_y);
				  jsonObj["net_y"]=json_y;
				  //开始处理uv节点
				  var json_uv={};
				  createYUVJson(json_uv,node_list_uv);
				  jsonObj["net_uv"]=json_uv;
				  //开始处理conn层
				  var json_con={}
				   createYUVJson(json_con,node_list);
				   jsonObj["net_link"]=json_con;
				  var json=JSON.stringify(jsonObj,null,2);
				   console.info(json);
				  savefile(json);
				  
				
					}
				function createYUVJson(obj,stageList){
					if(stageList[0]=="node_input1"){
						obj["order"]="3";	
					}else if(stageList[0]=="node_input2"){
						obj["order"]="4";	
					}else{
						obj["order"]="5";	
					}
								
				var list=[];
				//处理数组
				for(var i=0;i<stageList.length;i++){
					var str = stageList[i].split("_");
				list.push(str[1].replace(/\d+/g,'')); 
					
				}
				for(var i=0;i<list.length;i++){  
				
				var nodeName=list[i]; 
				
				  //遍历
				switch (nodeName){
				case 'input':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=input_list[getObjectIndexYUV(input_list,stageList[i],i)];break;
				case 'conv':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=conv_list[getObjectIndexYUV(conv_list,stageList[i],i)];break;
				case 'pool':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=pool_list[getObjectIndexYUV(pool_list,stageList[i],i)];break;
				case 'fc':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=fc_list[getObjectIndexYUV(fc_list,stageList[i],i)];break;
				case 'active':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=active_list[getObjectIndexYUV(active_list,stageList[i],i)];break;
				case 'dropout':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=dropout_list[getObjectIndexYUV(dropout_list,stageList[i],i)];break;
				case 'loss':var name=nodeName.toLowerCase();obj[name]=loss_list[getObjectIndexYUV(loss_list,stageList[i],i)];break;
					
					
					
					
					
					}
				}
				
				}
						function getObjectIndexYUV(nodelist,id,m){
					var v=m;
					 var num_list=[];//对象数组存储对象，需要记录其中对象的id值进行判断
					 for(var i=0;i<nodelist.length;i++){
						 num_list.push(nodelist[i].id);
						 
						 }
						 console.info(num_list);
						
						
					var index = $.inArray(id,num_list);
					
					 if(index >= 0){
					 	//首先判断当前节点属于哪个节点链
        		var index1 =getNodeIndex(node_list_y,id)
        		var index2=getNodeIndex(node_list_uv,id);
        		var index3=getNodeIndex(node_list,id);
        			if(index3==-1){//说明在y,uv中
        			nodelist[index].order=v+1;
        			
        		}else{
        			nodelist[index].order=v;
        			
        		}
        		
	      
         return index;
    }
    return null;
					
					}
						 function getNodeIndex(list, id) {
                var val = id;
                var id_list = list;
                var index = $.inArray(val, id_list);
                if (index >= 0) {
                        return index;

                } else {
                        return - 1;
                }
        }
				//rgb模式生成****************************************************************************
				function rgbJSON(stage_nodelist){
					var stageList=[]=stage_nodelist; //接收节点数组
				
				  var jsonObj={};//主文件
				 
				  var path={}
				  path["data_path"]=parameters.get1();
				  path["save_path"]=parameters.get2();
				  path["order"]="1";
				  path["name"]="file_path";
				   jsonObj["file_path"]=path;
				 	  var param=parameters.makeJSON();
					  
				  
					  jsonObj["parameters"]=param;
				 fillObject(jsonObj,stageList);
				 console.info(jsonObj);
				
				  var json=JSON.stringify(jsonObj,null,2);
				   console.info(json);
				savefile(json);
					
					
					}
			//测试方法
			function getJsonByNode(){
				
				CreateJson(node_list);
				//alert(stage_list[0].value);
				
				}
				//判断对象下标
				function getObjectIndex(nodelist,id,m){
					var v=m;
					 var num_list=[];//对象数组存储对象，需要记录其中对象的id值进行判断
					 for(var i=0;i<nodelist.length;i++){
						 num_list.push(nodelist[i].id);
						 
						 }
						 console.info(num_list);
						
						
					var index = $.inArray(id,num_list);
					
					 if(index >= 0){
	      nodelist[index].order=v+3;
         return index;
    }
    return null;
					
					}
					
				
			//遍历数组,注入节点
			function fillObject(obj,stageList){
			
			
				
				var list=[];
				//处理数组
				for(var i=0;i<stageList.length;i++){
					var str = stageList[i].split("_");
				list.push(str[1].replace(/\d+/g,'')); 
					
				}
				for(var i=0;i<list.length;i++){  
				
				var nodeName=list[i]; 
				
				  //遍历
				switch (nodeName){
				case 'input':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=input_list[getObjectIndex(input_list,stageList[i],i)];break;
				case 'conv':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=conv_list[getObjectIndex(conv_list,stageList[i],i)];break;
				case 'pool':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=pool_list[getObjectIndex(pool_list,stageList[i],i)];break;
				case 'fc':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=fc_list[getObjectIndex(fc_list,stageList[i],i)];break;
				case 'active':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=active_list[getObjectIndex(active_list,stageList[i],i)];break;
				case 'dropout':var name="layer"+i+"_"+nodeName.toLowerCase();obj[name]=dropout_list[getObjectIndex(dropout_list,stageList[i],i)];break;
				case 'loss':var name=nodeName.toLowerCase();obj[name]=loss_list[getObjectIndex(loss_list,stageList[i],i)];break;
					
					
					
					
					
					}
				}
				
				
				}

			//********************************文件保存************************
			//保存文件
			function savefile(obj){
			var BB = self.Blob;
			
             saveAs(new BB(
                  [obj],
                { type: "text/plain;charset=utf8" }
            ) , "json.json",true);
			
			
			
			}
			