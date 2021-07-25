layui.use(['element', 'layer', 'form', 'tree'], function() {
    var element = layui.element;
    var layer = layui.layer;
    var form = layui.form;
    var tree = layui.tree;

    /**
     * @description 初始化内容iframe
     */
    var contentIframe = $("#editor_preview")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    contentIframedoc.head.innerHTML = '<link rel="stylesheet" href="./layui/css/layui.css" />' +
        '<link rel="stylesheet" href="./markdown.css" />' +
        '<link rel="stylesheet" href="./prism.css" />';
    iframeExec('layui.use("element", function(){});', './layui/layui.js');

    /**
     * @description 构建目录树
     */
    parseSummary(data => {
        window.treeInstance = tree.render({
            elem: '#editor_summaryBar',
            onlyIconControl: true,
            data: data,
            click: function(obj) {
                console.log(obj.data); //得到当前点击的节点数据
                window.currentPath = obj.data.path;
                openNewPath(obj.data.path, obj.data.title);
            }
        });
    }, res => {
        layer.msg('获取目录信息失败', {
            icon: 2
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
    
    /**
     * @description 没登陆直接停掉
     */
    if(!isLogined()){
        layer.alert('您尚未登录，无法进行编辑');
        return;
    }

    /**
     * @description 设置分割面板
     */
    Split(['#editor_summaryBar', '#editor_mainView'], {
        sizes: [20, 80],
        minSize: [0, 200],
        onDrag: function() {
            editor.resize();
        }
    });
    Split(['#editor_ace', '#editor_preview'], {
        sizes: [20, 80],
        minSize: [200, 0],
        onDrag: function() {
            editor.resize();
        }
    });

    /**
     * @description 初始化编辑器
     */
    var editor = ace.edit("editor_ace");
    editor.setTheme("ace/theme/chrome");
    editor.session.setMode("ace/mode/markdown");
    editor.setFontSize(Number.parseInt(getConfigByKey("font-size")));
    editor.setOption("cursorStyle", "smooth");
    editor.setOption("scrollPastEnd", 0.5);
    editor.setOption("showInvisibles", true);
    editor.setOption("behavioursEnabled", false);
    new AceScrollbars(editor);
    window.editor = editor;
    //默认为保存状态
    window.currentSaved = true;
    //监听内容更改并渲染
    editor.session.on('change', function(delta) {
        window.currentSaved = false;
        rendMarkdown(editor.session.getValue());
    });

    /**
     * @description 监听编辑器工具栏按钮
     */
    //放大按钮
    $("[act='enlarge']").click(() => modifyFontSize(1));
    //缩小按钮
    $("[act='narrow']").click(() => modifyFontSize(-1));
    //刷新按钮
    $("[act='refresh']").click(() => rendMarkdown(editor.session.getValue()));
    //保存按钮
    $("[act='save']").click(() => saveCurrent());
    //上传图片按钮
    $("[act='uploadPicture']").click(() => uploadImage((url, name) => {
        editor.insert(`![${name}](${url})`);
        layer.msg(name + ' 上传成功', {
            icon: 1
        });
    }, c => {
        layer.msg('上传失败: ' + c, {
            icon: 2
        });
    }, false));
    //编辑目录按钮
    $("[act='editMenu']").click(() => {openNewPath("SUMMARY.md", "目录");window.currentPath = "SUMMARY.md";});
})

/**
 * @description 在内容的iframe页面中执行js代码
 * @param {Object} js
 * @param {Object} src
 */
function iframeExec(js, src) {
    var contentIframe = $("#editor_preview")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    var script = contentIframedoc.createElement('script');
    script.innerHTML = js;
    if (src) {
        script.src = src;
    }
    contentIframedoc.body.appendChild(script);
}

/**
 * @description 渲染markdown并且展示
 * @param {Object} md
 */
function rendMarkdown(md) {
    var contentIframe = $("#editor_preview")[0];
    contentIframedoc = contentIframe.contentDocument || contentIframe.contentWindow.document;
    contentIframedoc.body.innerHTML = '<div class="vertical-16px"></div>' +
        contentMD(md);
    contentIframedoc.body.className = "layui-text";
}

/**
 * @description 修改编辑器字号
 * @param {Number} operate
 */
function modifyFontSize(operate) {
    var currentFontSize = Number.parseInt(getConfigByKey("font-size"));
    currentFontSize += operate;
    setConfigByKey("font-size", String(currentFontSize));
    window.editor.setFontSize(currentFontSize);
}

/**
 * @description 保存当前章节
 */
function saveCurrent() {
    if (window.currentPath) {
        updatePassage(window.currentPath, window.editor.getValue(), () => {
            layer.msg('保存完成', {
                icon: 1
            });
            window.currentSaved = true;
        }, c => {
            layer.msg('保存失败: ' + c, {
                icon: 2
            });
        })
    }
}

/**
 * @description 打开新的章节
 */
function openNewPath(path, title) {
    const doOpen = function() {
        getPassage(path, res => {
            if (res.length == 0) {
                let tmpContent = "# " + title + "  \nby " + getUserName();
                newPassage(path, title, tmpContent, () => {
                    layer.msg('已创建新章节<br>' + title, {
                        icon: 1
                    });
                    window.currentSaved = false;
                }, () => {
                    layer.msg('章节重名，创建失败', {
                        icon: 2
                    });
                }, c => {
                    layer.msg('章节创建失败: ' + c, {
                        icon: 2
                    });
                });
                window.editor.setValue(tmpContent);
            } else {
                window.editor.setValue(res[0].content);
                window.currentSaved = true;
            }
        }, c => {
            layer.msg('获取内容失败: ' + c, {
                icon: 2
            });
        })
    }
    if (!window.currentSaved && window.currentPath) {
        layer.confirm('是否要放弃当前章节更改', {
            icon: 3,
            title: '提示'
        }, function(index) {
            layer.close(index);
            doOpen();
        }, function(index) {
            layer.close(index);
        });
    } else {
        doOpen();
    }
}

/**
 * @description 上传图片
 */
function uploadImage(okHandler, failHandler, mutiply) {
    var inputEle = $(`<input type="file" accept="image/*" ${mutiply?"multiple":""}>`);
    inputEle.click();
    inputEle.on("change", function() {
        if (this.files) {
            for (let imageFile of this.files) {
                var index = layer.open({
                    type: 1,
                    shadeClose: false,
                    title: "上传 " + imageFile.name,
                    content: $("#uploadFileProcessDialog"), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
                });
                app.uploadFile({
                        cloudPath: "images/" + imageFile.name,
                        filePath: imageFile,
                        onUploadProgress: function(progressEvent) {
                            var percentCompleted = Math.round((progressEvent.loaded * 100) /
                                progressEvent.total);
                            layui.element.progress('uploadFileProcessBar', percentCompleted + "%");
                        }
                    })
                    .then((result) => {
                        layer.close(index);
                        layui.element.progress('uploadFileProcessBar', "0%");
                        okHandler('https://626c-blocklunukkit-1488c9-1259395953.tcb.qcloud.la/images/' +
                            imageFile.name, imageFile.name);
                    }, res => {
                        failHandler(res.code);
                    });
            }
        }
    });
}
