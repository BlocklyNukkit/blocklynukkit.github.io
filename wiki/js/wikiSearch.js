/**
 * @description wiki搜索
 */

function searchWiki(toSearch, okHandler, noAuthHander, failHander) {
    if (!okHandler) okHandler = res => console.log(res);
    if (!noAuthHander) noAuthHander = () => console.log("尚未登录，无法搜索");
    if (!failHander) failHander = () => console.log("搜索失败");
    if (isLogined()) {
        app.callFunction({
            name: 'searchWIki',
            data: {
                query: toSearch
            }
        }).then(result => {
            okHandler(result.result.hits)
        }, () => {
            failHander();
        })
    } else {
        noAuthHander();
    }
}
