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
    
}

function uploadAssets(dir,assetFiles){
    var index = 0;
    if(index < assetFiles.length){
        let assetFile = assetFiles[index];
        index++;
        app.uploadFile({
            cloudPath: dir+"/"+assetFile.name,
            filePath: assetFile
        })
        .then((res) => {
            console.log(res.fileID);
            uploadAssets();
        });
    }
    
}