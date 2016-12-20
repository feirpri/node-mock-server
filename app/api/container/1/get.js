let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	
}

module.exports = new Api(paramRegular, function (params, request) {
	return {
		id: '1',
		name: '容器1',
		key: 'qwerttyui',
		ip: '192.178.9.1',
		remark: '这个一个用来装逼的容器。之所以说他装13是因为它啥正事儿都不干，就只用来看看效果，装装样子',
		createUser: 'feirpri',
		lastUpdateUser: 'feirpri',
		lastUpdate: '2016-12-12',
		define: {
			image: 'centos7.1',
			workdir: '/home/data/serv/nginx/',
			mem: '4GB',
			cpu: '2核',
			storage: '280G',
			status: 'UP',
			envs: [{
				key: 'path',
				value: '/c/usr/feirpri'
			},{
				key: 'home',
				value: '/c/user/home'
			},{
				key: 'root',
				value: '/'
			}],
		},
		host: {
			hostIp: '120.322.88.11',
			idc: 'test string',
			department: 'test string',
		}
	};
});
