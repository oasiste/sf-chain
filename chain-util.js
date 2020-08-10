const EC = require('elliptic').ec;
const { v4: uuidv4} = require('uuid');
const ec = new EC('secp256k1');

class ChanUtil{
	static getKeyPair(){
		return ec.genKeyPair();
	}

	static id(){
		return uuidv4();
	}
}

module.exports = ChanUtil;