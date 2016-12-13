// 参数验证类错误
function ValidateError(err){
	this.name = 'ValidateError';
	this.message = err;
}
ValidateError.prototype = Object.create(Error.prototype);
ValidateError.prototype.constructor = ValidateError;

// 由接口主动返回的错误
function ApiError(code, err){
	this.name = 'ApiError';
	this.message = err;
	this.code = code;
}
ApiError.prototype = Object.create(Error.prototype);
ApiError.prototype.constructor = ApiError;


module.exports = {
	ValidateError: ValidateError,
	ApiError: ApiError
};
