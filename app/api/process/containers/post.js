let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	containerKey: [String, 'required'],
	containerName: [String, 'required'],
	remark: [String],
	define: [Object],
	number: [Number, 'required'],
	workspaceId: [Number, 'required']
}

module.exports = new Api(paramRegular, function (params, request) {
	return [{
		processId: 1
	}];
});
