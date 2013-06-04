/*
 * fis
 * http://web.baidu.com/
 */

'use strict';

var bdtmpl = require('baidutemplate').template;

module.exports = function(content, file, conf){
    fis.util.merge(bdtmpl, conf);
    return bdtmpl(content).toString().replace(/^function anonymous/, 'function');
};