// const anchor = document.querySelector('a')!;
// console.log(anchor);
//interfaces
// interface IsPerson {
//     name:string,
//     age:number,
//     speak(a:string):void,
//     spend(a:number):number
// }
// const me : IsPerson = {
//     name:"mak",
//     age:20,
//     speak(text:string):void{
//         console.log(text);
//     },
//     spend(amount:number):number{
//         console.log(`${this.name} has spend ${amount}`)
//         return amount;
//     }
// }
// console.log(me);
// const greetPerson = (person:IsPerson)=>{
//     console.log(`Hello ${person.name}`);
// }
// greetPerson(me);
import Invoice from './classes/invoice.js'; //important,browser handles .js files and not .ts
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
