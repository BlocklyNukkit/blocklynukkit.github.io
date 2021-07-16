/**
 * @description wiki搜索
 */
var client = undefined;
var wikiIndex = undefined;

function searchWiki(toSearch, okHandler, noAuthHander, failHander) {
    if (!okHandler) okHandler = res => console.log(res);
    if (!noAuthHander) noAuthHander = () => console.log("尚未登录，无法搜索");
    if (!failHander) failHander = () => console.log("搜索失败");
    if (client) {
        if (!wikiIndex) {
            wikiIndex = client.index('wiki');
        }
        wikiIndex.search(toSearch).then(result => okHandler(result.hits), () => failHander());
    } else {
        if (isLogined()) {
            app.callFunction({
                name: 'getWikiSearchKey'
            }).then(key => {
                client = new MeiliSearch({
                    host: 'http://49.232.170.120:7700',
                    apiKey: key.result,
                });
                searchWiki(toSearch, okHandler, noAuthHander, failHander);
            }, () => {
                failHander();
            })
        } else {
            noAuthHander();
        }
    }
}
