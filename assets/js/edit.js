function getWikiContent(path, handler){
    app.callFunction({
            name: "getWikiContent",
            data: { path: path }
        })
        .then((res) => {
            const result = res.result; //云函数执行结果
            handler(result);
        });
}