var db = app.database();
var wikiDB = db.collection("wiki_BlocklyNukkit");

/**
 * @description 目录树
 */
var summaryTree = []

function getPassage(path, okHandler, failHandler){
    wikiDB.where({
        path: path
    }).get().then(res => {
        okHandler(res.data);
    }, e => {
        failHandler(e.code);
    })
}

function newPassage(path, title, content, okHandler, samePathHandler, failHandler){
    wikiDB.where({
        path: path
    }).count().then(res => {
        if(res.total == 0){
            wikiDB.add({
                title: title,
                path: path,
                content: content
            }).then(res => {
                okHandler();
            }, res => {
                failHandler(res.code);
            })
        }else{
            samePathHandler();
        }
    }, res => {
        failHandler(res.code);
    })
}

function updatePassage(path, content, okHandler, failHandler){
    wikiDB.where({
        path: path
    }).update({
        content: content
    }).then(res => {
        okHandler();
    }, res => {
        failHandler(res.code);
    })
}

function parseSummary(okHandler, failHandler){
    getPassage("SUMMARY.md", res => {
        //获取目录内容
        let raw = res[0].content;
        //去掉目录中非列表部分
        raw = raw.replace("# SUMMARY  \n", "");
        //拆分为数组用于遍历
        let entries = raw.split("  \n");
        //递归构建目录树
        function build(src, parent){
            let tmpNode = null;
            for(let i=0;i<src.length;i++){
                const entry = src[i];
                if(entry.space() == 0){
                    tmpNode = {
                        title: entry.replace("* [", "").split("](")[0],
                        path: entry.replace("* [", "").split("](")[1].replace(")", "").replace("  ", "").trim(),
                        sub: [],
                        children: []
                    };
                    parent.push(tmpNode);
                }else{
                    tmpNode.sub.push(entry.replace("    ", ""));
                }
            }
            for(let each of parent){
                build(each.sub, each.children);
            }
        }
        build(entries, summaryTree);
        okHandler(summaryTree);
    }, failHandler);
}

