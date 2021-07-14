/**
 * @description 拓展处理器
 */
var summaryExt = function() {
    var summaryStyle = {
        type: 'output',
        regex: /(<a href=".*">.*<\/a>)/g,
        replace: '<div class="layui-menu-body-title">$1</div>'
    };
    var folderStyle = {
        type: 'output',
        regex: /<li>(.*)<a href="(.*)">(.*)<\/a>(.*)<hr \/>/g,
        replace: `<hr /><li class="layui-menu-item-group layui-menu-item-up" lay-options="{type: 'group'}">$1<a class="layui-menu-a-min-margin" href="#" onclick="loadContent('$2')"><span>$3</span><i class="layui-icon layui-icon-right" style="float: right;font-size: 14px;"></i></a>$4`
    };
    var herfStyle = {
        type: 'output',
        regex: /<a href="(.*)">(.*)<\/a>/g,
        replace: '<a class="layui-menu-a-min-margin" href="#" onclick="loadContent(\'$1\')"><span>$2</span></a>'
    }
    return [summaryStyle, folderStyle, herfStyle];
}
var noBrExt = function() {
    var noBr = {
        type: 'output',
        regex: /<br \/>/g,
        replace: '<hr />'
    }
    return [noBr];
}
var tableHelperExt = function() {
    var tableHelper = {
        type: 'lang',
        regex: /\|(-)(?=\|[- \n])/g,
        replace: '|--'
    }
    return [tableHelper];
}
var highlightExt_before = {
    type: 'lang',
    filter: function(text, converter, options) {
        let codeBlocks = text.match(/```[\s\S]*?```/g);
        if (codeBlocks != null)
            for (let each of codeBlocks) {
                let code = each.substring(each.indexOf("\n") + 1, each.length - 3);
                let codeType = each.substring(3, each.indexOf("\n"));
                switch (codeType) {
                    case "c++":
                        codeType = "cpp";
                        break;
                }
                console.log(codeType);
                let languageEntry = window.Prism.languages[codeType] || window.Prism.languages.plaintext;
                let rendered = window.Prism.highlight(code, languageEntry, codeType);
                rendered +=
                    `<span class="line-numbers-rows">${'<span></span>'.repeat(code.split('\n').length - 2)}<span>`
                let output =
                    `<pre class="line-numbers language-${codeType}"><code class="language-${codeType}">${rendered}</code></pre>`;
                text = text.replace(each, output);
            }
        return text;
    }
};
var contentExt = function() {
    var table = {
        type: 'output',
        regex: /<table>/g,
        replace: '<table class="layui-table">'
    };
    var blockquote = {
        type: 'output',
        regex: /<blockquote>/g,
        replace: '<blockquote class="layui-elem-quote">'
    };
    var tab = {
        type: 'lang',
        filter: function(text, converter, options) {
            let tabs = text.match(/\[\[\[[\s\S]*?]]]/g);
            if (tabs != null)
                for (let each of tabs) {
                    let headers = each.match(/\n?&.*?:\n/g);
                    let contents = each.substring(3, each.length - 3).split(/\n?&.*?:\n/g);
                    let headerOutput = '';
                    let contentOutput = '';
                    for (let i = 0; i < headers.length; i++) {
                        let eachHeader = headers[i].replace('\n', '').replace('& ','').replace(':', '');
                        if (i == 0) {
                            headerOutput += ('<li class="layui-this">' + eachHeader + '</li>');
                        } else {
                            headerOutput += ('<li>' + eachHeader + '</li>');
                        }
                    }
                    for (let i = 1; i < contents.length; i++) {
                        let eachContent = contentMD(contents[i]);
                        if(i==1){
                            contentOutput += ('<div class="layui-tab-item layui-show">' + eachContent + '</div>');
                        }else {
                            contentOutput += ('<div class="layui-tab-item">' + eachContent + '</div>');
                        }
                    }
                    let output =`<div class="layui-tab layui-tab-brief"><ul class="layui-tab-title">${headerOutput}</ul><div class="layui-tab-content">${contentOutput}</div></div>`;
                    text = text.replace(each, output);
                }
            return text;
        }
    }
    return [table, blockquote, tab];
}
// 注册拓展
showdown.extension('bn_summary_md', summaryExt);
showdown.extension('bn_content_md', contentExt);
showdown.extension('bn_no_br', noBrExt);
showdown.extension('bn_table_helper', tableHelperExt);
showdown.extension('bn_highlight_before', highlightExt_before);


/**
 * @description markdown解析器
 */
var summary_md = new showdown.Converter({
    extensions: ['bn_no_br', 'bn_summary_md']
});
var content_md = new showdown.Converter({
    tables: true,
    extensions: ['bn_highlight_before', 'bn_table_helper', 'bn_content_md']
});


function summaryMD(markdown) {
    let out = summary_md.makeHtml(markdown);
    //console.log(out);
    return out;
}

function contentMD(markdown) {
    let out = content_md.makeHtml(markdown);
    let codeBlocks = out.match(
        /<pre class="line-numbers language-.*?"><code class="language-.*?">[\s\S]*?<\/code><\/pre>/g);
    if (codeBlocks != null)
        for (let each of codeBlocks) {
            out = out.replace(each, each.replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
        }
    out = out.replace(/<span class="token string"><(.*?)><\/span>/g, '<span class="token string">&lt;$1&gt;<\/span>').replace(
        /¨D/g, '$');
    //console.log(out);
    return out;
}