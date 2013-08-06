/*
 * fis
 * http://web.baidu.com/
 */

'use strict';

var bdtmpl = require('baidutemplate-x').template;

module.exports = function(content, file, conf){
    fis.util.map(conf, bdtmpl, true);
    content = bdtmpl._compile(content).toString().replace(/^function anonymous/, 'function');
    return '[' + content + '][0]';
};