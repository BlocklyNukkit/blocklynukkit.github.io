function getQueryVariable(variable){
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i=0;i<vars.length;i++) {
           let pair = vars[i].split("=",2);
           if(pair[0] == variable){return window.decodeURIComponent(pair[1]);}
    }
    return false;
}