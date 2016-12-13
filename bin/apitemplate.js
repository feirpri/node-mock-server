let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
var paramRegular = {
	test: [Number, 'required']
}

module.exports = new Api(paramRegular, function (params, request) {
	/*主动抛出错误 测试*/
	if(params.error){
		throw new ApiError(10005, '出现了一些错误...');
	}

	if(params.timeout){
		return new Promise((resolve) => {
			setTimeout(function(){
				resolve(`异步任务测试，返回结果延迟了${params.timeout}秒`);
			}, +params.timeout || 1000);
		});
	}

	// 业务逻辑在这里
	return params;
});
