var summaryURL = "https://wiki.blocklynukkit.com/SUMMARY.md";
var contentSource = "https://wiki.blocklynukkit.com/";

if(window.localStorage.getItem("summaryURL")){
    summaryURL = window.localStorage.getItem("summaryURL");
}
if(window.localStorage.getItem("contentSource")){
    contentSource = window.localStorage.getItem("contentSource");
}
function setSummaryURL(url){
    window.localStorage.setItem("summaryURL", url);
}

function setContentSource(url){
    window.localStorage.setItem("contentSource", url);
}