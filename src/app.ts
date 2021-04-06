// const anchor = document.querySelector('a')!;
// console.log(anchor);


//invoice class
class Invoice {
    // readonly client:string; //other methods and classes can only read the contents of this attribute
    // private details:string;
    // public amount:number; //default is public

    constructor(
        readonly client:string, //shortcut method to declare and assign values in constructor
        private details:string,//applicable only if access specifier is used
        public amount:number
    ){}
    

    format()
    {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
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
