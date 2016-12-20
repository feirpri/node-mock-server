let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	
}

module.exports = new Api(paramRegular, function (params, request) {
	return [{
		name: '微型',
		cpu: '1核',
		mem: '640M',
		storage: '100G',
	}, {
		name: '中型',
		cpu: '2核',
		mem: '1G',
		storage: '150G',
	}, {
		name: '大型',
		cpu: '4核',
		mem: '2G',
		storage: '200G',
	}, {
		name: '超大型',
		cpu: '4核',
		mem: '8G',
		storage: '300G',
	}, {
		name: '企业级',
		cpu: '8核',
		mem: '12G',
		storage: '600G',
	}];
});
