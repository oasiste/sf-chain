
const {INITIAL_BALANCE} = require('../config');
const ChainUtil = require('../chain-util');

class Wallet{
	constructor(){
		this.balance=INITIAL_BALANCE;
		this.keyPair=ChainUtil.getKeyPair();
		this.publicKey=this.keyPair.getPublic().encode('hex');
	}

	toString(){
		return `Wallet
		 			publicKey: ${this.publicKey.toString()}
		 			balance: ${this.balance}`;
	}
}

module.exports=Wallet;