const db = app.database();
const userplugin = db.collection("userplugin");

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

function addNewPlugin(pluginName,pluginVersion,pluginDescription,pluginInfo,pluginAssets){
    if(pluginName == null || pluginName == undefined){
        pluginName = $("pluginNameInput").val();
        if(pluginName == "" || pluginName.indexOf(" ") != -1){
            $("#uploadError").show(0).text("名称不能为空或者带有空格");return;
        }
    }
    if(pluginVersion == null || pluginVersion == undefined){
        pluginVersion = $("pluginVersionInput").val();
        if(pluginVersion == "" || pluginVersion.indexOf(" ") != -1){
            $("#uploadError").show(0).text("版本不能为空或者带有空格");return;
        }
    }
    if(pluginDescription == null || pluginDescription == undefined){
        pluginDescription = $("pluginDescriptionInput").val();
    }
    if(pluginInfo == null || pluginInfo == undefined){
        pluginInfo = $("pluginInfoInput").val();
    }
    if(pluginAssets == null || pluginAssets == undefined){
        pluginAssets = assets;
        if(pluginAssets == null || pluginAssets.length == 0){
            $("#uploadError").show(0).text("请先上传插件文件！");return;
        }
    }
    
    var _assets;
    isPluginExists(pluginName,function(){
        uploadAssets(pluginName+"_"+pluginVersion,pluginAssets,function(paths){
            _assets = paths;
            userplugin.add({
                name: pluginName,
                version: pluginVersion,
                user: auth.hasLoginState().user.email,
                userNickName: auth.hasLoginState().user.nickName,
                description: pluginDescription,
                time: new Date(),
                assets: _assets
            })
            .then((res) => {
                console.log(res);
                $("#addPluginSuccess").show(0).text(pluginName+" "+pluginVersion+"上传成功！");
            },() => {
                $("#uploadError").show(0).text("信息填写错误！");
            });
        },function(why){
            $("#uploadError").show(0).text(why.name+"上传失败");
        });
    },function(){
        $("#uploadError").show(0).text("插件重名，请更换插件名称");
    });
}

function uploadAssets(dir,assetFiles,handler,failed){
    var assetsPaths = [];
    let assetFile = assetFiles.shift();
    if(assetFile != undefined || assetFile != null){
        app.uploadFile({
            cloudPath: dir+"/"+assetFile.name,
            filePath: assetFile
        }).then((res) => {
            console.log(res.fileID);
            assetsPaths.push(res.fileID);
            uploadAssets(dir,assetFiles);
        },() => {
            failed(assetFile);
        });
    }else{
        handler(assetsPaths);
    }
}

function isPluginExists(pluginName,yes,no){
    userplugin.where({
        name: pluginName
    }).get()
    .then((res) => {
        console.log(res.data);
        if(res.data.length != 0){
            no();
        }else{
            yes();
        }
    });
}