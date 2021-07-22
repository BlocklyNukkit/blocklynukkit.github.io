const db = app.database();
const userplugin = db.collection("userplugin");
const _ = db.command;
// {
//     name: "插件名",
//     version: "插件版本",
//     user: "用户名",
//     userNickName: "用户昵称",
//     description: "描述",
//     time: 日期,
//     info: "详情说明",
//     assets: [
//         "内容下载链接1",
//         "内容下载链接2"
//     ]
// }
var assetsPaths = [];

function addNewPlugin(pluginName, pluginVersion, pluginDescription, pluginInfo, pluginAssets, successHandler,
    invalidNameHandler, sameNameHandler, invalidVersionHandler, noAssetsHandler, uploadFailedHandler) {
    if (pluginName == "" || pluginName.indexOf(" ") != -1) {
        invalidNameHandler();
        return;
    }
    pluginVersion = $("#pluginVersionInput").val();
    if (pluginVersion == "" || pluginVersion.indexOf(" ") != -1) {
        invalidVersionHandler();
        return;
    }
    if (pluginAssets == null || pluginAssets.length == 0) {
        noAssetsHandler();
        return;
    }

    isPluginNotExists(pluginName, function() {
        assetsPaths = [];
        uploadAssets(pluginName + "_" + pluginVersion, pluginAssets, function(paths) {
            userplugin.add({
                    name: pluginName,
                    version: pluginVersion,
                    user: auth.hasLoginState().user.email,
                    userNickName: auth.hasLoginState().user.nickName,
                    description: pluginDescription,
                    info: pluginInfo,
                    download: 0,
                    time: new Date(),
                    assets: assetsPaths
                })
                .then((res) => {
                    console.log(res);
                    successHandler();
                }, () => {
                    uploadFailedHandler();
                });
        }, function(why) {
            uploadFailedHandler(why.name);
        });
    }, function() {
        sameNameHandler();
    });
}

function editPlugin(pluginName, pluginVersion, pluginDescription, pluginInfo, pluginAssets, successHandler,
    invalidNameHandler, pluginNotFoundHandler, sameNameHandler, invalidVersionHandler, noAssetsHandler,
    uploadFailedHandler) {
    if (pluginName == "" || pluginName.indexOf(" ") != -1) {
        invalidNameHandler();
        return;
    }
    pluginVersion = $("#pluginVersionInput").val();
    if (pluginVersion == "" || pluginVersion.indexOf(" ") != -1) {
        invalidVersionHandler();
        return;
    }
    if (pluginAssets == null || pluginAssets.length == 0) {
        noAssetsHandler();
        return;
    }

    isPluginNotExists(pluginName, function() {
        pluginNotFoundHandler();
    }, function(data) {
        assetsPaths = [];
        uploadAssets(pluginName + "_" + pluginVersion, pluginAssets, function(paths) {
            userplugin.doc(data["_id"]).update({
                    version: pluginVersion,
                    userNickName: auth.hasLoginState().user.nickName,
                    description: pluginDescription,
                    info: pluginInfo,
                    time: new Date(),
                    assets: pluginAssets
                })
                .then((res) => {
                    console.log(res);
                    successHandler();
                }, () => {
                    uploadFailedHandler();
                });
        }, function(why) {
            uploadFailedHandler(why.name);
        });
    });
}

function uploadAssets(dir, assetFiles, handler, failed) {
    let assetFile = assetFiles.shift();
    if (assetFile != undefined || assetFile != null) {
        app.uploadFile({
            cloudPath: "bnpm/" + dir + "/" + assetFile.name,
            filePath: assetFile
        }).then((res) => {
            console.log(res.fileID);
            assetsPaths.push(res.fileID);
            uploadAssets(dir, assetFiles, handler, failed);
        }, () => {
            failed(assetFile);
        });
    } else {
        handler(assetsPaths);
    }
}

function getUserPlugins(handler, failed) {
    userplugin.where({
            _openid: auth.currentUser.uid
        }).get()
        .then((res) => {
            console.log(res.data);
            handler(res.data);
        }, () => {
            failed();
        });
}

function getAllPlugins(name, handler, failed) {
    var condition;
    if (name) {
        condition = _.and(_.or({
            name: new RegExp(name, 'i')
        }, {
            description: new RegExp(name, 'i')
        }, {
            userNickName: new RegExp(name, 'i')
        }), {
            time: _.gte(new Date((new Date()).getTime() - 360 * 24 * 60 * 60 * 1000))
        })
    } else {
        condition = {
            time: _.gte(new Date((new Date()).getTime() - 360 * 24 * 60 * 60 * 1000))
        }
    }
    userplugin.orderBy("time", "desc").where(condition).get()
        .then((res) => {
            console.log(res.data);
            handler(res.data);
        }, () => {
            failed();
        });
}

function isPluginNotExists(pluginName, yes, no) {
    userplugin.where({
            name: pluginName
        }).get()
        .then((res) => {
            console.log(res.data);
            if (res.data.length != 0) {
                no(res.data[0]);
            } else {
                yes();
            }
        });
}
