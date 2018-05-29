var fatcherController = {
    input_color : '',
    child_page : null,
    init : function(){
        fatcherController.addEventListenerForButton();
        fatcherController.addEventListenerForChild();
    },
    addEventListenerForButton : function(){
        //发送message内容
        $('#submit_btn').click(function(){
            fatcherController.input_color = $('#name_input').val();
            postMessageToAll(fatcherController.input_color);
        });
        //打开新窗口并且获得子窗口的对象
        $('#open_page_btn').click(function(){
            fatcherController.child_page = window.open('./child_page.html');
        });
    },
    addEventListenerForChild : function(){
        //解析处理
        window.addEventListener('message',parseChildMessageAndTakeAction,false);
    }
};

function postMessageToAll(value){
    //*表示向所有窗口发送，可以指定路径，也可用/（同源）
    //第一个参数为传输过去的数值，如需多个数值转成json的字符串，再发送。
    if(value != null && value != undefined){
        fatcherController.child_page.postMessage(value,'*');
    }
}
function parseChildMessageAndTakeAction(e){
    alert(e.data);
}

fatcherController.init();