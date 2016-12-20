let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	
}

module.exports = new Api(paramRegular, function (params, request) {
	return [{
		id: 1,
		key: 'qwe',
		name: '空间1',
		createUser: 'feirpri',
		lastUpdateUser: 'feirpri',
		lastUpdate: '2012-03-03'
	},{
		id: 2,
		key: 'qweffff',
		name: '空间2',
		createUser: 'feirpri',
		lastUpdateUser: 'feirpri',
		lastUpdate: '2012-03-03'
	},{
		id: 3,
		key: 'zxcvbn',
		name: '空间3',
		createUser: 'feirpri',
		lastUpdateUser: 'feirpri',
		lastUpdate: '2012-03-03'
	}]
});
