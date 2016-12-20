let rootDir = process.cwd(); //应用的根目录
let Api = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	workspaceId: [Number]
}

module.exports = new Api(paramRegular, function(params, request) {
	return [{
		id: 1,
		containerName: '容器1',
		containerKey: 'qwertyuio',
		ip: '192.168.1.1',
		image: 'centos7',
		status: 'UP'
	}, {
		id: 2,
		containerName: '容器1',
		containerKey: 'qwertyuio',
		ip: '192.168.1.1',
		image: 'centos7',
		status: 'ERROR'
	}];
});