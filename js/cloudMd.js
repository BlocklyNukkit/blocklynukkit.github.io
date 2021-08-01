if (!this.summaryMD) {
    this.summaryMD = function(mdcontent, okHandler) {
        app.callFunction({
                name: "markdown",
                data: {
                    type: "summary",
                    md: mdcontent
                }
            })
            .then((res) => {
                const result = res.result;
                okHandler(result)
            }, (res) => {
                okHandler("加载失败");
            });
    }
}

if (!this.contentMD) {
    this.contentMD = function(mdcontent, okHandler) {
        app.callFunction({
                name: "markdown",
                data: {
                    type: "content",
                    md: mdcontent
                }
            })
            .then((res) => {
                const result = res.result;
                okHandler(result)
            }, (res) => {
                okHandler("加载失败");
            });
    }
}
