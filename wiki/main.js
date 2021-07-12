layui.use(['element'], function() {
    var element = layui.element;

    /**
     * @description 初始化内容iframe
     */
    var contentIframe = $("#content")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    contentIframedoc.head.innerHTML = '<link rel="stylesheet" href="./layui/css/layui.css" />' +
        '<link rel="stylesheet" href="./markdown.css" />' +
        '<link rel="stylesheet" href="./prism.css" />';

    /**
     * @description 目录文本
     */
    var summary;
    $.get("https://wiki.blocklynukkit.com/SUMMARY.md", function(result) {
        console.log(result);
        result = result.replace("---  \nlayout: default  \n---  ", "").replace("# SUMMARY", "")
        $("#summaryContent").html(summaryMD(result));
    });

    /**
     * @description 监听目录开关按钮
     */
    $("#summaryFloatButton").on("click", function() {
        if ($("#summaryBox").css("left") == '-250px') {
            $("#summaryBox").velocity({
                left: '0px'
            });
            $("#contentBox").velocity({
                left: '250px',
                width: $("#contentBox").width() - 250
            });
            $("#summaryFloatButton").html('<i class="layui-icon layui-icon-shrink-right"></i>');
        } else if ($("#summaryBox").css("left") == '0px') {
            $("#summaryBox").velocity({
                left: '-250px'
            });
            $("#contentBox").velocity({
                left: '0px',
                width: '100vw'
            });
            $("#summaryFloatButton").html('<i class="layui-icon layui-icon-spread-left"></i>');
        }
    })

    /**
     * @description 监听滑动到顶端按钮
     */
    $("#scrollTopButton").click(function(event) {
        var contentIframe = $("#content")[0];
        contentIframe.contentWindow.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
});

function loadContent(path) {
    //开始更改前淡入加载页面并淡出内容
    $("#loadingCircleIcon").css("opacity", 1);
    $("#loadingOKIcon").css("opacity", 0);
    $("#loadingFailedIcon").css("opacity", 0);
    $("#loadingBox").velocity({
        opacity: 1
    }, {
        duration: 500
    });
    $("#content").velocity({
        opacity: 0
    }, {
        duration: 500,
        queue: false,
        complete: () => {
            $.get("https://wiki.blocklynukkit.com/" + path, function(result) {
                    //更改DOM内容
                    var contentIframe = $("#content")[0];
                    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
                    contentIframedoc.body.innerHTML = '<div class="vertical-16px"></div>' +
                        contentMD(result);
                    contentIframedoc.body.className = "layui-text";
                })
                //完成更改后渐入显示
                .done(() => {
                    $("#loadingCircleIcon").velocity("transition.flipXOut", {
                        complete: () => $("#loadingOKIcon").velocity("transition.flipXIn", {
                            complete: () => {
                                $("#loadingBox").velocity({
                                    opacity: 0
                                }, {
                                    duration: 500
                                });
                                $("#content").velocity({
                                    opacity: 1
                                }, {
                                    duration: 500,
                                    queue: false
                                });
                            }
                        }),
                        display: 'block'
                    });
                })
                //失败后显示错误
                .fail((x) => {
                    console.log(x);
                    $("#loadingCircleIcon").velocity("transition.flipXOut", {
                        complete: () => $("#loadingFailedIcon").velocity("transition.flipXIn", {
                            complete: () => {
                                $("#loadingBox").velocity({
                                    opacity: 0
                                }, {
                                    duration: 500
                                });
                                $("#content").velocity({
                                    opacity: 1
                                }, {
                                    duration: 500,
                                    queue: false
                                });
                            }
                        }),
                        display: 'block'
                    });
                })
        }
    });
}
