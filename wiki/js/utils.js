function getQueryVariable(variable){
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
           let pair = vars[i].split("=",2);
           if(pair[0] == variable){return window.decodeURIComponent(pair[1]);}
    }
    return null;
}

String.prototype.trim = function(){
    return this.replace(/^(\s*)|(\s*)$/g, '');
}

String.prototype.space = function(){
    let spaces = 0;
    for(let i=0;i<this.length;i++){
        if(this[i] == ' '){
            spaces++;
        }else{
            return spaces;
        }
    }
}

var store = window.localStorage;
function getConfigByKey(key){
	if(store.getItem(key) == null){
		let _default = getConfigDefault(key);
		store.setItem(key, _default);
		return _default;
	}else{
		return store.getItem(key);
	}
}
function getConfigDefault(key){
	let re = null;
	switch(key){
		case "font-size":
			re = "20";break;
		case "theme":
			re = "chrome";break;
	}
	return re;
}
function setConfigByKey(key,value){
	store.setItem(key, value);
}