var styleTitle1 = `
font-size: 20px;
font-weight: 600;
color: rgb(244,167,89);
`
var styleTitle2 = `
font-style: oblique;
font-size:14px;
color: rgb(244,167,89);
font-weight: 400;
`

var styleContent = `
color: rgb(30,152,255);
`
/* 内容代码 */
var title1 = '🌒 BlocklyNukkit Wiki '
var title2 = 'This is Fuuuuuuuuuture!'
var content = `
版 本 号：1.1
作    者：充满仙气的 冰凉  &  可爱的 chencu
官网:  https://wiki.blocklynukkit.com

本网站由BlocklyNukkit Center强力驱动！
点该链接有惊喜 https://cutt.ly/0mSbR0m 
(同时汞锡铌发现了这个彩蛋)
`

console.log(`%c${title1} %c${title2}
%c${content}`, styleTitle1, styleTitle2, styleContent)