const app = cloudbase.init({
    env: 'blocklunukkit-1488c9'
})
const auth = app.auth({
  persistence: "local"
});

$(()=>{auth.onLoginStateChanged(reloadLoginStatus);});//监听登录状态
$(reloadLoginStatus);//初始化刷新

//刷新登录状态函数
function reloadLoginStatus(loginState){
    if(loginState == null || loginState == undefined){
        loginState = auth.hasLoginState();
    }
    console.log(loginState);
    if(loginState){
        console.log("1");
        if(loginState.user != null){
            console.log("2");
            if(loginState.user.nickName != null && loginState.user.nickName != ""){
                console.log("3");
                document.getElementById("userName").innerText = loginState.user.nickName; 
            }else if(loginState.user.email != null && loginState.user.email != ""){
                console.log("4");
                document.getElementById("userName").innerText = loginState.user.email; 
            }else{
                document.getElementById("userName").innerText = loginState.user.uid;
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
