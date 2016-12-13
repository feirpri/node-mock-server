// Class API

var rootDir = process.cwd();
var errorConf = require(rootDir + '/config/errorcode.js');

function decorate(code = '0', body, header = {}){
	var info = errorConf[code];
	if(!info){ return; }
	
	return {
		Code: code,
		Msg: info.info.replace(/\{([^\}]+)\}/ig, function(a,b){
			return header[b] || '';
		}),
		Data: code == 0 ? body : ''
	}
}

module.exports = decorate;
