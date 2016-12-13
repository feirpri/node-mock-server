let crypto = require('crypto');
let key = 'qwb819u3923ea,.d[-1';
let algorithm = 'blowfish'; // 加密算法

module.exports = {
	encrypt: function (data) {
		if(data instanceof Object){
			data = JSON.stringify(data);
		}

		let cp = crypto.createCipher(algorithm, key);
		return cp.update(data, 'utf8', 'hex') + cp.final('hex');
	},
	decrypt: function(data, toJSON){
		let dcp = crypto.createDecipher(algorithm, key);
		let res = undefined;
		try{
			res = dcp.update(data, 'hex', 'utf8') + dcp.final('utf8');
			res = toJSON ? JSON.parse(res || '{}') : res;
		}catch(e){
			res = undefined;
		}
		return res;
	}
}