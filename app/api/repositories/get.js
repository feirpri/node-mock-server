let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	project_id: [Number, 'required']
}

module.exports = new Api(paramRegular, function (params, request) {
	return [
		"library/centos",
		"library/jdk",
		"library/maven",
		"library/runtime",
		"library/tomcat"
	];
});
