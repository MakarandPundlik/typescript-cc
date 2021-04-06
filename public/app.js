"use strict";
// const anchor = document.querySelector('a')!;
// console.log(anchor);
//invoice class
var Invoice = /** @class */ (function () {
    // readonly client:string; //other methods and classes can only read the contents of this attribute
    // private details:string;
    // public amount:number; //default is public
    function Invoice(client, //shortcut method to declare and assign values in constructor
    details, //applicable only if access specifier is used
    amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
//object of invoice
var invoiceOne = new Invoice('mak', 'payment', 200);
var invoiceTwo = new Invoice('samu', 'dance class', 500);
//invoiceOne.client = "maku"; //error
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//invoices.push({client:"Samu",details:"test",amount:250}); error
invoices.forEach(function (inv) { return console.log(inv.client, inv.amount, inv.format()); });
var form = document.querySelector('.new-item-form'); //typecasting
//console.log(form);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
