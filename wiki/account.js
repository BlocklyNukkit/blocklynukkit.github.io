const app = cloudbase.init({
    env: "blocklunukkit-1488c9"
});
const auth = app.auth({
    persistence: "local"
});

auth.onLoginStateChanged((loginState) => {
    if (loginState) {
        console.log(loginState.user);
    } else {
        console.log("NO USER");
    }
});

function login(account, password, okHandler, failHandler) {
    if (account.indexOf("@") != -1) {
        auth.signInWithEmailAndPassword(account, password)
            .then((loginState) => {
                okHandler();
            }, () => {
                failHandler();
            });
    } else {
        auth.signInWithUsernameAndPassword(Pinyin.convertToPinyin(account, '', true), password)
            .then((loginState) => {
                okHandler();
            }, () => {
                failHandler();
            });
    }
}

function logout(okHandler, failHandler) {
    auth.signOut().then(() => {
        okHandler();
    }, () => {
        failHandler();
    });
}

function isLogined() {
    let loginState = auth.hasLoginState();
    if (loginState) {
        if (loginState.user != null) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

const emails = ["gmail.com", "yahoo.com", 'msn.com', 'hotmail.com', 'foxmail.com', 'qq.com', 'live.com', 'ask.com',
    '163.com', 'sogou.com', 'sohu.com', 'cyber.net.pk', 'gov.cn',
    'outlook.com', '163.net', '126.net', 'googlemail.com', 'qdez.edu', 'mail.com', 'inbox.com', 'sina.com',
    'blocklynukkit.com', 'hongkong.com'
];

function register(email, password, okHandler, failHandler, invalidEmailHander, invalidPasswordHandler) {
    if (email.indexOf("@") == -1) {
        invalidEmailHander();
        return;
    }

    let emailType = email.split("@")[1];
    let catched = false;
    for (let each of emails) {
        if (emailType == each) {
            catched = true;
            break;
        }
    }
    console.log(catched);
    if (!catched) {
        invalidEmailHander();
        return;
    }

    if (password.length < 6) {
        invalidPasswordHandler();
    }

    auth.signUpWithEmailAndPassword(email, password)
        .then((loginState) => {
            okHandler();
        }, () => {
            failHandler();
        });
}

function getUserName() {
    if (auth.currentUser) {
        let user = auth.currentUser;
        if (user.nickName) {
            return user.nickName;
        } else if (user.email) {
            return user.email;
        } else {
            return user.uid;
        }
    }
    return null;
}

function getUserEmail() {
    if (auth.currentUser) {
        return auth.currentUser.email;
    }
    return null;
}

function getUserUid() {
    if (auth.currentUser) {
        return auth.currentUser.uid;
    }
    return null;
}

function getUserNickName() {
    if (auth.currentUser) {
        return auth.currentUser.nickName;
    }
    return null;
}

function getUserGender() {
    if (auth.currentUser) {
        return auth.currentUser.gender;
    }
    return null;
}

function updateUserInfo(info, okHandler, failHandler) {
    if (info.username){
        let username = info.username;
        delete info.username;
        if(auth.currentUser){
            auth.currentUser.updateUsername(username).then(()=>{
                //ignore
            }, () =>{
                failHandler();
            })
        }
    }
    if (auth.currentUser) {
        auth.currentUser.update(info)
            .then((loginState) => {
                okHandler();
            }, () => {
                failHandler();
            });
    }
}
