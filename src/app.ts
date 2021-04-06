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

import  Invoice  from './classes/invoice.js';//important,browser handles .js files and not .ts
//object of invoice
const invoiceOne = new Invoice('mak','payment',200);
const invoiceTwo = new Invoice('samu','dance class',500);
//invoiceOne.client = "maku"; //error

let invoices : Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
//invoices.push({client:"Samu",details:"test",amount:250}); error

invoices.forEach((inv)=>console.log(inv.client,inv.amount,inv.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement; //typecasting
//console.log(form);
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
})
