const app = cloudbase.init({
    env: 'blocklunukkit-1488c9'
})
const auth = app.auth({
  persistence: "local"
});
//监听登录状态
auth.onLoginStateChanged(reloadLoginStatus);
//刷新登录状态函数
function reloadLoginStatus(loginState){
    if(loginState == null || loginState == undefined){
        loginState = auth.hasLoginState();
    }
    if(loginState){
        if(loginState.user != null){
            if(loginState.user.nickName != null){
                document.getElementById("userName").innerText = loginState.user.nickName; 
            }else{
                document.getElementById("userName").innerText = loginState.user.username; 
            }
        }else{
            document.getElementById("userName").innerText = "未登录";
            document.getElementById("userName").setAttribute("href","/login.html"); 
        }
    }else{
        document.getElementById("userName").innerText = "未登录";
        document.getElementById("userName").setAttribute("href","/login.html"); 
    }
}
$(reloadLoginStatus);//初始化刷新

