

import  Invoice  from './classes/invoice.js';//important,browser handles .js files and not .ts
import Payment from './classes/payment.js';
import HasFormatter from './interfaces/HasFormatter.js';
import ListTemplet from './classes/listtemplate.js';
// let docOne : HasFormatter;
// let docTwo : HasFormatter;

// docOne = new Invoice('varad','fees',500);
// docTwo = new Payment('aditya','football',400);

// let docs : HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);

// //object of invoice
// const invoiceOne = new Invoice('mak','payment',200);
// const invoiceTwo = new Invoice('samu','dance class',500);
// //invoiceOne.client = "maku"; //error

// let invoices : Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// //invoices.push({client:"Samu",details:"test",amount:250}); error

// invoices.forEach((inv)=>console.log(inv.client,inv.amount,inv.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement; //typecasting
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const ul = document.querySelector('ul')!;//there is only one 
const list = new ListTemplet(ul);
form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let doc:HasFormatter;//object of this type
    if(type.value==='invoice')
        doc = new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    else 
    doc = new Payment(tofrom.value,details.value,amount.valueAsNumber);
    console.log(doc);

    list.redner(doc,type.value,'start');
})
