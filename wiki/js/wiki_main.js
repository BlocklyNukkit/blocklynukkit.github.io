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
    iframeExec('layui.use("element", function(){});', './layui/layui.js');

    /**
     * @description 目录文本并渲染
     */
    $.get(summaryURL, function(result) {
        result = result.replace("---  \nlayout: default  \n---  ", "").replace("# SUMMARY", "").replace(
            "  \n", '');
        window.summaryContent = result;
        $("#summaryContent").html(summaryMD(result));

        /**
         * @description 加载初始化iframe内容
         */
        jumpByLocationHref();
    });

    $(window).on('popstate', function(event) {
        if (event.originalEvent && event.originalEvent.state) {
            let pathToJump = event.originalEvent.state.path;
            if (pathToJump) {
                jumpByLocationHref();
            }
        }
    })

    /**
     * @description 监听目录开关按钮
     */
    $("#summaryFloatButton").on("click", function() {
        if ($("#summaryBox").css("left") == '-250px') {
            $("#summaryBox").velocity({
                left: '0px'
            });
            if(window.screen.width < 768){
                $("#contentBox").velocity({
                    left: '250px'
                });
            }else{
                $("#contentBox").velocity({
                    left: '250px',
                    width: $("#contentBox").width() - 250
                });
            }
            $("#summaryFloatButton").html('<i class="layui-icon layui-icon-shrink-right"></i>');
        } else if ($("#summaryBox").css("left") == '0px') {
            $("#summaryBox").velocity({
                left: '-250px'
            });
            if(window.screen.width < 768){
                $("#contentBox").velocity({
                    left: '0px'
                });
            }else{
                $("#contentBox").velocity({
                    left: '0px',
                    width: '100vw'
                });
            }
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
            title: "登录BlocklyNukkit Wiki账户", //不显示标题
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
            title: "注册BlocklyNukkit Wiki账户",
            content: $("#registerDialog"),
            btn: "注册",
            yes: function() {
                var email = $("#registerDialogEmail").val();
                var password = $("#registerDialogPassword").val();
                var repeat = $("#registerDialogRepeatPassword").val();
                if (password != repeat) {
                    layer.msg('两次输入的密码不一致！', {
                        icon: 2
                    });
                    return;
                }
                register(
                    email,
                    password,
                    function() {
                        layer.msg('注册成功，请前往邮箱确认注册信息', {
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
                        layer.msg('请填写正确的邮箱地址！', {
                            icon: 2
                        });
                    },
                    function() {
                        layer.msg('密码过短或不安全! <br>至少要包含8个字符 (推荐使用数字+英文)', {
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
                layer.msg('您已经成功登出BNWiki', {
                    icon: 7
                });
                refreshUerNav();
            }, function() {
                layer.msg('很抱歉，因网络原因，暂时无法退出登录', {
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
            useremail: getUserEmail(),
            uid: getUserUid(),
            username: getUserNickName(),
            sex: getUserGender()
        });
        var index = layer.open({
            type: 1,
            shadeClose: true,
            resize: false,
            title: ("用户中心"),
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
                        layer.msg('用户信息修改成功!', {
                            icon: 1
                        });
                        layer.close(index);
                    },
                    function() {
                        layer.msg('修改失败，请稍后片刻后再尝试', {
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

/**
 * @description 打开指定章节
 * @param {Object} path 打开的文档的路径
 * @param {Object} title 打开后要跳转的标题
 * @param {Object} isSummaryJump 是否目录也跟着改变
 */
function loadContent(path, title, isSummaryJump) {
    //如果是正在展开目录造成的点击，不进行处理
    if (window.summaryEnfolding) {
        return;
    }
    //目录也跟着跳转
    if (isSummaryJump) {
        var entry = $(`[onclick="loadContent('${path}')"]`);
        if (entry.length != 0) {
            window.summaryEnfolding = true;
            var toOpen = [];
            let currentNode = entry;
            for (let i = 0; i < 100; i++) {
                if (currentNode.attr('id') == 'summaryContent') break;
                if (currentNode.is('a')) toOpen.push(currentNode);
                currentNode.children('.layui-menu-body-title').children('a').each(function() {
                    toOpen.push($(this));
                });
                currentNode = currentNode.parent();
            }
            for (let each of toOpen) {
                each.click();
            }
            window.summaryEnfolding = false;
        }
    }
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
                                if (title) {
                                    iframeExec(
                                        "document.getElementById('" +
                                        title +
                                        "').scrollIntoView({behavior: 'smooth'})"
                                    );
                                }
                                $("#content").velocity({
                                    opacity: 1
                                }, {
                                    duration: 500,
                                    queue: false,
                                    complete: () => {
                                        if (title) {
                                            window.history.pushState({
                                                    path: path
                                                },
                                                "BlocklyNukkit Wiki",
                                                window.location.href
                                                .split('?')[0] +
                                                "?goto=" + path +
                                                "title=" + title);
                                        } else {
                                            window.history.pushState({
                                                    path: path
                                                },
                                                "BlocklyNukkit Wiki",
                                                window.location.href
                                                .split('?')[0] +
                                                "?goto=" + path);
                                        }
                                    },
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
                        complete: () => $("#loadingFailedIcon").velocity(
                            "transition.flipXIn", {
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

/**
 * @description 在内容的iframe页面中执行js代码
 * @param {Object} js
 * @param {Object} src
 */
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

/**
 * @description 根据浏览器地址栏信息跳转到指定章节
 */
function jumpByLocationHref() {
    let gotoPath = getQueryVariable("goto");
    if (gotoPath) {
        if (gotoPath.startsWith("/")) {
            gotoPath = gotoPath.replace("/", '');
        }
        let gotoTitle = getQueryVariable("title");
        if (gotoTitle) {
            loadContent(gotoPath, gotoTitle, true);
        } else {
            loadContent(gotoPath, null, true);
        }
    } else {
        loadContent("wiki/readme.md");
    }
}