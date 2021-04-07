import HasFormatter from '../interfaces/HasFormatter.js';

//invoice class
class Payment implements HasFormatter {
    // readonly client:string; //other methods and classes can only read the contents of this attribute
    // private details:string;
    // public amount:number; //default is public

    constructor(
        readonly recepient:string, //shortcut method to declare and assign values in constructor
        private details:string,//applicable only if access specifier is used
        public amount:number
    ){}
    

    format()
    {
        return `${this.recepient} owes $${this.amount} for ${this.details}`
    }
}

export default Payment;