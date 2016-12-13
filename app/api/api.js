/*Class API*/

let rootDir = process.cwd();
let ApiError = require(rootDir + '/app/api/apierror.js');
let validate = require(rootDir + '/app/api/validator.js');
let decorate = require(rootDir + '/app/api/apidecorate.js');

function Api(paramRegular, handdle) {
	function main(params, request) {
		return new Promise(function(resolve) {
			validate(paramRegular, params).then(function() {
				let result;

				try {
					result = handdle(params, request);
				} catch (e) {
					result = Promise.reject(e);
				}

				// 同步流程异步化
				if (!result || !result.then || result.then.constructor !== Function) {
					result = Promise.resolve(result);
				}

				// 处理结果
				return result.then(function(result) {
					resolve(decorate(0, result));
				});
			}).catch((e) => {
				switch (e.name) {
					case 'ValidateError':
						resolve(decorate(10002, '', {
							message: `[ ${e.message[0]} ]${e.message[1]}`
						}));
						break;
					case 'ApiError':
						resolve(decorate(e.code, '', {
							message: e.message
						}));
						break;
					default:
						console.error(e);
						resolve(decorate(10005, '', {
							message: e.message || e || '未知错误'
						}));
				}
			});
		});
	}
	return main;
}

module.exports = Api;