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
//登录函数
function login(account,password){
    if(account == null || account == undefined){
        account = document.getElementById("loginAccount").value;
    }
    if(password == null || password == undefined){
        password = document.getElementById("loginPassword").value;
    }
    auth.signInWithEmailAndPassword(account, password)
        .then((loginState) => {
            window.history.back(-1);
        },() => {
            $("#loginError").show(0);
        });
}
//注册函数
function register(account,password,confirmPassword){
    if(account == null || account == undefined){
        account = document.getElementById("registerAccount").value;
    }
    if(password == null || password == undefined){
        password = document.getElementById("registerPassword").value;
    }
    if(confirmPassword == null || confirmPassword == undefined){
        confirmPassword = document.getElementById("registerConfirmPassword").value;
    }
    if(confirmPassword != password){
        $("#registerPasswordError").show(0);
        return;
    }
    auth.signUpWithEmailAndPassword(account, password)
        .then((loginState) => {
            window.location.href = "/confirmEmail.html";
        },() => {
            $("#registerOtherError").show(0);
        });
}
