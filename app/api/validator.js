let rootDir = process.cwd();
let config = require(rootDir + '/config/validator.js');
let ValidateError = require('../factory/errors').ValidateError;

module.exports = function (paramRegular, params) {
	return new Promise(function(resolve, reject){
		let keys = Object.keys(paramRegular || {});
		keys.forEach(function(key){
			let regulars = paramRegular[key];

			// required
			if(regulars.includes('required') && !params[key]){
				throw new ValidateError([key, '参数不能为空']);
			}

			// otherRegular
			regulars.forEach(function(regular, index, context){
				if(index === 0){return;}
				if(regular === 'required'){ return; }

				if(config[regular] instanceof RegExp){
					if(params[key] !== undefined && !config[regular].test(params[key])){
						throw new ValidateError([key, '参数格式错误']);
					}
				}
			});
		});
		resolve();
	});
}
