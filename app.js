// 设置当前工作目录
process.chdir(__dirname);

// 依赖加载
let express = require('express');
let app = express();
let apiDecorate = require('./app/api/apidecorate.js'); // 标准api接口封装
let bodyParser = require('body-parser');
let envConfig = require('./config/env.js');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(express.query());

app.use(function(req, res, next){
	console.log(req.path);
	next();
});

/* API */
app.use(envConfig.application.api_base, function(req, res, next) {
	let apiPath = req.path,
		params = req.query,
		method = req.method.toLowerCase();

	if(params.error){
		res.json(apiDecorate(10000, '未知错误'));
		return;
	}

	(Object.keys(req.body || {})).forEach((item) => {
		params[item] = req.body[item];
	});

	try {
		require('./app/api' + apiPath + '/' + method + '.js')(params, req).then(function(result) {
			res.json(result);
		}).catch(function(err){
			throw new Error(err);
		});
	} catch (e) {
		res.json(apiDecorate(10001));
		console.error(e);
	}
});

app.use(function(err, req, res, next) {
	res.json(apiDecorate(10001));
});

module.exports = app;