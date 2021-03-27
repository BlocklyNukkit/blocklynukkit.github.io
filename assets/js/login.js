const app = cloudbase.init({
    env: 'blocklunukkit-1488c9'
})
const auth = app.auth({
  persistence: "local"
});

$(()=>{auth.onLoginStateChanged(reloadLoginStatus);});//监听登录状态
setTimeout(()=>{reloadLoginStatus()},500);//初始化刷新

//刷新登录状态函数
function reloadLoginStatus(loginState){
    if(loginState == null || loginState == undefined){
        loginState = auth.hasLoginState();
    }
    console.log(loginState);
    if(loginState){
        if(loginState.user != null){
            if(loginState.user.nickName != null && loginState.user.nickName != ""){
                document.getElementById("userName").innerText = loginState.user.nickName; 
            }else if(loginState.user.email != null && loginState.user.email != ""){
                document.getElementById("userName").innerText = loginState.user.email; 
            }else{
                document.getElementById("userName").innerText = loginState.user.uid;
            }
            document.getElementById("userName").setAttribute("href","/user.html"); 
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
    if(account.indexOf("@")!=-1){
        auth.signInWithEmailAndPassword(account, password)
            .then((loginState) => {
                window.history.back(-1);
            },() => {
                $("#loginError").show(0);
            });
    }else{
        auth.signInWithUsernameAndPassword(account, password)
            .then((loginState) => {
                window.history.back(-1);
            },() => {
                $("#loginError").show(0);
            });
    }
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
//重置密码函数
function resetPassword(oldpassword,password,confirmPassword){
    if(oldpassword == null || oldpassword == undefined){
        oldpassword = document.getElementById("userOldPasswordInupt").value;
    }
    if(password == null || password == undefined){
        password = document.getElementById("userNewPasswordInupt").value;
    }
    if(confirmPassword == null || confirmPassword == undefined){
        confirmPassword = document.getElementById("userConfirmNewPasswordNameInupt").value;
    }
    if(confirmPassword != password){
        $("#userResetPasswordInputError").show(0);
        return;
    }
    let user = auth.currentUser;
    user.updatePassword(password, oldpassword).then(() => {
        document.getElementById("userOldPasswordInupt").value = "";
        document.getElementById("userNewPasswordInupt").value = "";
        document.getElementById("userConfirmNewPasswordNameInupt").value = "";
        $("#userResetPasswordSuccess").show(0);
    },() => {
        $("#userResetPasswordOtherError").show(0);
    });
}
//修改昵称函数
function resetNickName(newNickName){
    if(newNickName == null || newNickName == undefined){
        newNickName = document.getElementById("userNickNameInupt").value;
        if(newNickName == ""){
            $("#userResetUserNameError").show(0);
        }else{
            auth.isUsernameRegistered(newNickName).then((registered) => {
                if(!registered){
                    let user = auth.currentUser;
                    user.update({
                            nickName: newNickName, 
                        })
                        .then(() => {
                            document.getElementById("userNickNameInupt").value = "";
                            user.updateUsername(newNickName).then(()=>{
                                $("#userResetUserNameSuccess").show(0);
                            },()=>{
                                $("#userResetUserNameError").show(0);
                            })
                        },() => {
                            $("#userResetUserNameError").show(0);
                        });
                }else{
                    $("#userResetUserNameSameError").show(0);
                }
            });
        }
    }
}
//登出账号函数
function logout(){
    auth.signOut().then(()=>{
        window.location.href = "/";
    },()=>{
        alert("登出失败");
    });
}