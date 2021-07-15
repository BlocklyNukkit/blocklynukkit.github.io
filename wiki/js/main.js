layui.use(['element', 'layer', 'form'], function() {
    var element = layui.element;
    var layer = layui.layer;
    var form = layui.form;
    var dataStorage = layui.data;

    /**
     * @description 初始化内容iframe
     */
    var contentIframe = $("#content")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    contentIframedoc.head.innerHTML = '<link rel="stylesheet" href="./layui/css/layui.css" />' +
        '<link rel="stylesheet" href="./markdown.css" />' +
        '<link rel="stylesheet" href="./prism.css" />';
    const dot3 = '```';
    contentIframedoc.body.innerHTML = '<div class="vertical-16px"></div>' +
        contentMD(
            `
# BlocklyNukkit WIKI

******************

> BlocklyNukkit WIKI Markdown支持绝大部分CommonMarkDown内容  
> 除此之外，还有如下特性  


## 图片尺寸  

60x60:  
![60x60](https://wiki.blocklynukkit.com/wiki/img/BlocklyNukkitLogo_small.png =60x60)  
100x100:  
![foo](https://wiki.blocklynukkit.com/wiki/img/BlocklyNukkitLogo_small.png =100x100)  
屏幕宽度的25%: (缩放浏览器窗口大小会动态变化)  
![foo](https://wiki.blocklynukkit.com/wiki/img/BlocklyNukkitLogo_small.png =25%x25%)  

代码：  
${dot3}md
![60x60](https://wiki.blocklynukkit.com/wiki/img/BlocklyNukkitLogo_small.png =60x60)  
![100x100](https://wiki.blocklynukkit.com/wiki/img/BlocklyNukkitLogo_small.png =100x100)  
![屏幕宽度的25%](https://wiki.blocklynukkit.com/wiki/img/BlocklyNukkitLogo_small.png =25%x25%)  
${dot3}

## 删除线  

~~超神的冰凉 Hypixel起床战争胜率： 27%~~  

代码：
${dot3}md
~~内容~~
${dot3}

## tab选项卡

[[[
& CNN:
### 失智的媒体  

美国当地时间2月11日上午，联线CNN“连接世界”（Connect the World）节目，无耻造谣、大聊特聊所谓新疆“人权问题”以及未来拜登政府的态度。CNN把广东省韶关市翁源县新江镇误认为是新疆，在地图上把新疆标到了广东省里。  

-------------------  

### 观猴指路  

无需梯子：[CNN](https://us.cnn.com/)  


& BBC:

### 一点感想

尽管现代意义上的新闻是来自西方，但是新闻的舆论倾向和以偏概全的能力，西方无论是BBC也好，还是华盛顿邮报、CNN亦或ABC都是“首屈一指”，并且是一丘之貉，当面对中国等所谓非西方阵营时，要么抱着猎奇，哦，中国出现了什么什么事，呦中国人这样玩啊，要么是为了满足自己所谓的西方虚荣心和自尊心，你看中国富人都开始学习我们西方礼仪了，你看中国富人大肆在我们国家买买买了，你看我们油漆工人穿的牛仔裤在中国长盛不衰了。  
而此次疫情，西方媒体真正让我们见识到了什么叫反智和“选择性失明”。面对中国早已被验证有效的办法，西方媒体在几个月后竟然好像是发现世界未解之谜一样报道，然后再捎带中国，说中国用此种方法以此来说明这办法可行。但是一旦面对中国直接带来的内容，要么是万马齐喑，要么是中国威胁论，甚至中国援助意大利的行为在西方掀起轩然大波，不知道正常的媒体人是否会那么看，但是显然西方所谓的媒体人，部分人已失去了作为新闻媒体人的底线，就比如之前前任发言人耿爽怼的那个澳洲记者。  
无论是BBC也好，还是其他媒体，我们可以听听他们对于自己国家发生的事实报道、系列报道，更要听听他们在新闻背后想要传达的某种没有明说的舆论倾向，看清楚他们是否真正的为社会服务，从这一点上而言，西方媒体，早已失去了本色。  
]]]

代码：  
${dot3}md
[[[
& 选项卡名称1:
亿些内容

& 选项卡名称2:
亿些内容

& 选项卡名称3:
亿些内容
]]]
注：
- 选项卡名称和数量都可以任意，内容长度不限
- 选项卡不会被作为markdown渲染
- tab选项卡不可以嵌套使用
${dot3}


## 任务列表

- 任务列表即可以标注是否完成的列表
- [ ] 比如这项任务未完成
- [x] 而这项任务已经完成

代码：  
${dot3}md
- [ ] 比如这项任务未完成
- [x] 而这项任务已经完成
${dot3}

`
        );
    contentIframedoc.body.className = "layui-text";
    iframeExec('layui.use("element", function(){});', './layui/layui.js');

    /**
     * @description 目录文本
     */
    var summary;
    $.get(summaryURL, function(result) {
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
    });

    /**
     * @description 监听滑动到顶端按钮
     */
    $("#scrollTopButton").click(function(event) {
        var contentIframe = $("#content")[0];
        contentIframe.contentWindow.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    /**
     * @description 打开登录界面
     */
    function openLoginDialog() {
        if (isLogined()) return;
        layer.closeAll();
        var index = layer.open({
            type: 1,
            shadeClose: true,
            title: "BNWiki 登录", //不显示标题
            content: $("#loginDialog"), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
            btn: "登录",
            yes: function() {
                login(
                    $("#loginDialogAccount").val(),
                    $("#loginDialogPassword").val(),
                    function() {
                        layer.msg('欢迎您，' + getUserName(), {
                            icon: 1
                        });
                        layer.close(index);
                        refreshUerNav();
                    },
                    function() {
                        layer.msg('用户名或密码错误！', {
                            icon: 2
                        });
                    }
                );
            }
        });
    }

    /**
     * @description 监听打开登录对话框点击回调
     */
    $("[act='loginDialog']").click(openLoginDialog);

    /**
     * @description 打开注册界面
     */
    function openRegisterDialog() {
        layer.closeAll();
        var index = layer.open({
            type: 1,
            shadeClose: true,
            title: "BNWiki 注册",
            content: $("#registerDialog"),
            btn: "注册",
            yes: function() {
                var email = $("#registerDialogEmail").val();
                var password = $("#registerDialogPassword").val();
                var repeat = $("#registerDialogRepeatPassword").val();
                if (password != repeat) {
                    layer.msg('两次输入的密码不一致', {
                        icon: 2
                    });
                    return;
                }
                register(
                    email,
                    password,
                    function() {
                        layer.msg('请前往邮箱确认注册信息', {
                            icon: 1
                        });
                        layer.close(index);
                    },
                    function() {
                        layer.msg('请检查您的注册信息后重试', {
                            icon: 2
                        });
                    },
                    function() {
                        layer.msg('请填写正确的邮箱', {
                            icon: 2
                        });
                    },
                    function() {
                        layer.msg('密码过短，至少6个字符', {
                            icon: 2
                        });
                    }
                )
            }
        })
    }

    /**
     * @description 监听打开注册对话框回调
     */
    $("[act='registerDialog']").click(openRegisterDialog);

    /**
     * @description 监听登出回调
     */
    function listen_userNavOption() {
        $("#userNavOptionLogOut").unbind("click").click(function() {
            logout(function() {
                layer.msg('您已经退出登录', {
                    icon: 7
                });
                refreshUerNav();
            }, function() {
                layer.msg('抱歉，因网络原因，暂时无法退出登录', {
                    icon: 2
                });
            })
        });
        $("#userNavOptionAccountSetting").unbind("click").click(openAccountSettingDialog);
    };
    listen_userNavOption();

    /**
     * @description 打开账号设置页面
     */
    function openAccountSettingDialog() {
        layer.closeAll();
        if (!isLogined()) return;
        form.val("accountSettingDialog", {
            uid: getUserUid(),
            username: getUserNickName(),
            sex: getUserGender()
        });
        var index = layer.open({
            type: 1,
            shadeClose: true,
            title: getUserEmail(),
            content: $("#accountSettingDialog"),
            btn: "保存信息",
            yes: function() {
                let values = form.val('accountSettingDialog');
                console.log(values);
                updateUserInfo({
                        nickName: values.username,
                        gender: values.sex,
                        username: Pinyin.convertToPinyin(values.username, '', true)
                    },
                    function() {
                        layer.msg('账户信息修改成功', {
                            icon: 1
                        });
                        layer.close(index);
                    },
                    function() {
                        layer.msg('修改失败，请稍后再试', {
                            icon: 2
                        });
                    }
                );
            }
        })
    }

    /**
     * @description 监听打开账号设置页面对话框回调
     */
    $("[act='accountSettingDialog']").click(openAccountSettingDialog);

    /**
     * @description 用户中心下拉菜单
     */
    var userNavOptionNode = $("#userNavOption");
    userNavOptionNode.remove();

    function refreshUerNav() {
        if (isLogined()) {
            $("#userNavName").html(getUserName()).append(userNavOptionNode);
            listen_userNavOption();
        } else {
            $("#userNavName").html("点击登录");
            userNavOptionNode.remove(userNavOptionNode);
        }
    }
    refreshUerNav();

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
            $.get(contentSource + path, function(result) {
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

function iframeExec(js, src) {
    var contentIframe = $("#content")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    var script = contentIframedoc.createElement('script');
    script.innerHTML = js;
    if (src) {
        script.src = src;
    }
    contentIframedoc.body.appendChild(script);
}
//监听版权信息选项
$("[act='copyrighit_info_function']").click(copyrighit_info_function);
//版权信息Layer弹窗
function copyrighit_info_function() { 
    layer.open({
   title: '<span class="fal fa-copyright"> BlocklyNukkit 版权声明 <span class="fal fa-copyright">'
   ,content: 'BlocklyNukkit是超神的冰凉发起的图形化插件编辑器和多语言解释器<br>BlocklyNukkit基于AGPL3协议开源，侵权必究<br><span class="fal fa-book"> BlocklyWiki 2021 <span class="fab fa-github-alt" > <a href="https://github.com/BlocklyNukkit/blocklynukkit.github.io">Github链接</a>'
 });     
}
//监听数据统计选项
    $("[act='statistics_function']").click(statistics_function);
//数据统计Layer弹窗
function statistics_function() {
    layer.msg('敬请期待');
}