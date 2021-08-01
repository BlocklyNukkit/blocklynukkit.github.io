layui.use(['element', 'layer', 'form'], function() {
    var element = layui.element;
    var layer = layui.layer;
    var form = layui.form;

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

    /**
     * @description 监听插件搜索框
     */
    $("#searchPluginInput").bind("input propertychange", function() {
        if (this.timerID) {
            window.clearTimeout(this.timerID);
        }
        this.timerID = window.setTimeout(() => {
            let toSearch = $(this).val().trim();
            getAllPlugins(toSearch, result => {
                window.pluginData = result;
                let outputHtml = "";
                for (let each of result) {
                    outputHtml += (
                        `<div class="layui-col-xs12 layui-col-sm12 layui-col-md12">
                           <h3>${each.name}&ensp;<a class="bnpm-plugin-version">${each.version}</a></h3>
                           <div class="bnpm-plugin-content">${each.description}</div> by ${each.userNickName ? each.userNickName : each.user}
                           <button class="layui-btn layui-btn-radius layui-btn-normal bnpm-more-btn" onclick="detail('${each.name}');">详情&ensp;<i class="layui-icon layui-icon-about"></i></button>
                           <hr/>
                         </div>`
                    );
                }
                $("#pluginList").html(outputHtml);
            })
        }, 1000);
    })
})

function detail(pluginName){
    for(let each of window.pluginData){
        if(each.name == pluginName){
            var index = layer.open({
                type: 1,
                shadeClose: true,
                resize: true,
                title: pluginName,
                area: [(document.documentElement.clientWidth - 48) + "px", (document.documentElement.clientHeight - 96) + "px"],
                maxmin: true,
                content: $("#pluginDetailDialog"),
                resizing: function(ele){
                    console.log(ele);
                }
            });
            var contentIframe = $("#pluginContent")[0];
            contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
            contentIframedoc.head.innerHTML = '<link rel="stylesheet" href="./layui/css/layui.css" />' +
                '<link rel="stylesheet" href="./markdown.css" />' +
                '<link rel="stylesheet" href="./prism.css" />';
            iframeExec('layui.use("element", function(){});', './layui/layui.js');
            contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
            contentMD(each.info, function(mdRes){
                contentIframedoc.body.innerHTML = mdRes;
            })
            contentIframedoc.body.className = "layui-text";
            break;
        }
    }
}

/**
 * @description 在内容的iframe页面中执行js代码
 * @param {Object} js
 * @param {Object} src
 */
function iframeExec(js, src) {
    var contentIframe = $("#pluginContent")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    var script = contentIframedoc.createElement('script');
    script.innerHTML = js;
    if (src) {
        script.src = src;
    }
    contentIframedoc.body.appendChild(script);
}
