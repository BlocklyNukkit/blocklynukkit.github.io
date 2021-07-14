var summaryURL = "https://wiki.blocklynukkit.com/SUMMARY.md";
var contentSource = "https://wiki.blocklynukkit.com/";

layui.use([], function(){
    /**
     * @description 数据源设定
     */
    if(layui.data("source").summaryURL){
        summaryURL = dataStorage("source").summaryURL;
    }
    if(layui.data("source").contentSource){
        contentSource = dataStorage("source").contentSource;
    }
})

function setSummaryURL(url){
    layui.data("source",{
        summaryURL: url
    });
}

function setContentSource(url){
    layui.data("source",{
        contentSource: url
    });
}