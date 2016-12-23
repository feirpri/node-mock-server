let rootDir = process.cwd(); //应用的根目录
let Api = require(`${rootDir}/app/api/api.js`);
let ApiError = require(`${rootDir}/app/api/apierror.js`);

// 定义参数规则
let paramRegular = {
	repo_name: [String, 'required']
}

module.exports = new Api(paramRegular, function(params, request) {
	return [{
		"Id": "3dee206689aedfceb3cebf8b26f020d94096260a600595cb9a2ddf4d4eaf5906",
		"Parent": "dfe64c1a7b0880d5ae343f6f725539693cbd05d178ae3e07fc3092acca1edd0f",
		"Created": "2016-12-14T06:59:52.21631993Z",
		"Duration Days": "8 days",
		"Author": "Merlyn <luohanlin@jd.com>",
		"Architecture": "amd64",
		"Docker Version": "",
		"OS": "linux",
		"Tag": "runtime"
	}, {
		"Id": "ae0232102b542615a8ed3b3dc92650d00b4fb394ebc6fc84bdee4162c36536ab",
		"Parent": "c64bc4f1ae7a03353d60415f16a9f4269fe83a10acca67a9bd2370154b2feed3",
		"Created": "2016-12-14T06:51:35.687802738Z",
		"Duration Days": "8 days",
		"Author": "Merlyn <luohanlin@jd.com>",
		"Architecture": "amd64",
		"Docker Version": "",
		"OS": "linux",
		"Tag": "runtime-7.2"
	}, {
		"Id": "3989c72ac038e9272e8878f04578820716cc79cb45e898ea9dc7f90000745b9f",
		"Parent": "436d1c5f574d65a6ac3da45c45bcd4527f5369b7ed2b41352698a44734a02f72",
		"Created": "2016-11-18T04:46:51.430588228Z",
		"Duration Days": "34 days",
		"Author": "Merlyn <luohanlin@jd.com>",
		"Architecture": "amd64",
		"Docker Version": "",
		"OS": "linux",
		"Tag": "base-7.2"
	}, {
		"Id": "ebcfcde824341060a238371d3375748c7de7f61bbdf399fabacaa14a60993309",
		"Parent": "2e4cdbe3ebe4017c7f8ac1d307b8b8a1dad6c5a4770ae855e3aa6949259de032",
		"Created": "2016-11-16T06:51:10.792447101Z",
		"Duration Days": "36 days",
		"Author": "Merlyn <luohanlin@jd.com>",
		"Architecture": "amd64",
		"Docker Version": "",
		"OS": "linux",
		"Tag": "base"
	}];
});