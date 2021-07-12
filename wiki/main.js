layui.use(['element'], function() {
    var element = layui.element;
    
    /**
     * @description 初始化内容iframe
     */
    var contentIframe = $("#content")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    contentIframedoc.head.innerHTML = '<link rel="stylesheet" href="./layui/css/layui.css" />' 
        + '<link rel="stylesheet" href="./markdown.css" />'
        + '<link rel="stylesheet" href="./prism.css" />';

    /**
     * @description 目录文本
     */
    var summary;
    $.get("https://wiki.blocklynukkit.com/SUMMARY.md", function(result) {
        console.log(result);
        result = result.replace("---  \nlayout: default  \n---  ","").replace("# SUMMARY","")
        $("#summaryContent").html(summaryMD(result));
    });
    
    /**
     * @description 监听目录开关按钮
     */
    $("#summaryFloatButton").on("click", function(){
        if($("#summaryBox").css("left") == '-250px'){
            $("#summaryBox").animate({left: '0px'});
            $("#contentBox").animate({left: '250px', width: $("#contentBox").width() - 250});
            $("#summaryFloatButton").html('<i class="layui-icon layui-icon-shrink-right"></i>');
        }else if($("#summaryBox").css("left") == '0px'){
            $("#summaryBox").animate({left: '-250px'});
            $("#contentBox").animate({left: '0px', width: '100vw'});
            $("#summaryFloatButton").html('<i class="layui-icon layui-icon-spread-left"></i>');
        }
    })
    $("#contentBox").resize(function(event){
        console.log(event);
    })
});

function loadContent(path){
    console.log("https://wiki.blocklynukkit.com/"+path);
    $.get("https://wiki.blocklynukkit.com/"+path, function(result) {
        console.log(result);
        var contentIframe = $("#content")[0];
        contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
        contentIframedoc.body.innerHTML = '<div class="vertical-16px"></div>' 
            + contentMD(result);
        contentIframedoc.body.className = "layui-text";
    });
}
