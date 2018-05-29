var childPageController = {
    father_val:'',
    init: function(){
        //监听父页面动作
        childPageController.listenFatherMotionAndTakeAction();
    },
    listenFatherMotionAndTakeAction:function(){
        //接受&解析message
        window.addEventListener('message',childPageController.paresFatherMotion,false);
    },
    paresFatherMotion: function(e){
        childPageController.father_val = e.data;
        childPageController.changeDivColor();
        //回应father page
        childPageController.callBackToFatherPage();
    },
    changeDivColor: function(){
        $('#color_container')[0].style.background = childPageController.father_val;
    },
    callBackToFatherPage: function(){
        if(window.opener != null){
            window.opener.postMessage('child say :copy that!','*');
        }
    }
}
childPageController.init();