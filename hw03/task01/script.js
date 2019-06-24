function Account(number, type, creationDate, isActive) {
    this.number = number;
    this.type = type;
    this.creationDate = creationDate;
    this.isActive = isActive;
}

Account.prototype.getNumber = function () {
    return this.number;
}
Account.prototype.getType = function () {
    return this.type;
}
Account.prototype.getCreationDate = function () {
    return this.creationDate;
}

Account.prototype.setNumber = function (number) {
    this.number = number;
}
Account.prototype.setType = function (type) {
    this.type = type;
}
Account.prototype.setCreationDate = function (creationDate) {
    this.creationDate = creationDate;
}


function CurrentAccount() {
    Account.apply(this, arguments);

    this.expiredOn = '2100.20.00';
}

function SavingsAccount() {
    Account.apply(this, arguments);

    this.amount = 100;
    this.transactionDate;
}


CurrentAccount.prototype = Object.create(Account.prototype);

CurrentAccount.prototype.getExpiredOn = function () {
    return this.expiredOn;
}


SavingsAccount.prototype = Object.create(Account.prototype);

SavingsAccount.prototype.getAmount = function () {
    return this.amount;
}
SavingsAccount.prototype.setAmount = function (amount) {
    this.amount = amount;
}



var account1 = new CurrentAccount(001, 'CA-A', '20.07.2019', '');
var account2 = new CurrentAccount(002, 'CA-A', '21.07.2019', '1');
var account3 = new CurrentAccount(005, 'CA-B', '22.07.2019', '');

console.log(account1);
console.log(account2);
console.log(account3);

console.log(account1.getType());
console.log(account1.getExpiredOn());


var account11 = new SavingsAccount(011, 'SA', '24.07.2019', '1');

console.log(account11);

console.log(account11.getAmount());

account11.setAmount(150);
console.log(account11.getAmount());