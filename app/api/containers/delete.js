let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	containerIds: [Array, 'required']
}

module.exports = new Api(paramRegular, function (params, request) {
/*	return params.containerIds.map((item) => {
		return {
			id: +item,
			success: true,
			msg: ''
		}
	});*/

	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(params.containerIds.map((item) => {
				return {
					id: +item,
					success: true,
					msg: ''
				}
			}));
		}, 1000);
	});
});
