//主程序入口

  
//首先初始化jsplumb
jsPlumb.ready(function() {
        var firstInstance = jsPlumb.getInstance(); //初始化容器
        //设置默认属性
        firstInstance.importDefaults({
                //连线属性
                PaintStyle: {
                        strokeWidth: 4,
                        //宽度为8px
                        stroke: 'black' //颜色
                },
                DragOptions: {
                        cursor: "crosshair"
                },
                //拖动鼠标样式为十字
                Endpoints: [["Dot", {
                        radius: 4
                }], ["Dot", {
                       radius: 4 
                }]],
                //端点样式
                EndpointStyles: [{
                        fill: "yellow"
                       
                },
                {
                        fill: "yellow"
                }],
                //端点颜色(开始，结束)
                /*Connector: ["Flowchart", {
                        stub: 0
                }],*/
                Connector: ["Flowchart"],//"StateMachine"
                //连线样式
                Anchors: ["BottomCenter", "TopCenter"],
                Overlays:[ 
    "Arrow", 
      [ "Label", { location:0.25,} ]
    ],//连线位置
        });
        firstInstance.registerConnectionType("conhover", { //设置可重用的样式
                paintStyle: {
                        stroke: "blue",
                        strokeWidth: 5
                },
                //点击样式
                hoverPaintStyle: {
                        stroke: "red",
                        strokeWidth: 7
                } //悬停样式
        });
        /************************************开始设定连线逻辑****************分为两种模式*******************************************/
      
       
        var i = 0; //计数器，用来设定id，防止id重复
        $("#mode").bind("change",function(){ //时间绑定，监听slect的变化
        	SatgeClear();//擦除数据
        	
        	var m=$(this).val();
        	switch(m){
					case '1':showRGB();break;
					case '2':showYUV();break;
					
					}
        	
        })
        	
        	function showRGB(){
        		//移除conn节点
        		$("#conn").remove();
        		 /*实现拖拽功能*/
        //使用jquerry的draggable方法
        //此处为实现列表可拖拽
        	//处理rgb模式
         $("#node_stage").append($("<div class='div_btn1' id='node_input3'style='background-color:rgba(244,8,12,1.00);margin-left:50%'><label  onClick='myshow(this)'>input</label></div>"));
                                 //firstInstance.draggable("node_input1"); //设置为可拖拽
                                        node_list.push("node_input3"); //记录节点
                                        //$("#node_input3").css("left", '50%').css("top", '10px'); //放置在对应位置
                                        //设置拖动范围
                                     
                                       
                                        $("#input").draggable({
                                                containment: "parent"
                                        });
                $("#nodelist").children().draggable({ //使得id为#nodelist的所有子节点都可拖动
                        helper: "clone",
                        //拖动方式为克隆，即复制
                        scope: "ss",
                         revert: true,
                        //标记，用来确定拖放目的地，可随意设定
                });
                /*实现接收拖拽，并放置*/
                $("#node_stage").droppable({ //拖拽处理函数
                        scope: "ss",
                        drop: function(event, ui) {
                                //记录放置位置距离容器的位置
                                var topmargin=(node_list.length*100)+"px"
                                var left = "50%"//parseInt(ui.offset.left - $(this).offset().left);
                                var top = topmargin;//parseInt(ui.offset.top - $(this).offset().top);

                                var name = ui.draggable[0].id; //获取拖拽节点的ID
                                
                                switch (name) { //判断类型
                                case "node_input":
                                        /*var id = 'node_input' + i; //生成id
                                        //生成放置对应div
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(244,8,12,1.00)'><label  onClick='myshow(this)'>input</label></div>"));
                                        $("#" + id).css("left", left).css("top", top); //放置在对应位置
                                        firstInstance.draggable(id); //设置为可拖拽
                                        node_list.push(id); //记录节点
                                        //设置拖动范围
                                     
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++; //i自加*/
                                          
                                        
                                         
                                        break;
                                case "node_conv":
                                        var id = 'node_conv' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(176,146,147,1.00)' ><label onClick='myshow(this)'>conv</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        isOutOfDiv(id);
                                        node_list.push(id);
                                        firstInstance.draggable(id);
                                        //连线
                                        connectNode(node_list, id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_pool":
                                        var id = 'node_pool' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(156,82,83,1.00)' ><label onClick='myshow(this)'>pool</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        isOutOfDiv(id);
                                        node_list.push(id);
                                        firstInstance.draggable(id);

                                        connectNode(node_list, id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_fc":
                                        var id = 'node_fc' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(151,12,14,1.00)' ><label onClick='myshow(this)'>fc</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        isOutOfDiv(id);
                                        node_list.push(id);
                                        firstInstance.draggable(id);

                                        connectNode(node_list, id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_active":
                                        var id = 'node_active' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(245,58,62,1.00)' ><label onClick='myshow(this)'>active</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        isOutOfDiv(id);
                                        node_list.push(id);
                                        firstInstance.draggable(id);

                                        connectNode(node_list, id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_dropout":
                                        var id = 'node_dropout' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(220,171,172,1.00)' ><label onClick='myshow(this)'>dropout</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        isOutOfDiv(id);
                                        node_list.push(id);
                                        firstInstance.draggable(id);

                                        connectNode(node_list, id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_loss":
                                        var id = 'node_loss' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(196,84,86,1.00)' ><label onClick='myshow(this)'>loss</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        isOutOfDiv(id);
                                        node_list.push(id);
                                        firstInstance.draggable(id);
                                        connectNode(node_list, id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
								/*case "conn":
								        var id ="node_conn"+i;
										$(this).append($("<div class='div_conn1' id='" + id + "'style='background-color:gray' ></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        node_list.push(id);
                                        firstInstance.draggable(id);
                                         //处理特定的连接逻辑
										 connectFC(node_list,id);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;*/

                                }

                        }
                })

        };
        function showYUV(){
        	console.info(node_list)
        	//添加ann节点
        	//yuv模式，添加连接节点
		   $("#nodelist").append('<div class="div_conn" id="conn" style="background-color:#912CEE"></div>')
    
	      $("#conn").draggable({ //使得id为#nodelist的所有子节点都可拖动
                        helper: "clone",
                        //拖动方式为克隆，即复制
                        scope: "ss",
                        //标记，用来确定拖放目的地，可随意设定
                });
        //使用jquerry的draggable方法
        //此处为实现列表可拖拽
        	//处理yuv模式
        	//第一个input
         $("#node_stage").append($("<div class='div_btn1' id='node_input1'style='background-color:rgba(244,8,12,1.00);margin-left:25%'><label  onClick='myshow(this)'>input</label></div>"));
                                 //firstInstance.draggable("node_input1"); //设置为可拖拽
                                        //node_list.push("node_input1"); //记录节点
                                        //$("#node_input1").css("left", '50%').css("top", '10px'); //放置在对应位置
                                        //设置拖动范围
                                     
                                       
                                       
         //第二input
         $("#node_stage").append($("<div class='div_btn1' id='node_input2'style='background-color:rgba(244,8,12,1.00);margin-left:50%'><label  onClick='myshow(this)'>input</label></div>"));
                                 //firstInstance.draggable("node_input2"); //设置为可拖拽
                                        //node_list.push("node_input2"); //记录节点
                                        //$("#node_input2").css("left", '50%').css("top", '0px'); //放置在对应位置
                                        //设置拖动范围
                                     
                                       
                                        
            //加入列表
            node_list_y.push('node_input1');
            node_list_uv.push('node_input2');
            node_list[0]="no";
            $("#nodelist").children().draggable({ //使得id为#nodelist的所有子节点都可拖动
                        helper: "clone",
                        //拖动方式为克隆，即复制
                        scope: "ss",
                        revert: true,
                        //标记，用来确定拖放目的地，可随意设定
                });
                /*实现接收拖拽，并放置*/
                $("#node_stage").droppable({ //拖拽处理函数
                        scope: "ss",
                        drop: function(event, ui) {
                                //记录放置位置距离容器的位置
                                var left =parseInt(ui.offset.left - $(this).offset().left);
                                var top = parseInt(ui.offset.top - $(this).offset().top);

                                var name = ui.draggable[0].id; //获取拖拽节点的ID
                                
                                switch (name) { //判断类型
                                case "node_input":
                                        /*var id = 'node_input' + i; //生成id
                                        //生成放置对应div
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(244,8,12,1.00)'><label  onClick='myshow(this)'>input</label></div>"));
                                        $("#" + id).css("left", left).css("top", top); //放置在对应位置
                                        firstInstance.draggable(id); //设置为可拖拽
                                        node_list.push(id); //记录节点
                                        //设置拖动范围
                                     
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++; //i自加*/
                                          
                                        
                                         
                                        break;
                                case "node_conv":
                                        var id = 'node_conv' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(176,146,147,1.00)' ><label onClick='myshow(this)'>conv</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);

                                        //node_list.push(id);
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);
                                       
                                        //连线
                                        zoneconn(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_pool":
                                        var id = 'node_pool' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(156,82,83,1.00)' ><label onClick='myshow(this)'>pool</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        //node_list.push(id);
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);

                                        zoneconn(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_fc":
                                        var id = 'node_fc' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(151,12,14,1.00)' ><label onClick='myshow(this)'>fc</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        //node_list.push(id);
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);

                                        zoneconn(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_active":
                                        var id = 'node_active' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(245,58,62,1.00)' ><label onClick='myshow(this)'>active</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        //node_list.push(id);
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);

                                       zoneconn(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_dropout":
                                        var id = 'node_dropout' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(220,171,172,1.00)' ><label onClick='myshow(this)'>dropout</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        //node_list.push(id);
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);

                                        zoneconn(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
                                case "node_loss":
                                        var id = 'node_loss' + i;
                                        $(this).append($("<div class='div_btn1' id='" + id + "'style='background-color:rgba(196,84,86,1.00)' ><label onClick='myshow(this)'>loss</label></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        //node_list.push(id);
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);
                                        zoneconn(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++;
                                        break;
								case "conn":
								    
								     if(node_list[0].indexOf("conn")!=-1){
								         
								         	alert("已存在连接点，无法再次添加")
								         	
								         }else{
								        var id ="node_conn"+i;
										$(this).append($("<div class='div_conn1' id='" + id + "'style='background-color:#912CEE' ></div>"));
                                        $("#" + id).css("left", left).css("top", top);
                                        node_list[0]=id;
                                         isOutOfDiv(id);
                                        firstInstance.draggable(id);
                                         //处理特定的连接逻辑
										 connectFC(id,node_list_y,node_list_uv);
                                        //设置拖动范围
                                        $("#" + id).draggable({
                                                containment: "parent"
                                        });
                                        i++};
                                        break;
                                         
                                }

                        }
                })
	
        }
        // 处理连线等逻辑
        /*获得节点对应的下标(节点所在数组，节点id)*/
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
        /*处理连线，input为第一个节点，默认不需要连线*/
        function connectNode(Node_list, Node_id) {
        	
                var id = Node_id; //接收id
                var list = Node_list
                var index = getNodeIndex(list, id); //获得节点所在下标
                
                //判断是否有前一个节点
                if(index!=0){
                //处理连线逻辑,与前一个节点相连
                var conn = firstInstance.connect({
                        source: node_list[index - 1],
                        target: node_list[index],
                        detachable: false,
                        overlays:[ 
    "Arrow", 
      [ "Label", { location:0.25,} ]
    ],

                });
		
                //设置点击和悬浮样式
                conn.bind("click",
                function() {
                        conn.setType("conhover");

                });
               }else{
               	//do nothing
               }

        }
        //处理连接逻辑
function zoneconn(id,list_y,list_uv){
	console.info(id)
	console.info(node_list[0])
	//判断是否已经存在conn节点
	if(node_list[0].indexOf("conn")!=-1){ //判断是否存在cnn节点，则后续节点连接至cnn之后
		var conn= firstInstance.connect({
                        source: node_list[node_list.length-1],
                        target: id,
                        detachable: false,
                         anchors: ["BottomCenter", "TopCenter"] //连线位置
                });
                //将后续节点放入node_list中
		      node_list.push(id)
		
	}else{//判断是放入y 还是uv
		//记录节点坐标，与其上两个坐标
	//console.info(list_y[list_y.length-1])
	var x1=document.getElementById(list_y[list_y.length-1]).offsetLeft;
	var x2=document.getElementById(list_y[list_y.length-1]).offsetTop;
	
	var y1=document.getElementById(list_uv[list_uv.length-1]).offsetLeft;
	var y2=document.getElementById(list_uv[list_uv.length-1]).offsetTop;
	
	var t1=document.getElementById(id).offsetLeft;
	var t2=document.getElementById(id).offsetTop;
	
	//判断距离
	d1=getD(x1-t1,x2-t2);
	d2=getD(y1-t1,y2-t2);
	
	if(d1>=d2){
		console.info(1)
		var conn_left = firstInstance.connect({
                        source: list_uv[list_uv.length-1],
                        target: id,
                        detachable: false,
                         anchors: ["BottomCenter", "TopCenter"] //连线位置
                });
                list_uv.push(id);
		
	}else{
		
		var conn = firstInstance.connect({
                        source: list_y[list_y.length-1],
                        target: id,
                        detachable: false,
                         anchors: ["BottomCenter", "TopCenter"] //连线位置
                });
		list_y.push(id);
	}
		
	}
	
}
function getD(x,y){
	return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
	
}

		//处理fc连接层逻辑
		    function connectFC(id,list_y,list_uv){
		    	
		    	//左侧
		    	 var conn_left = firstInstance.connect({
                        source: list_y[list_y.length-1],
                        target: id,
                        detachable: false,
                         anchors: ["BottomCenter", "LeftMiddle"] //连线位置
                });
                //右侧
                var conn_right = firstInstance.connect({
                        source: list_uv[list_uv.length-1],//连接点上一个节点
                        target: id,//连接点
                        detachable: false,
                         anchors: ["BottomCenter", "RightMiddle"] //连线位置
                });
                //判断node_list下是否还有节点
                if(node_list.length>1){
                	firstInstance.connect({
                        source: id,//连接点上一个节点
                        target: node_list[1],//连接点
                        detachable: false,
                         anchors: ["BottomCenter", "RightMiddle"] //连线位置
                });
                }
				//将conn节点放入列表
				//node_list.push(id);
						  
				}
        /****************删除逻辑**********************/
        //添加删除按钮
		 $("#node_stage").on("mouseenter", ".div_conn1",
        function() {
			$(this).css("z-index",4);//设置优先显示，避免遮挡
			$(this).append('<img src="cancle.png" style="position: absolute;" />');
			$("img").css("left", 20).css("top", -2);   
			});
		  $("#node_stage").on("mouseleave", ".div_conn1",
        function() {
        	$(this).css("z-index",0);//恢复数值
                $("img").remove();
               
        });
		
        $("#node_stage").on("mouseenter", ".div_btn1",
        function() {
        	$(this).css("z-index",11);//设置优先显示，避免遮挡,显示属性
                $(this).append('<img src="cancle.png" style="position: absolute;" />');
				$(this).append('<div id="boss"></div>');
			    attr_hover($(this).attr("id"));
                $(this).mousemove(function (e) {
       
    });
                $("img").css("left", 145).css("top", -10);
                

        });
        $("#node_stage").on("mouseleave", ".div_btn1",
        function() {
        	$(this).css("z-index",10);//恢复数值
                $("img").remove();
                $("#boss").remove();
        });
        //添加删除逻辑
        $("#node_stage").on("click", "img",function(){
        	var id=$(this).parent().attr("id");
        	//判断当前是何种模式，直接判断node_list_y是否为空
        	if(node_list_y.length==0){//是rgb模式
        		//rgb模式下执行单删除
        		       
                        //删除操作
                        //同时删除掉节点数组内的内容
                        //id获取被删除节点ID
                        var index = getNodeIndex(node_list, id); //获得节点所在下标
                        //(index)
                        if (index != -1) {
                          deleteNode(node_list,id,index);
                        }
                
        		
        	}else{//yuv模式，分为两种情况，或者三种，就是三个数组list_y,list_uv,list
        		//首先判断当前节点属于哪个节点链
        		var index1 =getNodeIndex(node_list_y,id)
        		var index2=getNodeIndex(node_list_uv,id);
        		var index3=getNodeIndex(node_list,id);
        		if(index1!=-1){//说明在y中
        			
        			deleteNode(node_list_y,id,index1);
        			isLastIndex(index1,node_list_y,1);//传递模式 1为y,0为uv
        			
        		}else{
        			if(index2!=-1){//说明在uv中
        				deleteNode(node_list_uv,id,index2);
        				isLastIndex(index2,node_list_uv,0);
        			}else{//在node中
        				//判断是否为conn节点
        				        				deleteNode(node_list,id,index3);
        				
        			}
        			
        		}
        		
        		
        		
        	}
        }
    );
    function isLastIndex(index,list,i){
    	var endpoint;
    	switch(i){
    		case 1:endpoint="LeftMiddle";break;//1代表，y,y连接左侧
    		case 0:endpoint="RightMiddle";break;//0代表，uv,uv连接左侧
    	}
    	
    	if(index==list.length&&index!=0){//说明是最后一个节点，连接conn
    	
    			if(node_list[0].indexOf("con")!=-1){//是否存在con节点
    				
    					firstInstance.connect({
                        source: list[index-1],//连接点上一个节点
                        target: node_list[0],//连接点
                        detachable: false,
                         anchors: ["BottomCenter", endpoint] //连线位置
                });
    				
    			}
    		
    		
    	}
    }
    function deleteNode(list,id,index){
    	if (confirm("确定要删除吗?")) {
    	      if (list.length > 0) { //判断节点列表内是否还有节点，有则删除，无则返回
    	      	                if(id.indexOf("input")!=-1){//设定input无法被删除
                                		alert("源节点，无法删除")
                                	}else{
                                        firstInstance.removeAllEndpoints(id);
                                        $("#"+id).remove();
                                        //判断是否为conn节点
                                        if(id.indexOf("conn")!=-1){
                                        	node_list[0]="no";
                                        }else{
                                        list.splice(index, 1);}
                                        //删除后判断列表内是否有两个节点且之间没有连线，有则连线，无则返回
                                        //(node_list.length)
                                        if (list.length > 1) {
                                                //遍历数组检查是前一节点否有连接
                                                for (var i = 0; i < list.length - 1; i++) {
                                                        var tag = firstInstance.getConnections({
                                                                source: list[i],
                                                                target: list[i + 1]
                                                        }).length;
                                                        //(node_list[i])
                                                        //(tag)
                                                        if (tag != 0) { //表明有连接
                                                        } else { //没有连接则连线
                                                                var conn = firstInstance.connect({
                                                                        source: list[i],
                                                                        target: list[i + 1],
                                                                        detachable: false

                                                                });
                                                             
                                                        }
                                                }
                                        }
                                        }
                                }
    	
    	
    }
    }
});
  //清空舞台
		  function clearStage(){
			  location.reload();
			  
			  
			  
			  }
//根据鼠标悬浮目标，注入数据
function attr_hover(id){
	
	
	//检查id是否存在对应对象
	//处理数组
				
					var str = id.split("_");
			
					
				
		 
				
				var nodeName=str[1].replace(/\d+/g,''); 
				//console.info(nodeName)
				switch (nodeName){
				case 'input':fill_data(input_list,id);break;
				case 'conv':fill_data(conv_list,id);break;
				case 'pool':fill_data(pool_list,id);break;
				case 'fc':fill_data(fc_list,id);break;
				case 'active':fill_data(active_list,id);break;
				case 'dropout':fill_data(dropout_list,id);break;
				case 'loss':fill_data(loss_list,id);break;
					
					
					
					
					
					}
				
}
//注入属性
function fill_data(list,id){
	var id_list=[];//对象数组存储对象，需要记录其中对象的id值进行判断
		for(var i=0;i<list.length;i++){
			id_list.push(list[i].id);
						 
					}
	//检查是否在数组中
	var index = $.inArray(id,id_list);
	
	if(index!=-1){
		/*var innerhtml={}
		innerhtml["attr"]=(list[index]);
		var json=JSON.stringify(innerhtml,null,2);*/
		var json=JSON.stringify(list[index],null,2);
		var html = ""; 
for(var i in list[index]){//用javascript的for/in循环遍历对象的属性 
	if(i.indexOf("get")==-1&&i.indexOf("set")==-1&&i.indexOf("ill")==-1&&i.indexOf("order")==-1){
html += "<label class='label-show-attr'>"+i+"</label>"+"<label class='label-show-attr'>--</label>"+"<label class='label-show-attr-value'>"+list[index][i]+"</label>"+"<br>";} 
} 

		//$("#showJson").text(html);
		$("#boss").append(html)
		
	}
	
	
}
//判断div是否越界,用于处理拖放在边界的放置问题
function isOutOfDiv(child){
	
	var stage_left=document.getElementById("node_stage").offsetLeft;
	var child_left=document.getElementById(child).offsetLeft;
	console.info(stage_left,child_left)
	if(stage_left>=child_left){//越界
		$("#"+child).css("left","150px");  
		
	}
	
}
//更换模式时擦出数据
function SatgeClear(){
	//清空舞台
	$("#node_stage").empty();
	//重置数组
	 data_list=[];
		 conv_list=[];
		 pool_list=[];
		 fc_list=[];
		 active_list=[];
		 dropout_list=[];
		 loss_list=[];
		 input_list=[];
		 node_list = []; //数组，记录舞台中所有出现的节点
		  node_list_y=[];
		 node_list_uv=[];
		 
}
