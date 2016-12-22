let rootDir  = process.cwd(); //应用的根目录
let Api      = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	from: [Number],
	to: [Number]
}

module.exports = new Api(paramRegular, function (params, request) {
	params.from = +params.from;
	params.to = +params.to;

	let delta = Math.floor((params.to - params.from) / 80);
	let date = params.from;
	let res = [];

	while(date < params.to){
		res.push([new Date(date * 1000).getTime(), Math.floor((Math.random() * 0.3 + 0.4) * 100)/100]);
		date += delta;
	}

	// 业务逻辑在这里
	return res;
});
