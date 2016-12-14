let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	
}

module.exports = new Api(paramRegular, function (params, request) {
	return {
		username: 'linguanghui',
		fullname: '林光辉'
	}
});
