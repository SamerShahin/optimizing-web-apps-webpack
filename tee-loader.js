const loaderUtils = require('loader-utils');

module.exports = function (sourceCode) {
/** a simple loader that gets the content of file and options and simply returns the content of the file untouched
 */
 const options = loaderUtils.getOptions(this) || {label: ''};
 console.groupCollapsed(`[Tee Loader-${options.label}] : ${this.resource}`);
 console.groupEnd();
 return sourceCode;
 };
