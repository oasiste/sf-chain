const Transaction = require('./transaction');
const Wallet = require('./index');


describe('Transaction',()=>{

	let transaction,wallet,recipient,amount;

	beforeEach(()=>{
		wallet = new Wallet();
		amount = 50;
		recipient = 'r3c1p13nt';
		transaction = Transaction.newTransaction(wallet,recipient,amount);
	});

	it('output the `amount` subtracted from the wallet balance',()=>{

		expect(transaction.outputs.find(output=>output.address == wallet.publicKey).amount).toEqual(wallet.balance-amount);
	});


	it('output the `amount` added to the recipient',()=>{

		expect(transaction.outputs.find(output=>output.address == recipient).amount).toEqual(amount);
	});

});