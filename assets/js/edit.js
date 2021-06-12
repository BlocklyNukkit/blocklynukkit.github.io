function getWikiContent(path, handler){
    path = encodeURI(path);
    app.callFunction({
            name: "getWikiContent",
            data: { path: path }
        })
        .then((res) => {
            const result = res.result; //云函数执行结果
            handler(result);
        },() => {
            handler("# "+decodeURI(path)+"\n");
        });
}

function setWikiContent(path, content, handler){
    path = encodeURI(path);
    app.callFunction({
            name: "setWikiContent",
            data: { path: path, content: content }
        })
        .then((res) => {
            const result = res.result; //云函数执行结果
            handler(result);
        });
}